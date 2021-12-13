<template>
  <div>
  <Navigation />
  <main>
    <section class="hero-section">
      <div class="hero-text">
        <h1>lucasCummings<span class="lucas-text">() => {</span></h1>
        <p>A modern website built by a web<br> developer at SAIT</p>
        <h2>}</h2>
      </div>
      <svg class="hero-logo" width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="hero-logo" fill-rule="evenodd" clip-rule="evenodd" d="M199.628 380C300.088 374.983 380 291.89 380 190.12C380 85.1196 294.934 0 190 0C179.792 0 169.772 0.805527 160 2.35652V340.477L297 260.252V322.98L199.628 380ZM190 92.0517L289 41.0259V88.904L230.308 119.154V216.618L296 178.922V225.062L233.294 261.045L233.308 261.045L232.855 261.297L230.207 262.816L230.187 262.781L190.216 285.015L190.305 262.215L190.308 262.215V92.5349L190 92.0517Z" fill="#FF5D73"/>
        <path class="hero-logo" d="M109 18.0927C44.5776 48.5179 0 114.11 0 190.12C0 266.13 44.5776 331.722 109 362.147V18.0927Z" fill="#FF5D73"/>
      </svg>
    </section>
    <section v-show="!mobile" class="about-section">
      <article>
        <h2 class="hero-text">A Bit About Me</h2>
        <p>I am a Web Developer that graduated from SAIT. I enjoy designing modern websites that are pleasing to the eye.</p>
        <p>I love working with CSS but building websites with JavaScript and modern Frameworks is my forte. I have experience with API's  and I look forward to working in the web dev industry.</p>
        <p>Take a look at my skills with this website!</p>
      </article>
      <nuxt-img class="profile-pic" src="assets/images/profilepic.jpg" />
    </section>
    <section v-show="mobile" class="mobile-article">
      <article>
        <h2 class="mobile-text">A Bit About Me</h2>
        <nuxt-img class="profile-pic" src="assets/images/profilepic.jpg" />
        <p>I am a Web Developer that graduated from SAIT. I enjoy designing modern websites that are pleasing to the eye.</p>
        <p>I love working with CSS but building websites with JavaScript and modern Frameworks is my forte. I have experience with API's  and I look forward to working in the web dev industry.</p>
        <p>Take a look at my skills with this website!</p>
      </article>
    </section>
  </main>
  <Footer />
  </div>
</template>

<style>
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
  padding: 1px;
}

.hero-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0px 8rem 0px;
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
    font-size: 8vw;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 5px;
    width: 11ch;
  }

  .hero-text h2 {
    font-size: 8vw;
  }

  .hero-text p {
    font-size: 5vw;
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
}

</style>

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
