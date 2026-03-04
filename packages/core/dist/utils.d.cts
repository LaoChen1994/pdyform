import { FormField } from './types.cjs';

declare function normalizeFieldValue(field: FormField, value: unknown): unknown;
declare function validateField(value: any, field: FormField): string | null;
declare function validateFieldByName(fields: FormField[], name: string, value: unknown): string | null;
declare function validateForm(fields: FormField[], values: Record<string, any>): Record<string, string>;
declare function getDefaultValues(fields: FormField[]): Record<string, any>;

export { getDefaultValues, normalizeFieldValue, validateField, validateFieldByName, validateForm };
