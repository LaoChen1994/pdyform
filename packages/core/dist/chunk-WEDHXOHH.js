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

export {
  normalizeFieldValue,
  validateField,
  validateFieldByName,
  validateForm,
  getDefaultValues
};
