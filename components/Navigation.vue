<template>
  <header>
    <nav class="nav-box">
      <ul class="nav-flex">
        <div class="img-wrapper">
        <NuxtLink to="/"><svg class="main-logo" width="80" height="80" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="main-logo" fill-rule="evenodd" clip-rule="evenodd" d="M199.628 380C300.088 374.983 380 291.89 380 190.12C380 85.1196 294.934 0 190 0C179.792 0 169.772 0.805527 160 2.35652V340.477L297 260.252V322.98L199.628 380ZM190 92.0517L289 41.0259V88.904L230.308 119.154V216.618L296 178.922V225.062L233.294 261.045L233.308 261.045L232.855 261.297L230.207 262.816L230.187 262.781L190.216 285.015L190.305 262.215L190.308 262.215V92.5349L190 92.0517Z" fill="#FF5D73"/>
        <path class="main-logo" d="M109 18.0927C44.5776 48.5179 0 114.11 0 190.12C0 266.13 44.5776 331.722 109 362.147V18.0927Z" fill="#FF5D73"/>
        </svg></NuxtLink>
        </div>
        <li v-show="!mobile"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/css' }">CSS</NuxtLink></li>
        <li v-show="!mobile"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/projects' }">Projects</NuxtLink></li>
        <li v-show="!mobile"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/about' }">About</NuxtLink></li>
      </ul>
        <div @click="toggleMobileNav" v-show="mobile" class="hamburger" :class="{'hamburger open' : mobileNav}">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <p v-show="!mobile" class="contact-button desktop-nav"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/contact' }">Contact</NuxtLink></p>
    </nav>
    <nav v-show="mobileNav" class="mobile-nav open" :class="{'mobile-nav open' : toggleMobileNav }">
      <ul>
        <li><NuxtLink class="nav-text" :to="{ path: '/css' }">CSS</NuxtLink></li>
        <li><NuxtLink class="nav-text" :to="{ path: '/projects' }">Projects</NuxtLink></li>
        <li><NuxtLink class="nav-text" :to="{ path: '/about' }">About</NuxtLink></li>
        <li><NuxtLink class="nav-text" :to="{ path: '/contact' }">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 954){
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    }
  }
}
</script>

<style scoped>

  .nav-flex {
    padding-left: 0px;
  }

  .nav-box {
    display: flex;
    margin-left: 10rem;
  }

  .nav-box ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .nav-box li {
  margin: 25px 0px 0px 50px;
  font-size: 27px;
  list-style: none;
  }
  
  .nav-text {
    text-decoration: none;
    color: white;
    transition: 0.5s;
  }

  header {
    background-color: #7C7A7A;
    font-family: 'Rubik', sans-serif;
    position: relative;
  }

  .main-logo {
    width: 70px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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
    padding: 5px 8px 5px 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transition: 0.5s;
  }

  .contact-button:hover {
    background-color: #ff3d58;
  }

  /* ********** */
  /* Mobile Nav */
  /* ********** */

  .hamburger {
    display: none;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 40px;
    height: 6px;
    margin: 8px auto;
    transition: 0.3s ease all;
    border-radius: 15px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: #FF5D73;
  }

  @media screen and (max-width: 954px) {
    .desktop-nav {
      display: none;
    }

    .hamburger {
      display: block;
      margin: 2rem 2rem 2rem auto;
    }

    .img-wrapper {
      display: flex;
    }

    .hamburger.open .bar:nth-child(2){
      opacity: 0;
    }

    .hamburger.open .bar:nth-child(1){
      transform: translateY(20px) rotate(45deg);
    }

    .hamburger.open .bar:nth-child(3){
      transform: translateY(-7.5px) rotate(-45deg);
    }

    .mobile-nav {
      display: block;
      position: relative;
      width: 100%;
      background-color: #7C7A7A;
      margin-bottom: 20px;
    }

    .mobile-nav.open {
      display: flex;
      flex-direction: column;
      text-align: center;
    }

    .mobile-nav.open ul {
      margin: auto 0px;
      padding: 0px;
    }

    .mobile-nav.open li {
      list-style-type: none;
      font-size: 25px;
      padding: 25px
    }

    .nav-box {
      margin: 0 auto;
      position: sticky;
    }

    .nav-flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .main-logo {
      margin-left: 3rem;
    }
  }
  
</style>
