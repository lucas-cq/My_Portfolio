<template>
  <div>
    <Navigation />
    <main>
      <section class="hero-section3">
        <div class="hero-text3">
          <h1>Get in Touch With <span class="lucas-text">Me</span></h1>
        </div>
          <svg class="contact-logo" width="350" height="268" viewBox="0 0 350 268" fill="none" xmlns="http://www.w3.org/2000/svg" alt="A picture of an envelope">
          <path class="contact-logo" d="M350 54.4877L187.963 164.76L187.967 164.766L178.89 170.899L169.815 165.072L154.907 155.362L154.908 155.401L0 49.9871V34.9565C0 15.6506 15.67 0 35 0H315C334.33 0 350 15.6506 350 34.9565V54.4877Z" fill="#FF5D73"/>
          <path class="contact-logo" d="M209.771 178.669L210 178.667L177.617 200.176L147.778 179.314L147.801 179.314L0 78.7365V233.043C0 252.349 15.67 268 35 268H315C334.33 268 350 252.349 350 233.043V83.2378L209.771 178.669Z" fill="#FF5D73"/>
          </svg>
      </section>
      <section class="contact-sec">
        <h2>Find me on</h2>
        <ul>
          <li><a href="https://github.com/lucas-cq">Github</a></li>
          <li><a href="mailto:lucas.cummings024@gmail.com">Email</a></li>
          <li><a href="https://www.instagram.com/lucas.nuxt/">Instagram</a></li>
          <li><a href="https://twitter.com/lucas_nuxt">Twitter</a></li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
</template>

<style>

.hero-section3 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5rem 0px 8rem 0px;
  height: 50vh;
}

.hero-text3 {
  color: white;
  font-size: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 5px;
  width: 14ch; 
}

.contact-logo {
  filter: drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));
  padding: 1px;
}

.contact-sec {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  font-size: 40px;
  color: white;
  background-color: #494949;
}

.contact-sec h2 {
  margin-bottom: 0px;
  font-size: 55px;
}

.contact-sec ul {
  text-align: center;
  padding: 5px;
}

.contact-sec li {
  list-style-type: none;
  padding-bottom: 3rem;
}

.contact-sec a {
  text-decoration: none;
  color: white;
}

@media screen and (max-width: 940px) {
  .contact-logo {
    display: none;
  }

  .hero-text3 {
    text-align: center;
    font-size: 2.5rem;
  }

  .contact-sec h2{
    font-size: 45px;
  }

  .contact-sec {
    font-size: 30px;
    padding-bottom: 6rem;
  }
}
</style>

<script>
export default {
  name: 'contact',
  mounted() {
    this.textSlide();
    this.contactText();
  },

  methods: {
    textSlide() {
      const gsap = this.$gsap
      gsap.from('.hero-section3', { duration: 0.8, y: '-200%', opacity: 0 })
    },
    contactText() {
      const gsap = this.$gsap
      gsap.from('.contact-sec', { scrollTrigger: ".contact-sec", duration: 1.4, opacity: 0, scrub: true})
    }
  }
}
</script>