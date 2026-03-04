<script setup lang="ts">
import type { FieldRendererProps } from '../fieldComponentMap';
import Input from '../components/Input.vue';

const props = defineProps<FieldRendererProps>();
const emit = defineEmits<{ 'update:modelValue': [value: any] }>();

const handleInput = (nextValue: any) => {
  if (props.field.type !== 'number') {
    emit('update:modelValue', nextValue);
    return;
  }

  emit('update:modelValue', nextValue === '' ? '' : Number(nextValue));
};
</script>

<template>
  <Input
    :id="fieldId"
    :type="field.type"
    :placeholder="field.placeholder"
    :disabled="field.disabled"
    :name="field.name"
    :modelValue="modelValue ?? ''"
    @update:modelValue="handleInput"
  />
</template>
