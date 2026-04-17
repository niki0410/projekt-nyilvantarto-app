<template>
  <div class="mb-3">
    <label for="nevInput" class="form-label"
      >Költségvetés<span class="text-danger">*</span></label
    >
    <input
      type="number"
      class="form-control"
      id="costInput"
      v-model="cost"
      min="0"
    />
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: Number,
  required: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue"]);

const cost = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
