<template>
  <div class="mb-3">
    <label for="nevInput" class="form-label"
      >Kezdési dátum<span class="text-danger">*</span></label
    >
    <input
      type="date"
      class="form-control"
      id="dateInput"
      v-model="startDate"
    />
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: String,
  required: { type: Boolean, default: true },
});

const emit = defineEmits(["update:modelValue"]);

const startDate = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>
