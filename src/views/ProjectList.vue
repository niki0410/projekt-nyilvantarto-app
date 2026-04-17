<template>
  <div
    class="background d-flex flex-column justify-content-center align-items-center p-4 bg-white mt-5 m-5"
  >
    <div class="tite mb-5">Projektek listája</div>

    <ProjectListTable
      :projects="projects"
      @refresh="loadProjects"
      @toast="showToast"
    />
  </div>

  <Toast
    :message="toastText"
    :show="toastVisible"
    @hide="toastVisible = false"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProjectListTable from "@/components/ProjectListTable.vue";
import Toast from "@/components/Toast.vue";

const projects = ref([]);
const toastText = ref("");
const toastVisible = ref(false);

const loadProjects = () => {
  projects.value = JSON.parse(localStorage.getItem("projects") || "[]");
};

onMounted(loadProjects);

const showToast = (message) => {
  toastText.value = message;
  toastVisible.value = true;
};
</script>
<style scoped>
.background {
  border-radius: 10px;
}
</style>
