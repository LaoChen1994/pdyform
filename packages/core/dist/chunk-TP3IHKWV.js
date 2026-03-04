import {
  getDefaultValues,
  normalizeFieldValue,
  validateFieldByName,
  validateForm
} from "./chunk-WEDHXOHH.js";

// src/formState.ts
function createFormRuntimeState(fields) {
  return {
    values: getDefaultValues(fields),
    errors: {},
    isSubmitting: false
  };
}
function setSubmitting(state, isSubmitting) {
  return {
    ...state,
    isSubmitting
  };
}
function applyFieldChange(fields, state, name, rawValue) {
  const field = fields.find((f) => f.name === name);
  const normalizedValue = field ? normalizeFieldValue(field, rawValue) : rawValue;
  const values = {
    ...state.values,
    [name]: normalizedValue
  };
  const error = validateFieldByName(fields, name, normalizedValue);
  const errors = {
    ...state.errors,
    [name]: error || ""
  };
  return {
    ...state,
    values,
    errors
  };
}
function applyFieldBlur(fields, state, name) {
  const error = validateFieldByName(fields, name, state.values[name]);
  return {
    ...state,
    errors: {
      ...state.errors,
      [name]: error || ""
    }
  };
}
function runSubmitValidation(fields, state) {
  const errors = validateForm(fields, state.values);
  const hasError = Object.keys(errors).length > 0;
  return {
    state: {
      ...state,
      errors,
      isSubmitting: false
    },
    hasError
  };
}

export {
  createFormRuntimeState,
  setSubmitting,
  applyFieldChange,
  applyFieldBlur,
  runSubmitValidation
};
