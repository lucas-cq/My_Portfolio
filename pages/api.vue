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

<style>

</style>

<script >
  const instagramApi = async () => { 
  const response = await fetch('/.netlify/functions/instagram_api')
  const data = await response.json()
  const insta = data.find((item) => item.caption.includes('#coding'))
  const displayPost = document.querySelector('.instagram-output') 
   displayPost.innerHTML = `
   <figure>
   <img src='${insta.url}' alt="My post from instagram">
   <p>${insta.caption.replace('#coding', '')}</p>
   </figure>
  ` 
  console.log(data)
  } 
await instagramApi() // Runs the API function on html
</script>