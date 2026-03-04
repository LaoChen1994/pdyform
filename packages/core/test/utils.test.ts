import { describe, it, expect } from 'vitest';
import { validateField, getDefaultValues } from '../src';
import { FormField } from '../src/types';

describe('core utils - validateField', () => {
  it('returns null if there are no validations', () => {
    const field: FormField = { name: 'f1', label: 'Field 1', type: 'text' };
    expect(validateField('any value', field)).toBeNull();
  });

  describe('required', () => {
    const field: FormField = { name: 'f1', label: 'Field 1', type: 'text', validations: [{ type: 'required', message: 'req' }] };
    
    it('fails on undefined, null, empty string, or empty array', () => {
      expect(validateField(undefined, field)).toBe('req');
      expect(validateField(null, field)).toBe('req');
      expect(validateField('', field)).toBe('req');
      expect(validateField([], field)).toBe('req');
    });

    it('passes on valid values', () => {
      expect(validateField('test', field)).toBeNull();
      expect(validateField(0, field)).toBeNull();
      expect(validateField(['a'], field)).toBeNull();
    });
  });

  describe('min/max', () => {
    const fieldStr: FormField = { name: 'f1', label: 'F1', type: 'text', validations: [{ type: 'min', value: 3 }, { type: 'max', value: 5 }] };
    const fieldNum: FormField = { name: 'f2', label: 'F2', type: 'number', validations: [{ type: 'min', value: 10 }, { type: 'max', value: 20 }] };

    it('validates string length', () => {
      expect(validateField('ab', fieldStr)).toBe('F1 must be at least 3 characters');
      expect(validateField('abc', fieldStr)).toBeNull();
      expect(validateField('abcdef', fieldStr)).toBe('F1 must be at most 5 characters');
    });

    it('validates number value', () => {
      expect(validateField(9, fieldNum)).toBe('F2 must be at least 10');
      expect(validateField(10, fieldNum)).toBeNull();
      expect(validateField(21, fieldNum)).toBe('F2 must be at most 20');
    });
  });

  describe('email', () => {
    const field: FormField = { name: 'e', label: 'E', type: 'text', validations: [{ type: 'email' }] };

    it('validates email format', () => {
      expect(validateField('invalid', field)).toBe('Invalid email address');
      expect(validateField('test@test.com', field)).toBeNull();
      expect(validateField(undefined, field)).toBeNull(); // Empty check is for required
    });
  });

  describe('pattern', () => {
    const field: FormField = { name: 'p', label: 'P', type: 'text', validations: [{ type: 'pattern', value: '^[0-9]+$' }] };

    it('validates regex', () => {
      expect(validateField('abc', field)).toBe('Invalid format');
      expect(validateField('123', field)).toBeNull();
    });
  });

  describe('custom', () => {
    const field: FormField = { 
      name: 'c', label: 'C', type: 'text', 
      validations: [{ type: 'custom', validator: (val) => val === 'magic' ? true : 'Not magic' }] 
    };

    it('uses custom validator', () => {
      expect(validateField('test', field)).toBe('Not magic');
      expect(validateField('magic', field)).toBeNull();
    });
  });
});

describe('core utils - getDefaultValues', () => {
  it('returns correctly mapped default values', () => {
    const fields: FormField[] = [
      { name: 't1', label: 'T1', type: 'text', defaultValue: 'default' },
      { name: 't2', label: 'T2', type: 'text' },
      { name: 'cb1', label: 'CB1', type: 'checkbox' },
      { name: 'cb2', label: 'CB2', type: 'checkbox', defaultValue: ['opt1'] }
    ] as any;

    expect(getDefaultValues(fields)).toEqual({
      t1: 'default',
      t2: '',
      cb1: [],
      cb2: ['opt1']
    });
  });
});
