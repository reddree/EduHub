<script setup>
// Здесь можно добавить логику получения данных о курсах из API, если понадобится
</script>

<template>
  <div class="home-page">
    <section id="hero" class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-1 is-spaced">
            Учись эффективно с EduHub
          </h1>
          <h2 class="subtitle is-4">
            Микро-формат уроков — AI-рекомендации — Реальные проекты<br>
            Сертификация академического уровня
          </h2>
          <div class="buttons is-centered">
            <router-link to="/catalog" class="button is-large is-light">
              <span class="icon">
                <i class="fas fa-rocket"></i>
              </span>
              <span>Начать сейчас</span>
            </router-link>
          </div>
          <p class="has-text-light mt-4">
            <span class="icon"><i class="fas fa-check-circle"></i></span>
            Бесплатный базовый уровень
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-6">Почему выбирают EduHub</h2>

        <div class="columns is-multiline">
          <div class="column is-4" v-for="feat in features" :key="feat.title">
            <div class="box has-text-centered h-100">
              <span class="icon is-large mb-3">
                <i :class="feat.icon" class="fa-3x has-text-primary"></i>
              </span>
              <h3 class="title is-4">{{ feat.title }}</h3>
              <p>{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section has-background-light">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-6">
            <h2 class="title is-2 has-text-dark">Образование будущего</h2>
            <p class="content is-size-5 has-text-dark">
              EduHub объединяет лучшие практики
            </p>
            <ul class="content is-size-5 has-text-dark custom-list">
              <li>
                <span class="icon has-text-primary"><i class="fas fa-check-circle"></i></span>
                Доступность микро-формата
              </li>
              <li>
                <span class="icon has-text-primary"><i class="fas fa-check-circle"></i></span>
                Техническое совершенство
              </li>
              <li>
                <span class="icon has-text-primary"><i class="fas fa-check-circle"></i></span>
                Реальные проекты
              </li>
              <li>
                <span class="icon has-text-primary"><i class="fas fa-check-circle"></i></span>
                Академическое качество
              </li>
            </ul>
            <p class="content is-size-5 mt-4 has-text-dark">
            Наша цель — 
            <strong class="has-text-black">95/100 в Lighthouse</strong> и 
            <strong class="has-text-black">WCAG AAA</strong>.
            </p>
            <router-link to="/catalog" class="button is-primary is-large mt-3">
              <span class="icon"><i class="fas fa-arrow-right"></i></span>
              <span>Узнать больше</span>
            </router-link>
          </div>
          <div class="column is-6">
            <figure class="image is-4by3">
              <div class="placeholder-box">
                <span class="icon is-large">
                  <i class="fas fa-chalkboard-teacher fa-6x has-text-grey-dark"></i>
                </span>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>

    <section id="catalog" class="section">
      <div class="container">
        <h2 class="title is-2 has-text-centered mb-2">Каталог курсов</h2>
        <p class="subtitle is-4 has-text-centered mb-6">Выберите направление для роста</p>

        <div class="columns is-multiline">
          <div class="column is-4" v-for="course in courses" :key="course.id">
            <div class="card course-card">
              <div class="card-image">
                <figure class="image is-16by9">
                  <div :class="course.bgClass" class="course-img-placeholder">
                    <span class="icon is-large"><i :class="course.icon" class="fa-3x"></i></span>
                  </div>
                </figure>
              </div>
              <div class="card-content">
                <h3 class="title is-5">{{ course.title }}</h3>
                <p class="content is-size-6">{{ course.desc }}</p>
                <div class="tags mb-3">
                  <span class="tag is-primary" v-for="tag in course.tags" :key="tag">{{ tag }}</span>
                </div>
                <div class="is-flex is-justify-content-space-between is-align-items-center">
                  <div class="is-flex is-align-items-center">
                    <span class="icon"><i class="fas fa-star has-text-warning"></i></span>
                    <span>{{ course.rating }}</span>
                    <span class="icon ml-3"><i class="fas fa-users"></i></span>
                    <span>{{ course.students }}</span>
                  </div>
                  <div class="has-text-weight-bold is-size-5">{{ course.price }}</div>
                </div>
                <button class="button is-primary is-fullwidth mt-3">Подробнее</button>
              </div>
            </div>
          </div>
        </div>

        <div class="has-text-centered mt-6">
          <router-link to="/catalog" class="button is-primary is-outlined is-large">
            <span class="icon"><i class="fas fa-th-large"></i></span>
            <span>Смотреть все курсы</span>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// Данные вынесены в скрипт, чтобы не загромождать шаблон
export default {
  data() {
    return {
      features: [
        { title: 'Микро-формат', icon: 'fas fa-clock', desc: 'Уроки по 5–10 минут не занимают много времени.' },
        { title: 'AI-рекомендации', icon: 'fas fa-robot', desc: 'Персональные траектории обучения под ваши цели.' },
        { title: 'Реальные проекты', icon: 'fas fa-briefcase', desc: 'Интеграция с GitHub и Behance.' },
        { title: 'Сертификация', icon: 'fas fa-certificate', desc: 'Официальные сертификаты для вашего портфолио.' },
        { title: 'Мета-обучение', icon: 'fas fa-brain', desc: 'Курсы о том, как эффективно учиться.' },
        { title: 'WCAG AAA', icon: 'fas fa-universal-access', desc: 'Полная доступность для всех.' }
      ],
      courses: [
        { id: 1, title: 'Веб-разработчик', desc: 'HTML, CSS, JS, React', rating: 4.9, students: '12.3k', price: 'Бесплатно', bgClass: 'has-background-primary-light', icon: 'fab fa-html5 has-text-primary', tags: ['Микро-формат', 'GitHub'] },
        { id: 2, title: 'UX/UI-дизайнер', desc: 'Figma, интерфейсы', rating: 4.8, students: '8.2k', price: 'Бесплатно', bgClass: 'has-background-danger-light', icon: 'fas fa-paint-brush has-text-danger', tags: ['Видео', 'Behance'] },
        { id: 3, title: 'Data Science', desc: 'Python, SQL, ML', rating: 4.7, students: '5.6k', price: 'от 1 990₽', bgClass: 'has-background-success-light', icon: 'fas fa-chart-line has-text-success', tags: ['AI-трек'] },
        { id: 4, title: 'Мета-обучение', desc: 'Как учиться быстрее', rating: 4.9, students: '15.4k', price: 'Бесплатно', bgClass: 'has-background-warning-light', icon: 'fas fa-brain has-text-warning', tags: ['Для всех'] },
        { id: 5, title: 'Python-разработчик', desc: 'Django, боты, бэкенд', rating: 4.8, students: '9.8k', price: 'от 1 490₽', bgClass: 'has-background-info-light', icon: 'fab fa-python has-text-info', tags: ['Проекты', 'GitHub'] },
        { id: 6, title: 'Английский для IT', desc: 'Технический язык', rating: 4.9, students: '11.2k', price: 'Бесплатно', bgClass: 'has-background-grey-light', icon: 'fas fa-language has-text-grey-dark', tags: ['Duolingo-style'] }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #00d1b2 0%, #0099cc 100%) !important;
}

.box {
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}

.box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.placeholder-box {
  background-color: #f5f5f5;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
}

.course-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.course-img-placeholder {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-list {
  list-style: none !important;
  margin-left: 0 !important;
}

.custom-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
}

.h-100 {
  height: 100%;
}
</style>