<script setup>
import { ref } from 'vue'

// Состояние полей формы
const formData = ref({
  name: '',
  email: '',
  subject: 'Вопрос по обучению',
  message: ''
})

// Состояние отправки
const isSubmitted = ref(false)

const handleSubmit = () => {
  // Имитация отправки данных
  console.log('Данные формы:', formData.value)
  
  // Показываем сообщение об успехе
  isSubmitted.value = true
  
  // Сбрасываем форму через 3 секунды
  setTimeout(() => {
    isSubmitted.value = false
    formData.value = { name: '', email: '', subject: 'Вопрос по обучению', message: '' }
  }, 3000)
}
</script>

<template>
  <div class="container mt-6">
    <section class="section">
      <div class="has-text-centered mb-6">
        <h1 class="title is-2">Контакты</h1>
        <p class="subtitle is-5">Свяжитесь с нами любым удобным способом</p>
      </div>

      <div class="columns is-centered">
        <div class="column is-4">
          <div class="box">
            <div class="content">
              <h3 class="title is-4">Наши данные</h3>
              <div class="mb-5">
                <span class="icon has-text-primary mr-2"><i class="fas fa-map-marker-alt"></i></span>
                <strong>Адрес:</strong>
                <p class="ml-6">Москва, ул. Образовательная, 1</p>
              </div>
              <div class="mb-5">
                <span class="icon has-text-primary mr-2"><i class="fas fa-phone"></i></span>
                <strong>Телефон:</strong>
                <p class="ml-6">+7 (495) 123-45-67</p>
              </div>
              <div class="mb-5">
                <span class="icon has-text-primary mr-2"><i class="fas fa-envelope"></i></span>
                <strong>Email:</strong>
                <p class="ml-6">info@eduhub.ru</p>
              </div>
            </div>

            <div class="mt-6">
              <h4 class="title is-5 mb-3">Режим работы</h4>
              <p>Пн — Пт: 09:00 – 19:00</p>
              <p>Сб — Вс: выходной</p>
            </div>
          </div>
        </div>

        <div class="column is-6">
          <div class="box">
            <div v-if="isSubmitted" class="notification is-success is-light animate__animated animate__fadeIn">
              <button class="delete" @click="isSubmitted = false"></button>
              Спасибо! Ваше сообщение успешно отправлено.
            </div>

            <form @submit.prevent="handleSubmit" v-else>
              <div class="field">
                <label class="label">Ваше имя</label>
                <div class="control has-icons-left">
                  <input v-model="formData.name" class="input" type="text" placeholder="Иван Иванов" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Электронная почта</label>
                <div class="control has-icons-left">
                  <input v-model="formData.email" class="input" type="email" placeholder="example@mail.ru" required>
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Тема</label>
                <div class="control">
                  <div class="select is-fullwidth">
                    <select v-model="formData.subject">
                      <option>Вопрос по обучению</option>
                      <option>Сотрудничество</option>
                      <option>Техническая поддержка</option>
                    </select>
                  </div>
                </div>
              </div>

              <div class="field">
                <label class="label">Сообщение</label>
                <div class="control">
                  <textarea v-model="formData.message" class="textarea" placeholder="Чем мы можем вам помочь?" rows="5" required></textarea>
                </div>
              </div>

              <div class="control mt-5">
                <button type="submit" class="button is-primary is-fullwidth">
                  <span class="icon"><i class="fas fa-paper-plane"></i></span>
                  <span>Отправить сообщение</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Плавное появление уведомления */
.animate__fadeIn {
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>