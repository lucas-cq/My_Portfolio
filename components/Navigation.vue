<template>
  <header>
    <nav>
      <ul>
        <NuxtLink to="/"><nuxt-img class="main-logo" src="/assets/images/main-logo.svg" /></NuxtLink>
        <li><NuxtLink class="nav-text" to="css">CSS</NuxtLink></li>
        <li><NuxtLink class="nav-text" to="js">JS</NuxtLink></li>
        <li><NuxtLink class="nav-text" to="api">API</NuxtLink></li>
      </ul>
        <p class="contact-button"><NuxtLink class="nav-text" to="contact">Contact</NuxtLink></p>
    </nav>
  </header>
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: flex-start;
    margin-left: 12rem;
  }

  nav ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  nav li {
  margin: 20px 0px 0px 50px;
  font-size: 20px;
  list-style: none;
  }
  
  .nav-text {
    text-decoration: none;
    color: white;
  }

  header {
    background-color: #7C7A7A;
    font-family: 'Rubik', sans-serif;
  }

  .main-logo {
    width: 60px;
    fill: #FF5D73;
  }

  .contact-button {
    margin: 30px 13rem auto auto;
    font-size: 20px;
    background-color: #FF5D73;
    border-radius: 10px;
    padding: 5px;
  }
  
</style>

<script>

</script>
