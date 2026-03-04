// src/DynamicForm.tsx
import { useState } from "react";
import { validateField, getDefaultValues } from "pdyform/core";

// src/components/Input.tsx
import * as React from "react";

// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/Input.tsx
import { jsx } from "react/jsx-runtime";
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/Textarea.tsx
import * as React2 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var Textarea = React2.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/Checkbox.tsx
import * as React3 from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Checkbox = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx3(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx3(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ jsx3(Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/RadioGroup.tsx
import * as React4 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { jsx as jsx4 } from "react/jsx-runtime";
var RadioGroup = React4.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx4(
    RadioGroupPrimitive.Root,
    {
      className: cn("grid gap-2", className),
      ...props,
      ref
    }
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React4.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx4(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx4(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx4(Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/Select.tsx
import * as React5 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown } from "lucide-react";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx5(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx5(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx5(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsx5(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: /* @__PURE__ */ jsx5(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        ),
        children
      }
    )
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx5("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx5(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx5(Check2, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx5(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// src/components/Label.tsx
import * as React6 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { jsx as jsx6 } from "react/jsx-runtime";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx6(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/InputRenderer.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var InputRenderer = ({ field, value, onChange, onBlur, fieldId }) => {
  const handleChange = (nextValue) => {
    if (field.type !== "number") {
      onChange(nextValue);
      return;
    }
    onChange(nextValue === "" ? "" : Number(nextValue));
  };
  return /* @__PURE__ */ jsx7(
    Input,
    {
      id: fieldId,
      type: field.type,
      placeholder: field.placeholder,
      value: value ?? "",
      onChange: (e) => handleChange(e.target.value),
      onBlur,
      disabled: field.disabled,
      name: field.name
    }
  );
};
var InputRenderer_default = InputRenderer;

// src/components/TextareaRenderer.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var TextareaRenderer = ({ field, value, onChange, onBlur, fieldId }) => /* @__PURE__ */ jsx8(
  Textarea,
  {
    id: fieldId,
    placeholder: field.placeholder,
    value: value ?? "",
    onChange: (e) => onChange(e.target.value),
    onBlur,
    disabled: field.disabled,
    name: field.name
  }
);
var TextareaRenderer_default = TextareaRenderer;

// src/components/SelectRenderer.tsx
import { jsx as jsx9, jsxs as jsxs2 } from "react/jsx-runtime";
var SelectRenderer = ({ field, value, onChange, onBlur, fieldId }) => /* @__PURE__ */ jsxs2(
  Select,
  {
    value: value != null ? String(value) : "",
    onValueChange: onChange,
    disabled: field.disabled,
    name: field.name,
    children: [
      /* @__PURE__ */ jsx9(SelectTrigger, { id: fieldId, onBlur, children: /* @__PURE__ */ jsx9(SelectValue, { placeholder: field.placeholder || "Select an option" }) }),
      /* @__PURE__ */ jsx9(SelectContent, { children: /* @__PURE__ */ jsx9(SelectGroup, { children: field.options?.map((opt) => /* @__PURE__ */ jsx9(SelectItem, { value: String(opt.value), children: opt.label }, opt.value)) }) })
    ]
  }
);
var SelectRenderer_default = SelectRenderer;

// src/components/CheckboxRenderer.tsx
import { jsx as jsx10, jsxs as jsxs3 } from "react/jsx-runtime";
var CheckboxRenderer = ({ field, value, onChange, onBlur }) => /* @__PURE__ */ jsx10("div", { className: "flex flex-wrap gap-4", children: field.options?.map((opt) => {
  const checked = Array.isArray(value) && value.includes(opt.value);
  return /* @__PURE__ */ jsxs3("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ jsx10(
      Checkbox,
      {
        id: `checkbox-${field.name}-${opt.value}`,
        checked,
        disabled: field.disabled,
        onCheckedChange: (c) => {
          const next = Array.isArray(value) ? [...value] : [];
          if (c) {
            next.push(opt.value);
          } else {
            const idx = next.indexOf(opt.value);
            if (idx > -1) next.splice(idx, 1);
          }
          onChange(next);
        },
        onBlur
      }
    ),
    /* @__PURE__ */ jsx10(Label, { htmlFor: `checkbox-${field.name}-${opt.value}`, className: "font-normal", children: opt.label })
  ] }, opt.value);
}) });
var CheckboxRenderer_default = CheckboxRenderer;

// src/components/RadioRenderer.tsx
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var RadioRenderer = ({ field, value, onChange, onBlur }) => /* @__PURE__ */ jsx11(
  RadioGroup,
  {
    value: value != null ? String(value) : "",
    onValueChange: onChange,
    disabled: field.disabled,
    name: field.name,
    className: "flex flex-wrap gap-4",
    children: field.options?.map((opt) => /* @__PURE__ */ jsxs4("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx11(
        RadioGroupItem,
        {
          value: String(opt.value),
          id: `radio-${field.name}-${opt.value}`,
          onBlur
        }
      ),
      /* @__PURE__ */ jsx11(Label, { htmlFor: `radio-${field.name}-${opt.value}`, className: "font-normal", children: opt.label })
    ] }, opt.value))
  }
);
var RadioRenderer_default = RadioRenderer;

// src/components/index.ts
var defaultComponentMap = {
  text: InputRenderer_default,
  number: InputRenderer_default,
  password: InputRenderer_default,
  email: InputRenderer_default,
  date: InputRenderer_default,
  textarea: TextareaRenderer_default,
  select: SelectRenderer_default,
  checkbox: CheckboxRenderer_default,
  radio: RadioRenderer_default
};

// src/FormFieldRenderer.tsx
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var FormFieldRenderer = ({
  field,
  value,
  onChange,
  onBlur,
  error,
  componentMap
}) => {
  const { label, description, name, type } = field;
  const fieldId = `field-${name}`;
  const resolvedMap = componentMap ? { ...defaultComponentMap, ...componentMap } : defaultComponentMap;
  const FieldComponent = resolvedMap[type] ?? InputRenderer_default;
  return /* @__PURE__ */ jsxs5("div", { className: `space-y-2 ${field.className || ""}`, children: [
    label && /* @__PURE__ */ jsx12(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsx12(FieldComponent, { field, value, onChange, onBlur, fieldId }),
    description && /* @__PURE__ */ jsx12("p", { className: "text-[0.8rem] text-muted-foreground", children: description }),
    error && /* @__PURE__ */ jsx12("p", { className: "text-[0.8rem] font-medium text-destructive", children: error })
  ] });
};

// src/DynamicForm.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var DynamicForm = ({ schema, onSubmit, className }) => {
  const [values, setValues] = useState(getDefaultValues(schema.fields));
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleFieldChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    const field = schema.fields.find((f) => f.name === name);
    if (field) {
      const error = validateField(value, field);
      setErrors((prev) => ({
        ...prev,
        [name]: error || ""
      }));
    }
  };
  const handleFieldBlur = (name) => {
    const field = schema.fields.find((f) => f.name === name);
    if (field) {
      const error = validateField(values[name], field);
      setErrors((prev) => ({
        ...prev,
        [name]: error || ""
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = {};
    let hasError = false;
    schema.fields.forEach((field) => {
      const error = validateField(values[field.name], field);
      if (error) {
        newErrors[field.name] = error;
        hasError = true;
      }
    });
    setErrors(newErrors);
    if (!hasError) {
      onSubmit(values);
    }
    setIsSubmitting(false);
  };
  return /* @__PURE__ */ jsxs6("form", { onSubmit: handleSubmit, className: `space-y-6 ${className || ""}`, children: [
    schema.title && /* @__PURE__ */ jsx13("h2", { className: "text-2xl font-bold tracking-tight", children: schema.title }),
    schema.description && /* @__PURE__ */ jsx13("p", { className: "text-muted-foreground", children: schema.description }),
    /* @__PURE__ */ jsx13("div", { className: "space-y-4", children: schema.fields.map((field) => !field.hidden && /* @__PURE__ */ jsx13(
      FormFieldRenderer,
      {
        field,
        value: values[field.name],
        onChange: (val) => handleFieldChange(field.name, val),
        onBlur: () => handleFieldBlur(field.name),
        error: errors[field.name]
      },
      field.name
    )) }),
    /* @__PURE__ */ jsx13(
      "button",
      {
        type: "submit",
        disabled: isSubmitting,
        className: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full",
        children: isSubmitting ? "Submitting..." : schema.submitButtonText || "Submit"
      }
    )
  ] });
};
export {
  Checkbox,
  CheckboxRenderer_default as CheckboxRenderer,
  DynamicForm,
  FormFieldRenderer,
  Input,
  InputRenderer_default as InputRenderer,
  Label,
  RadioGroup,
  RadioGroupItem,
  RadioRenderer_default as RadioRenderer,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRenderer_default as SelectRenderer,
  SelectTrigger,
  SelectValue,
  Textarea,
  TextareaRenderer_default as TextareaRenderer,
  defaultComponentMap
};
