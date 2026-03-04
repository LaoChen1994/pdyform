import { FormField } from './types.js';

declare function validateField(value: any, field: FormField): string | null;
declare function getDefaultValues(fields: FormField[]): Record<string, any>;

export { getDefaultValues, validateField };
