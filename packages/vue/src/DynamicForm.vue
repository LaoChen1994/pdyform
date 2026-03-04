<script setup lang="ts">
import { ref } from 'vue';
import type { FormSchema, FormRuntimeState } from 'pdyform/core';
import {
  createFormRuntimeState,
  applyFieldChange,
  runSubmitValidation,
  setSubmitting,
} from 'pdyform/core';
import FormFieldRenderer from './FormFieldRenderer.vue';

const props = defineProps<{
  schema: FormSchema;
  className?: string;
}>();

const emit = defineEmits(['submit']);

const formState = ref<FormRuntimeState>(createFormRuntimeState(props.schema.fields));

const handleFieldChange = (name: string, value: any) => {
  formState.value = applyFieldChange(props.schema.fields, formState.value, name, value);
};

const handleSubmit = () => {
  const submittingState = setSubmitting(formState.value, true);
  const { state: validatedState, hasError } = runSubmitValidation(props.schema.fields, submittingState);
  formState.value = validatedState;

  if (!hasError) {
    emit('submit', { ...validatedState.values });
  }
};
</script>

<template>
  <form :class="['space-y-6', className]" @submit.prevent="handleSubmit">
    <div v-if="schema.title || schema.description" class="space-y-1">
      <h2 v-if="schema.title" class="text-2xl font-bold tracking-tight">{{ schema.title }}</h2>
      <p v-if="schema.description" class="text-muted-foreground">{{ schema.description }}</p>
    </div>

    <div class="space-y-4">
      <template v-for="field in schema.fields" :key="field.id">
        <FormFieldRenderer
          v-if="!field.hidden"
          :field="field"
          :model-value="formState.values[field.name]"
          :error="formState.errors[field.name]"
          @update:model-value="(val: any) => handleFieldChange(field.name, val)"
        />
      </template>
    </div>

    <button
      type="submit"
      :disabled="formState.isSubmitting"
      class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
    >
      {{ formState.isSubmitting ? 'Submitting...' : (schema.submitButtonText || 'Submit') }}
    </button>
  </form>
</template>
