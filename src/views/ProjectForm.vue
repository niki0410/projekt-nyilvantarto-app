<template>
  <div
    class="background d-flex flex-column justify-content-center align-items-center p-4 bg-white mt-5 m-5"
  >
    <div class="tite">Új projekt hozzáadása</div>

    <form @submit.prevent="saveProject">
      <ProjektNeveInput v-model="projectData.projectName" required />
      <LeirasTextarea v-model="projectData.description" />
      <KezdesiDatumInput v-model="projectData.startDate" />
      <KoltsegvetesInput v-model="projectData.cost" />

      <div class="d-flex justify-content-center align-items-center">
        <button type="submit" class="btn btn-lg text-white">Mentés</button>
      </div>
    </form>
  </div>

  <Toast :message="toastText" :toastClass="toastClass" :show="toastVisible" />
</template>

<script setup>
import { reactive, ref } from "vue";
import ProjektNeveInput from "../components/inputs/ProjektNeveInput.vue";
import LeirasTextarea from "../components/inputs/LeirasTextarea.vue";
import KezdesiDatumInput from "../components/inputs/KezdesiDatumInput.vue";
import KoltsegvetesInput from "@/components/inputs/KoltsegvetesInput.vue";
import Toast from "@/components/Toast.vue";

const initialProjectData = {
  projectName: "",
  description: "",
  startDate: "",
  cost: null,
};

const projectData = reactive({ ...initialProjectData });

const toastText = ref("");
const toastClass = ref("bg-success");
const toastVisible = ref(false);

const showToast = (message, typeClass = "bg-success") => {
  toastText.value = message;
  toastClass.value = typeClass;
  toastVisible.value = true;
};

const saveProject = () => {
  const projects = JSON.parse(localStorage.getItem("projects") || "[]");
  projects.push({ ...projectData, id: Date.now() });
  localStorage.setItem("projects", JSON.stringify(projects));

  Object.assign(projectData, initialProjectData);
  showToast("Projekt elmentve!", "bg-success");
};
</script>

<style>
.background {
  border-radius: 10px;
}
form {
  margin-top: 30px;
  width: 400px;
  text-align: start;
}
.btn {
  background-color: #cb343b !important;
  border-color: #cb343b !important;
}
.btn:hover {
  background-color: #f4b0bc !important;
  border-color: #f4b0bc !important;
}
.tite {
  font-size: 25px;
  font-weight: 600;
}
.toast {
  background-color: #cb343b !important;
}
</style>
