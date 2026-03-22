<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-4">
          <h4 class="title is-5">
            <span class="icon"><i class="fas fa-graduation-cap"></i></span>
            EduHub
          </h4>
          <p class="content">
            Образовательная платформа, объединяющая лучшие мировые практики.
          </p>
        </div>

        <div class="column is-2">
          <h5 class="title is-6">Навигация</h5>
          <ul class="footer-links">
            <li><a href="/">Главная</a></li>
            <li><a href="/catalog">Каталог курсов</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </div>

        <div class="column is-3">
          <h5 class="title is-6">Контакты</h5>
          <ul class="footer-links">
            <li>
              <span class="icon"><i class="fas fa-envelope"></i></span> 
              info@eduhub.ru
            </li>
            <li>
              <span class="icon"><i class="fas fa-phone"></i></span> 
              +7 (495) 123-45-67
            </li>
            <li>
              <span class="icon"><i class="fas fa-map-marker-alt"></i></span> 
              Москва, ул. Образовательная, 1
            </li>
          </ul>
        </div>

        <div class="column is-3">
          <h5 class="title is-6">Мы в соцсетях</h5>
          <div class="buttons are-medium">
            <a class="button is-rounded is-light">
              <span class="icon"><i class="fab fa-telegram"></i></span>
            </a>
            <a class="button is-rounded is-light">
              <span class="icon"><i class="fab fa-vk"></i></span>
            </a>
            <a class="button is-rounded is-light">
              <span class="icon"><i class="fab fa-youtube"></i></span>
            </a>
            <a class="button is-rounded is-light">
              <span class="icon"><i class="fab fa-github"></i></span>
            </a>
          </div>
          <p class="mt-4">
            <span class="icon"><i class="fas fa-heart has-text-danger"></i></span>
            Сделано с любовью
          </p>
        </div>
      </div>

      <div class="content has-text-centered mt-6">
        <p>© 2026 EduHub. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Добавим стили для списков, так как в Bulma ul/li по умолчанию могут иметь маркеры */
.footer-links {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: inherit;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #00d1b2; /* Бирюзовый цвет Bulma */
}
</style>