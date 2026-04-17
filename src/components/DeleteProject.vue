<template>
  <button
    class="btn m-1"
    type="button"
    @click="showConfirm = true"
    title="Törlés"
  >
    <i class="bi bi-trash"></i>
  </button>

  <div v-if="showConfirm" class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Projekt törlése</h5>
          <button
            type="button"
            class="btn-close"
            @click="cancelDelete"
          ></button>
        </div>

        <div class="modal-body">
          Biztosan törölni szeretnéd a "<strong>{{
            project.projectName
          }}</strong
          >" projektet?
        </div>

        <div class="modal-footer">
          <button type="button" class="btn" @click="confirmDelete">
            Törlés
          </button>
          <button type="button" class="btn cancelBtn" @click="cancelDelete">
            Mégse
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showConfirm" class="modal-backdrop fade show"></div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["delete"]);
const showConfirm = ref(false);

const cancelDelete = () => {
  showConfirm.value = false;
};

const confirmDelete = () => {
  emit("delete", props.project.id);
  showConfirm.value = false;
};
</script>
<style>
.cancelBtn {
  background-color: #444 !important;
  border-color: #444 !important;
}
</style>
