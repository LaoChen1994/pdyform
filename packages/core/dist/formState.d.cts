import { FormField } from './types.cjs';

interface FormRuntimeState {
    values: Record<string, any>;
    errors: Record<string, string>;
    isSubmitting: boolean;
}
declare function createFormRuntimeState(fields: FormField[]): FormRuntimeState;
declare function setSubmitting(state: FormRuntimeState, isSubmitting: boolean): FormRuntimeState;
declare function applyFieldChange(fields: FormField[], state: FormRuntimeState, name: string, rawValue: unknown): FormRuntimeState;
declare function applyFieldBlur(fields: FormField[], state: FormRuntimeState, name: string): FormRuntimeState;
declare function runSubmitValidation(fields: FormField[], state: FormRuntimeState): {
    state: FormRuntimeState;
    hasError: boolean;
};

export { type FormRuntimeState, applyFieldBlur, applyFieldChange, createFormRuntimeState, runSubmitValidation, setSubmitting };
