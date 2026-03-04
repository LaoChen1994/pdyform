type FieldType = 'text' | 'number' | 'email' | 'password' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'date';
interface ValidationRule {
    type: 'required' | 'min' | 'max' | 'pattern' | 'email' | 'custom';
    value?: any;
    message?: string;
    validator?: (value: any) => boolean | string;
}
interface Option {
    label: string;
    value: string | number;
}
interface FormField {
    id: string;
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    description?: string;
    defaultValue?: any;
    options?: Option[];
    validations?: ValidationRule[];
    hidden?: boolean;
    disabled?: boolean;
    className?: string;
}
interface FormSchema {
    title?: string;
    description?: string;
    fields: FormField[];
    submitButtonText?: string;
}
interface FormState {
    values: Record<string, any>;
    errors: Record<string, string>;
    isSubmitting: boolean;
    isValid: boolean;
}

export type { FieldType, FormField, FormSchema, FormState, Option, ValidationRule };
