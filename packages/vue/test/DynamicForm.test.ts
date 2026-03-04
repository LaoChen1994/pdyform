// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DynamicForm from '../src/DynamicForm.vue';

describe('Vue DynamicForm', () => {
  const schema: any = {
    fields: [
      { name: 'username', label: 'Username', type: 'text' }
    ]
  };

  it('renders correctly', () => {
    const wrapper = mount(DynamicForm, {
      props: { schema }
    });
    expect(wrapper.find('label').text()).toBe('Username');
  });
});
