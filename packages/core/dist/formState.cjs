"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/formState.ts
var formState_exports = {};
__export(formState_exports, {
  applyFieldBlur: () => applyFieldBlur,
  applyFieldChange: () => applyFieldChange,
  createFormRuntimeState: () => createFormRuntimeState,
  runSubmitValidation: () => runSubmitValidation,
  setSubmitting: () => setSubmitting
});
module.exports = __toCommonJS(formState_exports);

// src/utils.ts
function parseNumberish(value) {
  if (typeof value === "number") return Number.isNaN(value) ? null : value;
  if (typeof value !== "string" || value.trim() === "") return null;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? null : parsed;
}
function normalizeFieldValue(field, value) {
  if (field.type !== "number") return value;
  if (value === "" || value === void 0 || value === null) return "";
  const numericValue = parseNumberish(value);
  return numericValue === null ? value : numericValue;
}
function validateField(value, field) {
  if (!field.validations) return null;
  for (const rule of field.validations) {
    switch (rule.type) {
      case "required":
        if (value === void 0 || value === null || value === "" || Array.isArray(value) && value.length === 0) {
          return rule.message || `${field.label} is required`;
        }
        break;
      case "min":
        if (field.type === "number") {
          const numericValue = parseNumberish(value);
          if (numericValue !== null && numericValue < rule.value) {
            return rule.message || `${field.label} must be at least ${rule.value}`;
          }
          break;
        }
        if (typeof value === "number" && value < rule.value) {
          return rule.message || `${field.label} must be at least ${rule.value}`;
        }
        if (typeof value === "string" && value.length < rule.value) {
          return rule.message || `${field.label} must be at least ${rule.value} characters`;
        }
        break;
      case "max":
        if (field.type === "number") {
          const numericValue = parseNumberish(value);
          if (numericValue !== null && numericValue > rule.value) {
            return rule.message || `${field.label} must be at most ${rule.value}`;
          }
          break;
        }
        if (typeof value === "number" && value > rule.value) {
          return rule.message || `${field.label} must be at most ${rule.value}`;
        }
        if (typeof value === "string" && value.length > rule.value) {
          return rule.message || `${field.label} must be at most ${rule.value} characters`;
        }
        break;
      case "email": {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          return rule.message || "Invalid email address";
        }
        break;
      }
      case "pattern":
        if (value && rule.value && !new RegExp(rule.value).test(value)) {
          return rule.message || "Invalid format";
        }
        break;
      case "custom":
        if (rule.validator) {
          const result = rule.validator(value);
          if (typeof result === "string") return result;
          if (!result) return rule.message || "Invalid value";
        }
        break;
    }
  }
  return null;
}
function validateFieldByName(fields, name, value) {
  const field = fields.find((f) => f.name === name);
  if (!field) return null;
  return validateField(value, field);
}
function validateForm(fields, values) {
  const errors = {};
  for (const field of fields) {
    const error = validateField(values[field.name], field);
    if (error) errors[field.name] = error;
  }
  return errors;
}
function getDefaultValues(fields) {
  return fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue !== void 0 ? field.defaultValue : field.type === "checkbox" ? [] : "";
    return acc;
  }, {});
}

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  applyFieldBlur,
  applyFieldChange,
  createFormRuntimeState,
  runSubmitValidation,
  setSubmitting
});
