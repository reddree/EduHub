<script setup>
import { ref } from 'vue'

const faqs = ref([
  { id: 1, question: 'Как начать обучение на платформе?', answer: '1. Зарегистрируйтесь.\n2. Подтвердите email.\n3. Пройдите тестирование.\n4. Выберите курс.', isOpen: false },
  { id: 2, question: 'Что такое микро-формат уроков?', answer: 'Короткие уроки по 5–10 минут. Проходите их в удобное для вас время.', isOpen: false },
  { id: 3, question: 'Как работают AI-рекомендации?', answer: 'Алгоритм анализирует ваши цели и прогресс, формируя траекторию.', isOpen: false },
  { id: 4, question: 'Есть ли сертификаты?', answer: 'Да! Цифровые сертификаты с QR-кодом доступны после курса.', isOpen: false },
  { id: 5, question: 'Интеграция с GitHub/Behance?', answer: 'Да! Автоматическая публикация проектов в портфолио.', isOpen: false },
  { id: 6, question: 'Что значит WCAG AAA?', answer: 'Высший уровень доступности для всех пользователей.', isOpen: false },
  { id: 7, question: 'Сколько стоят курсы?', answer: 'Базовые — бесплатно. Платные — от 1 490₽.', isOpen: false }
])

const toggleFaq = (id) => {
  faqs.value.forEach(faq => {
    if (faq.id === id) {
      faq.isOpen = !faq.isOpen
    } else {
      faq.isOpen = false // Это закроет остальные при открытии нового
    }
  })
}
</script>

<template>
  <div class="faq-page">
    <section class="section">
      <div class="container">
        <div class="has-text-centered mb-6">
          <h1 class="title is-1 has-text-white">Часто задаваемые вопросы</h1>
          <p class="subtitle is-4 has-text-grey-light">Всё, что вы хотели знать о платформе EduHub</p>
        </div>

        <div class="columns is-centered">
          <div class="column is-8">
            
            <div 
              v-for="faq in faqs" 
              :key="faq.id" 
              class="faq-block mb-4"
            >
              <div 
                class="faq-header is-flex is-justify-content-between is-align-items-center"
                @click="toggleFaq(faq.id)"
              >
                <h3 class="is-size-5 has-text-white has-text-weight-semibold">
                  <span class="icon has-text-primary mr-2">
                    <i :class="['fas', faq.isOpen ? 'fa-chevron-down' : 'fa-chevron-right']"></i>
                  </span>
                  {{ faq.question }}
                </h3>
              </div>

              <div v-if="faq.isOpen" class="faq-body mt-3">
                <p class="has-text-grey-light preserve-whitespace ml-5">
                  {{ faq.answer }}
                </p>
              </div>
            </div>

            <div class="support-card mt-6 has-text-centered">
              <h3 class="title is-4 has-text-white">Напишите нам — ответим за 2 часа</h3>
              <router-link to="/contacts" class="button is-primary is-medium mt-2">
                <span class="icon"><i class="fas fa-headset"></i></span>
                <span>Связаться с поддержкой</span>
              </router-link>
            </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Устанавливаем темный фон для всей страницы, если он не задан глобально */
.faq-page {
  background-color: #0f1011; /* Глубокий темный цвет */
  min-height: 100vh;
}

.faq-block {
  background-color: #1a1c1e; /* Цвет карточки */
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #2d2f31;
  cursor: pointer;
  transition: all 0.2s ease;
  /* Убираем любое растягивание */
  display: block; 
  height: fit-content;
}

.faq-block:hover {
  border-color: #00d1b2;
}

.faq-header {
  user-select: none;
}

.support-card {
  background: linear-gradient(135deg, #00d1b2 0%, #0099cc 100%);
  padding: 3rem;
  border-radius: 15px;
}

.preserve-whitespace {
  white-space: pre-line;
  line-height: 1.6;
}

/* Анимация появления текста */
.faq-body {
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>