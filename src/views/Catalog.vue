<script setup>
import { ref, computed } from 'vue'

// 1. Исходные данные (Курсы с главной страницы)
const courses = ref([
  { id: 1, title: 'Веб-разработчик', desc: 'HTML, CSS, JS, React', price: 'Бесплатно', bgClass: 'has-background-primary-light', icon: 'fab fa-html5 has-text-primary', tags: ['Микро-формат', 'GitHub'], category: 'Программирование' },
  { id: 2, title: 'UX/UI-дизайнер', desc: 'Figma, интерфейсы', price: 'Бесплатно', bgClass: 'has-background-danger-light', icon: 'fas fa-paint-brush has-text-danger', tags: ['Видео', 'Behance'], category: 'Дизайн' },
  { id: 3, title: 'Data Science', desc: 'Python, SQL, ML', price: '1 990₽', bgClass: 'has-background-success-light', icon: 'fas fa-chart-line has-text-success', tags: ['AI-трек'], category: 'Программирование' },
  { id: 4, title: 'Мета-обучение', desc: 'Как учиться быстрее', price: 'Бесплатно', bgClass: 'has-background-warning-light', icon: 'fas fa-brain has-text-warning', tags: ['Для всех'], category: 'Другое' },
  { id: 5, title: 'Python-разработчик', desc: 'Django, боты, бэкенд', price: '1 490₽', bgClass: 'has-background-info-light', icon: 'fab fa-python has-text-info', tags: ['Проекты', 'GitHub'], category: 'Программирование' },
  { id: 6, title: 'Английский для IT', desc: 'Технический язык', price: 'Бесплатно', bgClass: 'has-background-grey-light', icon: 'fas fa-language has-text-grey-dark', tags: ['IT', 'English'], category: 'Другое' }
])

// 2. Данные для формы добавления
const newCourse = ref({
  title: '',
  desc: '',
  price: '',
  category: 'Программирование',
  tagsString: '' // Временное поле для ввода тегов через запятую
})

const addCourse = () => {
  if (!newCourse.value.title.trim()) return

  courses.value.push({
    id: Date.now(),
    title: newCourse.value.title,
    desc: newCourse.value.desc,
    price: newCourse.value.price || 'Бесплатно',
    category: newCourse.value.category,
    // Превращаем строку "тег1, тег2" в массив ['тег1', 'тег2']
    tags: newCourse.value.tagsString.split(',').map(t => t.trim()).filter(t => t !== ''),
    bgClass: 'has-background-link-light', // Дефолтный фон для новых курсов
    icon: 'fas fa-graduation-cap has-text-link'
  })

  // Сброс формы
  newCourse.value = { title: '', desc: '', price: '', category: 'Программирование', tagsString: '' }
}

const removeCourse = (id) => {
  courses.value = courses.value.filter(c => c.id !== id)
}

// 3. Фильтрация
const activeFilter = ref('Все')
const categories = ['Все', 'Программирование', 'Дизайн', 'Другое']

const filteredCourses = computed(() => {
  if (activeFilter.value === 'Все') return courses.value
  return courses.value.filter(c => c.category === activeFilter.value)
})
</script>

<template>
  <div class="container mt-6 pb-6">
    <h1 class="title is-2 has-text-centered mb-6">Каталог курсов</h1>

    <div class="box has-background-dark p-5 mb-6">
      <h2 class="subtitle has-text-white mb-4">Добавить новый курс в систему</h2>
      <div class="columns is-multiline">
        <div class="column is-4">
          <input v-model="newCourse.title" class="input" type="text" placeholder="Название курса">
        </div>
        <div class="column is-4">
          <input v-model="newCourse.price" class="input" type="text" placeholder="Цена (напр. 1500₽)">
        </div>
        <div class="column is-4">
          <div class="select is-fullwidth">
            <select v-model="newCourse.category">
              <option v-for="cat in categories.slice(1)" :key="cat">{{ cat }}</option>
            </select>
          </div>
        </div>
        <div class="column is-8">
          <input v-model="newCourse.desc" class="input" type="text" placeholder="Краткое описание">
        </div>
        <div class="column is-4">
          <input v-model="newCourse.tagsString" class="input" type="text" placeholder="Теги (через запятую)">
        </div>
        <div class="column is-12">
          <button @click="addCourse" class="button is-primary is-fullwidth">
            <span class="icon"><i class="fas fa-plus"></i></span>
            <span>Опубликовать курс</span>
          </button>
        </div>
      </div>
    </div>

    <div class="buttons is-centered mb-6">
      <button 
        v-for="cat in categories" 
        :key="cat"
        @click="activeFilter = cat"
        :class="['button is-rounded', activeFilter === cat ? 'is-primary' : 'is-dark']"
      >
        {{ cat }}
      </button>
    </div>

    <div v-if="filteredCourses.length > 0" class="columns is-multiline">
      <div v-for="course in filteredCourses" :key="course.id" class="column is-4">
        <div class="card course-card">
          <div class="card-image">
            <figure class="image is-16by9">
              <div :class="course.bgClass" class="course-img-placeholder">
                <span class="icon is-large"><i :class="course.icon" class="fa-3x"></i></span>
              </div>
            </figure>
          </div>
          <div class="card-content">
            <div class="is-flex is-justify-content-space-between is-align-items-start">
               <h3 class="title is-5">{{ course.title }}</h3>
               <button @click="removeCourse(course.id)" class="delete is-small"></button>
            </div>
            
            <p class="content is-size-6 has-text-grey">{{ course.desc }}</p>
            
            <div class="tags mb-3">
              <span class="tag is-primary is-light" v-for="tag in course.tags" :key="tag">
                #{{ tag }}
              </span>
            </div>

            <div class="is-flex is-justify-content-space-between is-align-items-center mt-4">
              <span class="has-text-weight-bold is-size-5 has-text-primary">{{ course.price }}</span>
              <button class="button is-small is-primary is-outlined">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="notification is-dark has-text-centered">
      В этой категории пока пусто.
    </div>
  </div>
</template>

<style scoped>
.course-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.course-img-placeholder {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-content {
  flex-grow: 1;
}

.box.has-background-dark {
  border: 1px solid #333;
}
</style>