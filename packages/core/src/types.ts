export type FieldType = 'text' | 'number' | 'email' | 'password' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'date';

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'email' | 'custom';
  value?: any;
  message?: string;
  validator?: (value: any) => boolean | string;
}

export interface Option {
  label: string;
  value: string | number;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  description?: string;
  defaultValue?: any;
  options?: Option[]; // For select, radio, checkbox
  validations?: ValidationRule[];
  hidden?: boolean;
  disabled?: boolean;
  className?: string; // CSS class for custom styling
}

export interface FormSchema {
  title?: string;
  description?: string;
  fields: FormField[];
  submitButtonText?: string;
}

export interface FormState {
  values: Record<string, any>;
  errors: Record<string, string>;
  isSubmitting: boolean;
  isValid: boolean;
}
