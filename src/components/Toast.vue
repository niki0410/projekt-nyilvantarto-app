<template>
  <div class="position-fixed top-0 end-0 p-3" style="z-index: 11">
    <div
      class="toast align-items-center text-white border-0"
      ref="toastEl"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">{{ message }}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Toast } from 'bootstrap'

const props = defineProps({
  message: String,
  show: Boolean
})

const emit = defineEmits(['hide'])
const toastEl = ref(null)

let toastInstance = null

onMounted(() => {
  if (toastEl.value) {
    toastInstance = Toast.getOrCreateInstance(toastEl.value, {
      delay: 2000,
      autohide: true
    })

    toastEl.value.addEventListener('hidden.bs.toast', () => {
      emit('hide')
    })
  }
})

watch(
  () => props.show,
  (val) => {
    if (val && toastInstance) {
      toastInstance.show()
    }
  }
)
</script>