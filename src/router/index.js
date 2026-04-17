import { createRouter, createWebHistory } from 'vue-router'
import ProjectForm from '@/views/ProjectForm.vue'
import ProjectList from '@/views/ProjectList.vue'

const routes = [
    {
    path: '/ProjectForm',
    name: 'ProjectForm',
    component: ProjectForm
  },
    {
    path: '/ProjectList',
    name: 'ProjectList',
    component: ProjectList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
