"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Checkbox: () => Checkbox,
  CheckboxRenderer: () => CheckboxRenderer_default,
  DynamicForm: () => DynamicForm,
  FormFieldRenderer: () => FormFieldRenderer,
  Input: () => Input,
  InputRenderer: () => InputRenderer_default,
  Label: () => Label,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  RadioRenderer: () => RadioRenderer_default,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectRenderer: () => SelectRenderer_default,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Textarea: () => Textarea,
  TextareaRenderer: () => TextareaRenderer_default,
  defaultComponentMap: () => defaultComponentMap
});
module.exports = __toCommonJS(index_exports);

// src/DynamicForm.tsx
var import_react = require("react");
var import_core2 = require("pdyform/core");

// src/components/Input.tsx
var React = __toESM(require("react"), 1);

// src/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/Input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var React2 = __toESM(require("react"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
var Textarea = React2.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var React3 = __toESM(require("react"), 1);
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"), 1);
var import_lucide_react = require("lucide-react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Checkbox = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  CheckboxPrimitive.Root,
  {
    ref,
    className: cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    ),
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      CheckboxPrimitive.Indicator,
      {
        className: cn("flex items-center justify-center text-current"),
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Check, { className: "h-4 w-4" })
      }
    )
  }
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

// src/components/RadioGroup.tsx
var React4 = __toESM(require("react"), 1);
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"), 1);
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var RadioGroup = React4.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react2.Circle, { className: "h-2.5 w-2.5 fill-current text-current" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/components/Select.tsx
var React5 = __toESM(require("react"), 1);
var SelectPrimitive = __toESM(require("@radix-ui/react-select"), 1);
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react3.ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectContent = React5.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var SelectItem = React5.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react3.Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

// src/components/Label.tsx
var React6 = __toESM(require("react"), 1);
var LabelPrimitive = __toESM(require("@radix-ui/react-label"), 1);
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime6 = require("react/jsx-runtime");
var labelVariants = (0, import_class_variance_authority.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

// src/components/InputRenderer.tsx
var import_core = require("pdyform/core");
var import_jsx_runtime7 = require("react/jsx-runtime");
var InputRenderer = ({ field, value, onChange, onBlur, fieldId }) => {
  const handleChange = (nextValue) => {
    onChange((0, import_core.normalizeFieldValue)(field, nextValue));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_jsx_runtime8 = require("react/jsx-runtime");
var TextareaRenderer = ({ field, value, onChange, onBlur, fieldId }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_jsx_runtime9 = require("react/jsx-runtime");
var SelectRenderer = ({ field, value, onChange, onBlur, fieldId }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
  Select,
  {
    value: value != null ? String(value) : "",
    onValueChange: onChange,
    disabled: field.disabled,
    name: field.name,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectTrigger, { id: fieldId, onBlur, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectValue, { placeholder: field.placeholder || "Select an option" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectContent, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectGroup, { children: field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SelectItem, { value: String(opt.value), children: opt.label }, opt.value)) }) })
    ]
  }
);
var SelectRenderer_default = SelectRenderer;

// src/components/CheckboxRenderer.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var CheckboxRenderer = ({ field, value, onChange, onBlur }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-wrap gap-4", children: field.options?.map((opt) => {
  const checked = Array.isArray(value) && value.includes(opt.value);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex items-center space-x-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Label, { htmlFor: `checkbox-${field.name}-${opt.value}`, className: "font-normal", children: opt.label })
  ] }, opt.value);
}) });
var CheckboxRenderer_default = CheckboxRenderer;

// src/components/RadioRenderer.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var RadioRenderer = ({ field, value, onChange, onBlur }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
  RadioGroup,
  {
    value: value != null ? String(value) : "",
    onValueChange: onChange,
    disabled: field.disabled,
    name: field.name,
    className: "flex flex-wrap gap-4",
    children: field.options?.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        RadioGroupItem,
        {
          value: String(opt.value),
          id: `radio-${field.name}-${opt.value}`,
          onBlur
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Label, { htmlFor: `radio-${field.name}-${opt.value}`, className: "font-normal", children: opt.label })
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
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: `space-y-2 ${field.className || ""}`, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FieldComponent, { field, value, onChange, onBlur, fieldId }),
    description && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[0.8rem] text-muted-foreground", children: description }),
    error && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { className: "text-[0.8rem] font-medium text-destructive", children: error })
  ] });
};

// src/DynamicForm.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var DynamicForm = ({ schema, onSubmit, className }) => {
  const [formState, setFormState] = (0, import_react.useState)(() => (0, import_core2.createFormRuntimeState)(schema.fields));
  const handleFieldChange = (name, value) => {
    setFormState((prev) => (0, import_core2.applyFieldChange)(schema.fields, prev, name, value));
  };
  const handleFieldBlur = (name) => {
    setFormState((prev) => (0, import_core2.applyFieldBlur)(schema.fields, prev, name));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const submittingState = (0, import_core2.setSubmitting)(formState, true);
    const { state: validatedState, hasError } = (0, import_core2.runSubmitValidation)(schema.fields, submittingState);
    setFormState(validatedState);
    if (!hasError) {
      onSubmit(validatedState.values);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("form", { onSubmit: handleSubmit, className: `space-y-6 ${className || ""}`, children: [
    schema.title && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h2", { className: "text-2xl font-bold tracking-tight", children: schema.title }),
    schema.description && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-muted-foreground", children: schema.description }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "space-y-4", children: schema.fields.map((field) => !field.hidden && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      FormFieldRenderer,
      {
        field,
        value: formState.values[field.name],
        onChange: (val) => handleFieldChange(field.name, val),
        onBlur: () => handleFieldBlur(field.name),
        error: formState.errors[field.name]
      },
      field.name
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      "button",
      {
        type: "submit",
        disabled: formState.isSubmitting,
        className: "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full",
        children: formState.isSubmitting ? "Submitting..." : schema.submitButtonText || "Submit"
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Checkbox,
  CheckboxRenderer,
  DynamicForm,
  FormFieldRenderer,
  Input,
  InputRenderer,
  Label,
  RadioGroup,
  RadioGroupItem,
  RadioRenderer,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRenderer,
  SelectTrigger,
  SelectValue,
  Textarea,
  TextareaRenderer,
  defaultComponentMap
});
