<template>
  <table class="table table-fixed text-start align-middle" v-if="projects.length">
    <thead>
      <tr>
        <th style="width: 22%">Projekt neve</th>
        <th style="width: 28%">Leírás</th>
        <th style="width: 18%">Kezdési dátum</th>
        <th style="width: 16%">Költségvetés</th>
        <th style="width: 16%">Műveletek</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="project in sortedProjects" :key="project.id">
        <template v-if="editingId === project.id">
          <td><input v-model="editForm.projectName" class="form-control form-control-sm" /></td>
          <td><input v-model="editForm.description" class="form-control form-control-sm" /></td>
          <td><input v-model="editForm.startDate" type="date" class="form-control form-control-sm" /></td>
          <td><input v-model.number="editForm.cost" type="number" min="0" class="form-control form-control-sm" /></td>
          <td>
            <button class="btn m-1" type="button" @click="saveEdit(project.id)">
              <i class="bi bi-floppy"></i>
            </button>
            <button class="btn m-1" type="button" @click="cancelEdit">
              <i class="bi bi-x"></i>
            </button>
          </td>
        </template>

        <template v-else>
          <td>{{ project.projectName }}</td>
          <td>{{ project.description }}</td>
          <td>{{ project.startDate }}</td>
          <td>{{ project.cost }}</td>
          <td>
            <button class="btn m-1" type="button" @click="startEdit(project)">
              <i class="bi bi-pencil-square"></i>
            </button>
            <DeleteProject :project="project" @delete="handleDelete" />
          </td>
        </template>
      </tr>
    </tbody>
  </table>

  <div v-else class="text-center py-5">
    <p class="text-muted">Még nincsenek projektek.</p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import DeleteProject from './DeleteProject.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const sortedProjects = computed(() => {
  return [...props.projects].sort((a, b) => b.id - a.id)
})

const emit = defineEmits(['refresh', 'toast'])

const editingId = ref(null)
const editForm = ref({
  projectName: '',
  description: '',
  startDate: '',
  cost: null,
})

const startEdit = (project) => {
  editingId.value = project.id
  editForm.value = { ...project }
}

const cancelEdit = () => {
  editingId.value = null
  editForm.value = {
    projectName: '',
    description: '',
    startDate: '',
    cost: null,
  }
}

const saveEdit = (id) => {
  const projects = JSON.parse(localStorage.getItem('projects') || '[]')
  const index = projects.findIndex(p => p.id === id)

  if (index !== -1) {
    projects[index] = { ...projects[index], ...editForm.value }
    localStorage.setItem('projects', JSON.stringify(projects))
    emit('refresh')
    emit('toast', 'Projekt sikeresen szerkesztve!')
  }

  cancelEdit()
}

const handleDelete = (projectId) => {
  const projects = JSON.parse(localStorage.getItem('projects') || '[]')
  const updatedProjects = projects.filter((p) => p.id !== projectId)
  localStorage.setItem('projects', JSON.stringify(updatedProjects))
  emit('refresh')
  emit('toast', 'Projekt törölve!')
}
</script>
<style>
.table-fixed {
  table-layout: fixed;
  width: 100%;
}

.table-fixed th,
.table-fixed td {
  overflow: hidden;
  vertical-align: middle;
}

.table-fixed input {
  width: 100%;
  box-sizing: border-box;
}
.btn {
  color: #fff !important;
}
</style>