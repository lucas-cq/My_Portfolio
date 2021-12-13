<template>
  <div>
    <Navigation />
    <main>
      <section class="article-section article-head">
        <h1>Here are some of my <span class="lucas-text">API</span> skills</h1>
      </section>
      <section class="instagram-output">

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
    <figure>
    <img src='${insta.url}' alt="My post from instagram">
    <p class="handle">@lucas.nuxt</p>
    <p class="caption">${insta.caption.filter(!insta.caption.startsWith('#'))}</p>
    </figure>
    ` 
    console.log(data)
  }
export default {
  name: 'instagram',

  mounted() {
    instagramApi()
  }
}
</script>

<style>

.instagram-output {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  background-color: #494949;
}

.instagram-output h2{
  font-size: 35px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
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

</style>

