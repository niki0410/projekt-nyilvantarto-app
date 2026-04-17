<template>
<div class="mb-3">
  <label for="nevInput" class="form-label">Projekt neve<span class="text-danger">*</span></label>
  <input type="text" class="form-control" id="nevInput" v-model="projectName" required>
</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  required: { type: Boolean, default: true }
})

const emit = defineEmits(['update:modelValue'])

const projectName = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
