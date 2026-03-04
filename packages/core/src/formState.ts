import type { FormField } from './types';
import { getDefaultValues, normalizeFieldValue, validateFieldByName, validateForm } from './utils';

export interface FormRuntimeState {
  values: Record<string, any>;
  errors: Record<string, string>;
  isSubmitting: boolean;
}

export function createFormRuntimeState(fields: FormField[]): FormRuntimeState {
  return {
    values: getDefaultValues(fields),
    errors: {},
    isSubmitting: false,
  };
}

export function setSubmitting(state: FormRuntimeState, isSubmitting: boolean): FormRuntimeState {
  return {
    ...state,
    isSubmitting,
  };
}

export function applyFieldChange(
  fields: FormField[],
  state: FormRuntimeState,
  name: string,
  rawValue: unknown
): FormRuntimeState {
  const field = fields.find((f) => f.name === name);
  const normalizedValue = field ? normalizeFieldValue(field, rawValue) : rawValue;

  const values = {
    ...state.values,
    [name]: normalizedValue,
  };

  const error = validateFieldByName(fields, name, normalizedValue);
  const errors = {
    ...state.errors,
    [name]: error || '',
  };

  return {
    ...state,
    values,
    errors,
  };
}

export function applyFieldBlur(fields: FormField[], state: FormRuntimeState, name: string): FormRuntimeState {
  const error = validateFieldByName(fields, name, state.values[name]);

  return {
    ...state,
    errors: {
      ...state.errors,
      [name]: error || '',
    },
  };
}

export function runSubmitValidation(
  fields: FormField[],
  state: FormRuntimeState
): { state: FormRuntimeState; hasError: boolean } {
  const errors = validateForm(fields, state.values);
  const hasError = Object.keys(errors).length > 0;

  return {
    state: {
      ...state,
      errors,
      isSubmitting: false,
    },
    hasError,
  };
}
