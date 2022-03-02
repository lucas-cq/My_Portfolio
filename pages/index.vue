<template>
  <div>
  <Navigation />
  <main>
    <section class="hero-section">
      <div class="hero-text text-move">
        <h1>lucasCummings<span class="lucas-text">() => {</span></h1>
        <p>A modern website built by a web<br> developer at SAIT</p>
        <h2>}</h2>
      </div>
        <svg class="hero-logo" width="382" height="382" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg" alt="A Large Logo with Lucas Cummings initials">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M200.628 381C301.088 375.983 381 292.89 381 191.12C381 86.1196 295.934 1 191 1C180.792 1 170.772 1.80553 161 3.35652V341.477L298 261.252V323.98L200.628 381ZM191 93.0517L290 42.0259V89.904L231.308 120.154V217.618L297 179.922V226.062L234.294 262.045L234.308 262.045L233.855 262.297L231.207 263.816L231.187 263.781L191.216 286.015L191.305 263.215L191.308 263.215V93.5349L191 93.0517Z" fill="#FF5D73"/>
          <path d="M110 19.0928C45.5776 49.5179 1 115.11 1 191.12C1 267.13 45.5776 332.722 110 363.147V19.0928Z" fill="#FF5D73"/>
          <path class="path" stroke="white" stroke-width="2" fill-rule="evenodd" clip-rule="evenodd" d="M200.628 381C301.088 375.983 381 292.89 381 191.12C381 86.1196 295.934 1 191 1C180.792 1 170.772 1.80553 161 3.35652V341.477L298 261.252V323.98L200.628 381ZM191 93.0517L290 42.0259V89.904L231.308 120.154V217.618L297 179.922V226.062L234.294 262.045L234.308 262.045L233.855 262.297L231.207 263.816L231.187 263.781L191.216 286.015L191.305 263.215L191.308 263.215V93.5349L191 93.0517Z"/>
          <path class="path" stroke="white" stroke-width="2" d="M110 19.0928C45.5776 49.5179 1 115.11 1 191.12C1 267.13 45.5776 332.722 110 363.147V19.0928Z"/>
        </svg>
    </section>
    <section v-show="!mobile" class="about-section">
      <article>
        <h2 class="hero-text">A Bit About Me</h2>
        <p>I am a Web Developer that graduated from SAIT. I enjoy designing modern websites that are pleasing to the eye.</p>
        <p>I love working with CSS but building websites with JavaScript and modern Frameworks is my forte. I have experience with API's  and I look forward to working in the web dev industry.</p>
        <p>Take a look at my skills with this website!</p>
      </article>
      <nuxt-img class="profile-pic" src="assets/images/profilepic.webp" alt="A Headshot of Lucas Cummings" />
    </section>
    <section v-show="mobile" class="mobile-article">
      <article>
        <h2 class="mobile-text">A Bit About Me</h2>
        <nuxt-img class="profile-pic" src="assets/images/profilepic.webp" alt="A Headshot of Lucas Cummings" />
        <p>I am a Web Developer that graduated from SAIT. I enjoy designing modern websites that are pleasing to the eye.</p>
        <p>I love working with CSS but building websites with JavaScript and modern Frameworks is my forte. I have experience with API's  and I look forward to working in the web dev industry.</p>
        <p>Take a look at my skills with this website!</p>
      </article>
    </section>
  </main>
  <Footer />
  </div>
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
    this.aboutText();
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
    },

    heroLogo() {
      const gsap = this.$gsap
      gsap.from('.text-move', { duration: 0.8, y: '-200%', opacity: 0 })
    },

    aboutText() {
      const gsap = this.$gsap
      gsap.from('.about-section', { scrollTrigger: ".about-section", duration: 1.4, opacity: 0 })
    }
  }
}
</script>

<style>

.path {
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  animation: dash 2.5s linear forwards;
  animation-delay: 0.8s;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

body {
  margin: 0px auto;
  font-family: 'Rubik', sans-serif;
  background-color: #7C7A7A;
}

.lucas-text {
  color: #FF5D73;
}

.hero-text {
  color: white;
  font-size: 25px;
}

.hero-text p {
  margin-bottom: 0px;
}

.hero-text h1{
  font-size: 55px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 5px;
  width: 11ch;
}

.hero-text h2 {
  margin-top: 20px;
  font-size: 50px;
  color: #FF5D73;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.hero-logo {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.hero-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0px 8rem 0px;
  height: 65vh;
}

.about-section {
  background-color: #494949;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 5rem;
}

.about-section p {
  font-size: 24px;
  max-width: 40ch;
  line-height: 28px;
}

.about-section h2 {
  font-size: 50px;
}

.profile-pic {
  width: 25rem;
  height: 25rem;
  border-radius: 33px;
  margin: 5rem;
}

@media screen and (max-width: 940px) {
  .hero-logo {
    display: none;
  }

  .hero-text h1{
    font-size: 2.5rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 5px;
    width: 11ch;
  }

  .hero-text h2 {
    font-size: 2.5rem;
  }

  .hero-text p {
    font-size: 23px;
  }

  .mobile-article h2 {
    font-size: 2rem;
  }

  .mobile-article p {
    font-size: 1.3rem;
    line-height: 2.5rem;
    padding: 1rem;
    margin-left: 5px;
  }

  .profile-pic {
    width: 22rem;
    height: 22rem;
    margin: 2rem;
  }

  .mobile-text {
    color: white;
    font-size: 25px;
    text-align: center;
    margin-bottom: 0px;
  }

  .mobile-article {
    background-color: #494949;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5rem;
  }

  .hero-section {
    margin-top: 0px;
  }
}

</style>
