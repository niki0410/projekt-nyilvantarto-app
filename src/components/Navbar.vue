<template>
  <nav class="d-flex justify-content-between align-items-center py-3 px-4">
    <div class="d-flex align-items-center">
      <RouterLink to="/" class="d-flex align-items-center text-decoration-none">
        <img src="/logo.png" class="logo d-none d-md-block" alt="logo" />
      </RouterLink>
    </div>
    <ul class="d-flex list-unstyled mb-0 gap-4 flex-wrap">
      <li>
        <router-link
          to="ProjectList"
          class="nav-link p-2 rounded"
          :class="{ active: $route.path === '/ProjectList' }"
        >
          Projektek Listája
        </router-link>
      </li>
      <li>
        <router-link
          to="ProjectForm"
          class="nav-link p-2 rounded"
          :class="{ active: $route.path === '/ProjectForm' }"
        >
          Új Projekt Hozzáadása
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: 500;
}

.logo {
  max-height: 40px;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  margin: 0;
}

.nav-link {
  color: #cb343b !important;
  text-decoration: none;
  transition: all 0.2s ease;
}

.router-link a:hover,
.nav-link:hover {
  color: #f4b0bc !important;
}

.router-link.active .nav-link,
.nav-link.active {
  color: #cb343b !important;
  background-color: rgba(244, 176, 188, 0.2);
  border-radius: 6px;
}
</style>
