<template>
  <header>
    <nav>
      <ul>
        <div class="img-wrapper">
        <NuxtLink to="/"><svg class="main-logo" width="80" height="80" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="main-logo" fill-rule="evenodd" clip-rule="evenodd" d="M199.628 380C300.088 374.983 380 291.89 380 190.12C380 85.1196 294.934 0 190 0C179.792 0 169.772 0.805527 160 2.35652V340.477L297 260.252V322.98L199.628 380ZM190 92.0517L289 41.0259V88.904L230.308 119.154V216.618L296 178.922V225.062L233.294 261.045L233.308 261.045L232.855 261.297L230.207 262.816L230.187 262.781L190.216 285.015L190.305 262.215L190.308 262.215V92.5349L190 92.0517Z" fill="#FF5D73"/>
        <path class="main-logo" d="M109 18.0927C44.5776 48.5179 0 114.11 0 190.12C0 266.13 44.5776 331.722 109 362.147V18.0927Z" fill="#FF5D73"/>
        </svg></NuxtLink>
        </div>
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
  margin: 25px 0px 0px 50px;
  font-size: 27px;
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
    width: 70px;
    filter: drop-shadow(0px 1.5px 2px #212124);
    transition: 0.5s;
  }

  .img-wrapper:hover path{
    fill: #ff3d58;
  }

  .contact-button {
    margin: 35px 13rem auto auto;
    font-size: 27px;
    background-color: #FF5D73;
    border-radius: 10px;
    padding: 5px;
    filter: drop-shadow(0px 1.5px 1px #212124);
    transition: 0.5s;
  }

  .contact-button:hover {
    background-color: #ff3d58;
    transition: 0.5s;
  }
  
</style>

<script>

</script>
