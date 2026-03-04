import { describe, it, expect } from 'vitest';
import { validateField, getDefaultValues } from '../src';
import { FormField } from '../src/types';

describe('core utils', () => {
  it('should validate required fields', () => {
    const field: FormField = {
      name: 'test',
      label: 'Test',
      type: 'text',
      validations: [{ type: 'required', message: 'Required' }]
    };
    expect(validateField('', field)).toBe('Required');
    expect(validateField('val', field)).toBeNull();
  });

  it('should validate regex', () => {
    const field: FormField = {
      name: 'test',
      label: 'Test',
      type: 'text',
      validations: [{ type: 'pattern', value: '^[0-9]+$', message: 'Only numbers' }]
    };
    expect(validateField('abc', field)).toBe('Only numbers');
    expect(validateField('123', field)).toBeNull();
  });

  it('should get default values', () => {
    const schema = {
      fields: [
        { name: 'f1', label: 'L1', type: 'text', defaultValue: 'v1' },
        { name: 'f2', label: 'L2', type: 'text' }
      ]
    } as any;
    expect(getDefaultValues(schema.fields)).toEqual({ f1: 'v1', f2: '' });
  });
});
