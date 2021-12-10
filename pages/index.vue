<template>
  <div>
  <Navigation />
  <main>
    <section class="hero-section">
      <div class="hero-text">
        <h1><span class="lucas-text">Lucas</span> Wrote <br>This</h1>
        <p>A modern website built by a web<br> developer at SAIT</p>
      </div>
      <svg class="main-logo" width="420" height="420" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="main-logo" fill-rule="evenodd" clip-rule="evenodd" d="M199.628 380C300.088 374.983 380 291.89 380 190.12C380 85.1196 294.934 0 190 0C179.792 0 169.772 0.805527 160 2.35652V340.477L297 260.252V322.98L199.628 380ZM190 92.0517L289 41.0259V88.904L230.308 119.154V216.618L296 178.922V225.062L233.294 261.045L233.308 261.045L232.855 261.297L230.207 262.816L230.187 262.781L190.216 285.015L190.305 262.215L190.308 262.215V92.5349L190 92.0517Z" fill="#FF5D73"/>
        <path class="main-logo" d="M109 18.0927C44.5776 48.5179 0 114.11 0 190.12C0 266.13 44.5776 331.722 109 362.147V18.0927Z" fill="#FF5D73"/>
      </svg>
    </section>
    <section class="about-section">
      <h2 class="hero-text">A Bit About Me</h2>
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
  font-size: 27px;
}

.hero-text h1{
  font-size: 70px;
  filter: drop-shadow(1.2px 1px 0px #323235);
  margin-bottom: 5px;
}

.main-logo {
  filter: drop-shadow(1.2px 1px 0px #323235);
  padding: 1px;
}

.hero-section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem;
}

.about-section {
  background-color: #494949;
}

.about-section h2 {
  font-size: 50px
}
</style>

<script>
export default {
  
}
</script>
