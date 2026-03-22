<script setup>
import { ref } from 'vue'

// Создаем реактивную переменную для управления мобильным меню
const isMenuActive = ref(false)

// Функция для переключения состояния
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}
</script>

<template>
  <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-graduation-cap"></i>
            </span>
            <span class="has-text-weight-bold">EduHub</span>
          </span>
        </a>

        <a 
          role="button" 
          class="navbar-burger" 
          :class="{ 'is-active': isMenuActive }"
          aria-label="menu" 
          aria-expanded="false" 
          @click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <a class="navbar-item" href="/">
            Главная
          </a>
          <a class="navbar-item" href="/catalog">
            Каталог курсов
          </a>
          <a class="navbar-item" href="/faq">
            FAQ
          </a>
          <a class="navbar-item" href="/contacts">
            Контакты
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span>Регистрация</span>
              </a>
              <a class="button is-primary">
                <span class="icon">
                  <i class="fas fa-sign-in-alt"></i>
                </span>
                <span>Войти</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>