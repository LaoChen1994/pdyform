import { describe, it, expect } from 'vitest';
import {
  createFormRuntimeState,
  setSubmitting,
  applyFieldChange,
  applyFieldBlur,
  runSubmitValidation,
} from '../src';
import type { FormField } from '../src/types';

const fields: FormField[] = [
  {
    id: 'age',
    name: 'age',
    label: 'Age',
    type: 'number',
    validations: [{ type: 'min', value: 18, message: 'Age must be at least 18' }],
  },
  {
    id: 'name',
    name: 'name',
    label: 'Name',
    type: 'text',
    validations: [{ type: 'required', message: 'Name is required' }],
  },
];

describe('core formState helpers', () => {
  it('creates initial runtime state', () => {
    const state = createFormRuntimeState(fields);
    expect(state).toEqual({
      values: { age: '', name: '' },
      errors: {},
      isSubmitting: false,
    });
  });

  it('sets submitting state', () => {
    const state = createFormRuntimeState(fields);
    expect(setSubmitting(state, true).isSubmitting).toBe(true);
  });

  it('applies field change with normalization and inline validation', () => {
    const state = createFormRuntimeState(fields);
    const next = applyFieldChange(fields, state, 'age', '22');

    expect(next.values.age).toBe(22);
    expect(next.errors.age).toBe('');
  });

  it('applies blur validation', () => {
    const state = createFormRuntimeState(fields);
    const withInvalidName = applyFieldChange(fields, state, 'name', '');
    const onBlur = applyFieldBlur(fields, withInvalidName, 'name');

    expect(onBlur.errors.name).toBe('Name is required');
  });

  it('runs submit validation and returns hasError flag', () => {
    const state = createFormRuntimeState(fields);
    const dirty = applyFieldChange(fields, state, 'age', '16');
    const submitting = setSubmitting(dirty, true);

    const result = runSubmitValidation(fields, submitting);

    expect(result.hasError).toBe(true);
    expect(result.state.isSubmitting).toBe(false);
    expect(result.state.errors.age).toBe('Age must be at least 18');
    expect(result.state.errors.name).toBe('Name is required');
  });
});
