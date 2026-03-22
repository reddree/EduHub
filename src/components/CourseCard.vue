<script setup>
// Определяем входные параметры (props), которые карточка будет получать извне
defineProps({
  id: Number,
  title: String,
  category: String,
  price: String,
  image: String
})

// Определяем события, которые компонент может "выбрасывать" родителю (например, удаление)
defineEmits(['remove'])
</script>

<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image || 'https://via.placeholder.com/400x300'" :alt="title">
        </figure>
      </div>

      <div class="card-content">
        <div class="media mb-2">
          <div class="media-content">
            <p class="subtitle is-6 has-text-primary mb-1">{{ category }}</p>
            <p class="title is-5">{{ title }}</p>
          </div>
        </div>

        <div class="content">
          <div class="is-flex is-justify-content-between is-align-items-center mb-4">
            <span class="tag is-success is-light is-medium">{{ price }}</span>
          </div>
          
          <div class="buttons">
            <button class="button is-link is-light is-flex-grow-1">Подробнее</button>
            
            <button 
              class="button is-danger is-outlined" 
              @click="$emit('remove', id)"
              title="Удалить курс"
            >
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Стили из твоего style.css уже работают глобально, 
   но здесь можно добавить специфичные правки */
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.content {
  margin-top: auto; /* Прижимает кнопки к низу, если заголовки разной длины */
}
</style>