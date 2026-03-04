import { Component } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_Props = {
    schema: FormSchema;
    className?: string;
};

declare type __VLS_Props_2 = {
    field: FormField;
    modelValue: any;
    error?: string;
    /**
     * Custom component map.
     * Entries here are merged with the default map, so you can override
     * specific types or add entirely new ones.
     *
     * @example
     * ```ts
     * import { defaultComponentMap } from 'pdyform-vue';
     * const myMap = {
     *   ...defaultComponentMap,
     *   text: MyCustomInput,       // overrides built-in text input
     *   rating: StarRatingField,   // adds a new field type
     * };
     * ```
     */
    componentMap?: FieldComponentMap;
};

/** The default built-in component map */
export declare const defaultComponentMap: FieldComponentMap;

export declare const DynamicForm: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
submit: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{
onSubmit?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLFormElement>;

/** Map from field type to a Vue component */
export declare type FieldComponentMap = Record<string, Component>;

/**
 * The props interface that every field renderer component must accept.
 * Custom field renderers must implement this interface.
 */
export declare interface FieldRendererProps {
    field: FormField;
    modelValue: any;
    fieldId: string;
}

declare type FieldType = 'text' | 'number' | 'email' | 'password' | 'select' | 'checkbox' | 'radio' | 'textarea' | 'date';

declare interface FormField {
    id: string;
    name: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    description?: string;
    defaultValue?: any;
    options?: Option_2[]; // For select, radio, checkbox
    validations?: ValidationRule[];
    hidden?: boolean;
    disabled?: boolean;
    className?: string; // CSS class for custom styling
}

export declare const FormFieldRenderer: DefineComponent<__VLS_Props_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_Props_2> & Readonly<{
"onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare interface FormSchema {
    title?: string;
    description?: string;
    fields: FormField[];
    submitButtonText?: string;
}

declare interface Option_2 {
    label: string;
    value: string | number;
}

declare interface ValidationRule {
    type: 'required' | 'min' | 'max' | 'pattern' | 'email' | 'custom';
    value?: any;
    message?: string;
    validator?: (value: any) => boolean | string;
}

export { }
