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
    <h3>Updates everytime new post is made with a specific hashtag</h3>
    <figure>
    <img src='${insta.url}' alt="My post from instagram">
    <p class="handle">@lucas.nuxt</p>
    <p class="caption">${insta.caption.replace('#coding', '')}</p>
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
    font-size: 18px;
  }

  .caption {
    font-size: 13px;
  }

  figure img {
    max-width: 380px;
    max-height: 380px;
  }
}
</style>

