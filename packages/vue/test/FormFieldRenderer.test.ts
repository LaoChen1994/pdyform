// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import FormFieldRenderer from '../src/FormFieldRenderer.vue';
import type { FormField } from 'pdyform/core';

describe('FormFieldRenderer', () => {
  const defaultField: FormField = {
    name: 'testField',
    label: 'Test Label',
    type: 'text',
  };

  it('renders a text input correctly', async () => {
    const wrapper = mount(FormFieldRenderer, {
      props: { field: defaultField, modelValue: 'test value' }
    });
    
    expect(wrapper.find('label').text()).toBe('Test Label');
    const input = wrapper.find('input');
    expect((input.element as HTMLInputElement).value).toBe('test value');
    expect((input.element as HTMLInputElement).type).toBe('text');
    
    await input.setValue('new value');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new value']);
  });

  it('renders a textarea correctly', async () => {
    const field: FormField = { ...defaultField, type: 'textarea' };
    const wrapper = mount(FormFieldRenderer, {
      props: { field, modelValue: 'text\narea' }
    });
    
    const textarea = wrapper.find('textarea');
    expect((textarea.element as HTMLTextAreaElement).value).toBe('text\narea');
    
    await textarea.setValue('new textarea value');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['new textarea value']);
  });

  it('renders a select correctly', async () => {
    const field: FormField = { 
      ...defaultField, 
      type: 'select', 
      options: [
        { label: 'Option 1', value: 'opt1' },
        { label: 'Option 2', value: 'opt2' }
      ]
    };
    const wrapper = mount(FormFieldRenderer, {
      props: { field, modelValue: 'opt1' }
    });
    
    const select = wrapper.find('select');
    expect((select.element as HTMLSelectElement).value).toBe('opt1');
    
    await select.setValue('opt2');
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['opt2']);
  });

  it('renders a checkbox correctly', async () => {
    const field: FormField = { 
      ...defaultField, 
      type: 'checkbox', 
      options: [
        { label: 'Check 1', value: 'c1' },
        { label: 'Check 2', value: 'c2' }
      ]
    };
    const wrapper = mount(FormFieldRenderer, {
      props: { field, modelValue: ['c1'] }
    });
    
    const checkboxes = wrapper.findAll('input[type="checkbox"]');
    expect((checkboxes[0].element as HTMLInputElement).checked).toBe(true);
    expect((checkboxes[1].element as HTMLInputElement).checked).toBe(false);
    
    await checkboxes[1].setValue(true);
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([['c1', 'c2']]);
  });

  it('renders a radio correctly', async () => {
    const field: FormField = { 
      ...defaultField, 
      type: 'radio', 
      options: [
        { label: 'Radio 1', value: 'r1' },
        { label: 'Radio 2', value: 'r2' }
      ]
    };
    const wrapper = mount(FormFieldRenderer, {
      props: { field, modelValue: 'r1' }
    });
    
    const radios = wrapper.findAll('input[type="radio"]');
    expect((radios[0].element as HTMLInputElement).checked).toBe(true);
    expect((radios[1].element as HTMLInputElement).checked).toBe(false);
    
    await radios[1].setValue(true);
    expect(wrapper.emitted('update:modelValue')![0]).toEqual(['r2']);
  });

  it('displays description and error', () => {
    const field: FormField = { ...defaultField, description: 'Desc text' };
    const wrapper = mount(FormFieldRenderer, {
      props: { field, modelValue: '', error: 'Error text' }
    });
    
    expect(wrapper.text()).toContain('Desc text');
    expect(wrapper.text()).toContain('Error text');
  });
});
