<script setup>
// Импортируем общие компоненты шапки и подвала
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="site-wrapper">
    
    <Navbar />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
    
  </div>
</template>

<style>
/* Стили для того, чтобы прижать футер к низу */
.site-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Высота на весь экран */
}

.main-content {
  flex-grow: 1; /* Растягивает блок контента, чтобы заполнить пустоту */
  /* Отступ сверху, так как в Navbar стоит класс is-fixed-top */
  padding-top: 3.25rem; 
}

/* Анимация плавного перехода между страницами */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Глобальные настройки для шрифтов (если нужно) */
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>