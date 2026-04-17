<template>
<div class="mb-3">
  <label for="leiras" class="form-label">Leírás<span class="text-danger">*</span></label>
  <textarea class="form-control" id="leiras" rows="3" v-model="description"></textarea>
</div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: String,
  required: { type: Boolean, default: true }
})

const emit = defineEmits(['update:modelValue'])

const description = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>
