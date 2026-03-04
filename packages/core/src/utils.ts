import type { FormField } from './types';

export function validateField(value: any, field: FormField): string | null {
  if (!field.validations) return null;

  for (const rule of field.validations) {
    switch (rule.type) {
      case 'required':
        if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
          return rule.message || `${field.label} is required`;
        }
        break;
      case 'min':
        if (typeof value === 'number' && value < rule.value) {
          return rule.message || `${field.label} must be at least ${rule.value}`;
        }
        if (typeof value === 'string' && value.length < rule.value) {
          return rule.message || `${field.label} must be at least ${rule.value} characters`;
        }
        break;
      case 'max':
        if (typeof value === 'number' && value > rule.value) {
          return rule.message || `${field.label} must be at most ${rule.value}`;
        }
        if (typeof value === 'string' && value.length > rule.value) {
          return rule.message || `${field.label} must be at most ${rule.value} characters`;
        }
        break;
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          return rule.message || 'Invalid email address';
        }
        break;
      }
      case 'pattern':
        if (value && rule.value && !new RegExp(rule.value).test(value)) {
          return rule.message || 'Invalid format';
        }
        break;
      case 'custom':
        if (rule.validator) {
          const result = rule.validator(value);
          if (typeof result === 'string') return result;
          if (!result) return rule.message || 'Invalid value';
        }
        break;
    }
  }

  return null;
}

export function getDefaultValues(fields: FormField[]): Record<string, any> {
  return fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue !== undefined ? field.defaultValue : (field.type === 'checkbox' ? [] : '');
    return acc;
  }, {} as Record<string, any>);
}
