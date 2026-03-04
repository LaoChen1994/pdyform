import * as React from 'react';
import React__default from 'react';
import { FormSchema, FormField } from 'pdyform/core';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SelectPrimitive from '@radix-ui/react-select';

interface DynamicFormProps {
    schema: FormSchema;
    onSubmit: (values: Record<string, any>) => void;
    className?: string;
}
declare const DynamicForm: React__default.FC<DynamicFormProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

declare const Checkbox: React.ForwardRefExoticComponent<Omit<CheckboxPrimitive.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const RadioGroupItem: React.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Label: React.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React.RefAttributes<HTMLLabelElement>>;

/** All props passed into each individual field renderer component */
interface FieldRenderContext {
    field: FormField;
    value: any;
    onChange: (value: any) => void;
    onBlur?: () => void;
    fieldId: string;
}
/** A React component that renders a specific field type */
type FieldRenderer = React__default.ComponentType<FieldRenderContext>;
/** Map from field `type` string to its renderer component */
type FieldComponentMap = Record<string, FieldRenderer>;

declare const InputRenderer: React__default.FC<FieldRenderContext>;

declare const TextareaRenderer: React__default.FC<FieldRenderContext>;

declare const SelectRenderer: React__default.FC<FieldRenderContext>;

declare const CheckboxRenderer: React__default.FC<FieldRenderContext>;

declare const RadioRenderer: React__default.FC<FieldRenderContext>;

/**
 * The default built-in component map.
 * Import and spread this to extend or override individual field types:
 *
 * @example
 * ```tsx
 * import { defaultComponentMap } from 'pdyform-react';
 * const myMap = { ...defaultComponentMap, text: MyInput, rating: StarRating };
 * <FormFieldRenderer componentMap={myMap} ... />
 * ```
 */
declare const defaultComponentMap: FieldComponentMap;

interface FormFieldRendererProps {
    field: FormField;
    value: any;
    onChange: (value: any) => void;
    onBlur?: () => void;
    error?: string;
    /**
     * Custom component map merged with the default map — external entries win.
     *
     * @example
     * ```tsx
     * import { defaultComponentMap } from 'pdyform-react';
     * const myMap = { ...defaultComponentMap, text: MyInput, rating: StarRating };
     * <FormFieldRenderer componentMap={myMap} ... />
     * ```
     */
    componentMap?: FieldComponentMap;
}
declare const FormFieldRenderer: React__default.FC<FormFieldRendererProps>;

export { Checkbox, CheckboxRenderer, DynamicForm, type FieldComponentMap, type FieldRenderContext, type FieldRenderer, FormFieldRenderer, type FormFieldRendererProps, Input, InputRenderer, Label, RadioGroup, RadioGroupItem, RadioRenderer, Select, SelectContent, SelectGroup, SelectItem, SelectRenderer, SelectTrigger, SelectValue, Textarea, TextareaRenderer, defaultComponentMap };
