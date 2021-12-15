<template>
  <div>
    <Navigation />
    <main>
      <section class="article-section article-head">
        <h1>Here Are Some Of My Favorite <span class="lucas-text">Projects</span></h1>
      </section>
      <section class="instagram-output">

      </section>
      <section class="project-container">
        <h2><a href="https://github.com/lucas-cq/cpnt262-a4">Command Line App</a></h2>
          <h3>A simple command line app built with Node.js</h3>
            <figure>
              <nuxt-img src="assets/images/node-app-pic.png" />
            </figure>
        <h2><a href="https://lucas-cq.github.io/cpnt262-a3/">Random Ghibli Movie</a></h2>
          <h3>Fetches an API and randomizes output on click</h3>
            <figure>
              <nuxt-img src="assets/images/random-ghibli-pic.png" />
            </figure>
        <h2><a href="https://cpnt262-a5-w.herokuapp.com/">My Own API</a></h2>
          <h3>An API created in MongoDB and hosted on Heroku</h3>
            <figure>
              <nuxt-img src="assets/images/car-gallery.png" />
            </figure>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
    const instagramApi = async () => { 
    const response = await fetch('/.netlify/functions/instagram_api')
    const data = await response.json()
    const insta = data.find((item) => item.caption.includes('#coding'))
    const displayPost = document.querySelector('.instagram-output')
    displayPost.innerHTML = `
    <h2>Instagram API</h2>
    <h3>Updates everytime new post is made with a specific hashtag</h3>
    <figure>
    <img src='${insta.url}' alt="My post from instagram">
    <p class="handle">@lucas.nuxt</p>
    <p class="caption">${insta.caption}</p>
    </figure>
    ` 
    console.log(data)
  }

export default {
  name: 'api',

  mounted() {
    instagramApi();
    this.textSlide();
  },

  methods: {
    textSlide() {
      const gsap = this.$gsap
      gsap.from('.article-head', { duration: 0.8, y: '-200%', opacity: 0 })
    }
  }

}
</script>

<style>

.project-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #494949;
}

.project-container h2 {
  font-size: 35px;
  color: white;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 0px;
}

.project-container a:hover {
  color: #ff3a54;
}

.project-container figure {
  background-color: #FF5D73;
  border-radius: 15px;
  padding: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.project-container a {
  text-decoration: underline;
  color: white;
  transition: 0.5s;
}

.project-container h3 {
  font-size: 25px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  width: 30ch;
}

.instagram-output {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #494949;
}

.instagram-output h2{
  text-decoration: underline;
  font-size: 35px;
  color: white;
  text-align: center;
  margin-bottom: 0px;
}

.instagram-output h3{
  font-size: 25px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  width: 30ch;
}

.instagram-output figure{
  background-color: #FF5D73;
  border-radius: 15px;
  padding: 25px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

figure img {
  max-width: 500px;
  max-height: 500px;
}

.caption {
  font-size: 15px;
  color: white;
}

.handle {
  font-size: 20px;
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
}

@media screen and (max-width: 940px) {

  .instagram-output h3 {
    font-size: 18px;
    margin: 1rem;
  }

  .handle {
    font-size: 15px;
  }

  .caption {
    font-size: 10px;
  }

  figure img {
    max-width: 350px;
    max-height: 350px;
  }

  .project-container h3 {
    font-size: 18px;
    margin: 1rem;
  }
}
</style>