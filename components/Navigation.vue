<template>
  <header class="header-main">
    <nav class="nav-box">
      <ul class="nav-flex">
        <div class="img-wrapper">
        <NuxtLink to="/"><svg class="main-logo" width="80" height="80" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg" alt="My main logo">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M200.628 381C301.088 375.983 381 292.89 381 191.12C381 86.1196 295.934 1 191 1C180.792 1 170.772 1.80553 161 3.35652V341.477L298 261.252V323.98L200.628 381ZM191 93.0517L290 42.0259V89.904L231.308 120.154V217.618L297 179.922V226.062L234.294 262.045L234.308 262.045L233.855 262.297L231.207 263.816L231.187 263.781L191.216 286.015L191.305 263.215L191.308 263.215V93.5349L191 93.0517Z" fill="#FF5D73"/>
          <path d="M110 19.0928C45.5776 49.5179 1 115.11 1 191.12C1 267.13 45.5776 332.722 110 363.147V19.0928Z" fill="#FF5D73"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M200.628 381C301.088 375.983 381 292.89 381 191.12C381 86.1196 295.934 1 191 1C180.792 1 170.772 1.80553 161 3.35652V341.477L298 261.252V323.98L200.628 381ZM191 93.0517L290 42.0259V89.904L231.308 120.154V217.618L297 179.922V226.062L234.294 262.045L234.308 262.045L233.855 262.297L231.207 263.816L231.187 263.781L191.216 286.015L191.305 263.215L191.308 263.215V93.5349L191 93.0517Z"/>
          <path d="M110 19.0928C45.5776 49.5179 1 115.11 1 191.12C1 267.13 45.5776 332.722 110 363.147V19.0928Z"/>
        </svg></NuxtLink>
        </div>
        <li v-show="!mobile"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/css' }">CSS</NuxtLink></li>
        <li v-show="!mobile"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/projects' }">Projects</NuxtLink></li>
        <li v-show="!mobile"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/journey' }">Journey</NuxtLink></li>
      </ul>
        <div @click="toggleMobileNav" v-show="mobile" class="hamburger" :class="{'hamburger open' : mobileNav}">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <p v-show="!mobile" class="contact-button desktop-nav"><NuxtLink class="nav-text desktop-nav" :to="{ path: '/contact' }">Contact</NuxtLink></p>
    </nav>
    <Transition name="navfade">
      <nav v-show="mobileNav" class="mobile-nav open" :class="{'mobile-nav open' : toggleMobileNav }">
        <ul>
          <li><NuxtLink class="nav-text" :to="{ path: '/css' }">CSS</NuxtLink></li>
          <li><NuxtLink class="nav-text" :to="{ path: '/projects' }">Projects</NuxtLink></li>
          <li><NuxtLink class="nav-text" :to="{ path: '/journey' }">Journey</NuxtLink></li>
          <li><NuxtLink class="nav-text" :to="{ path: '/contact' }">Contact</NuxtLink></li>
        </ul>
      </nav>
    </Transition>
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
  .navfade-enter-active,
  .navfade-leave-active {
    transition: opacity 400ms ease;
  }

  .navfade-enter,
  .navfade-leave-to {
    opacity: 0;
  }

  .header-main {
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100%;
  }

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
