<template>
  <footer>
    <div class="foo-box">
      <h2>Lucas <br>Cummings</h2>
      <ul class="second-nav">
        <li><NuxtLink class="foo-text" :to="{ path: '/css' }">CSS</NuxtLink></li>
        <li><NuxtLink class="foo-text" :to="{ path: '/about' }">About</NuxtLink></li>
        <li><NuxtLink class="foo-text" :to="{ path: '/projects' }">Projects</NuxtLink></li>
      </ul>
      <ul>
        <h3>Follow Me</h3>
        <!--Make a twitter account-->
        <li><a class="foo-text" href="#" target="_blank">Twitter</a></li>
        <li><a class="foo-text" href="https://www.instagram.com/lucas.nuxt/" target="_blank">Instagram</a></li>
        <li><a class="foo-text" href="https://github.com/lucas-cq" target="_blank">Github</a></li>
      </ul>
      <ul>
        <h3>Get In Touch</h3>
        <li><a class="foo-text" href="mailto:lucas.cummings024@gmail.com" target="_blank">Email</a></li>
        <li><a class="foo-text" href="" target="_blank">587-123-4567</a></li>
        <li><a class="foo-text" href="" target="_blank"></a></li>
      </ul>
      </div>
      <p>This website is protected under an MIT License &copy;</p>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #FF5D73;
    font-family: 'Rubik', sans-serif;
    color: white;
    padding: 2rem 5rem 1rem 5rem;
  }
  
  .foo-box {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
  }

  p {
    text-align: center;
    padding: 5px;
  }

  .second-nav {
    font-size: 20px;
    margin: 15px;
    padding: 0px;
    text-align: center;
  }

  li {
    list-style: none;
    padding: 10px;
  }

  .foo-text {
    text-decoration: none;
    color: white;
  }

  ul {
    margin-top: 5px;
    text-align: center;
    padding: 0px;
  }

  h2 {
    font-size: 30px;
  }

  h3 {
    margin-bottom: 5px;
  }
</style>