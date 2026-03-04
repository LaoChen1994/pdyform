import { FormField } from './types.cjs';

declare function validateField(value: any, field: FormField): string | null;
declare function getDefaultValues(fields: FormField[]): Record<string, any>;

export { getDefaultValues, validateField };
