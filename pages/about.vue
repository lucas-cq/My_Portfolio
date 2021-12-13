<template>
  <div>
    <Navigation />
      <main>
        <section class="article-section article-head">
          <div class="hero-text">
          <h1>How my <span class="lucas-text">Journey</span> Began</h1>
          </div>
        </section>
        <section class="about2">
          <h2>It All Started Here</h2>
            <div class="codepen">
            <!--CODEPEN-->
              <p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-slug-hash="QWqKmjW" data-user="lucas-cq" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
              <span>See the Pen <a href="https://codepen.io/lucas-cq/pen/QWqKmjW">
              Origin Story</a> by Lucas Cummings (<a href="https://codepen.io/lucas-cq">@lucas-cq</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
              </p>
              <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
            <article class="article-text">
              <p>This was my first website that I made around March 2021. It was built around FreeCodeCamp tutorials. These tutorials were useful for getting
                the basics down, but nowhere near the skills I learned in my course.
              </p>
            </article>
              <!--CODEPEN-->
              <p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-slug-hash="qBjpXrZ" data-user="lucas-cq" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
              <span>See the Pen <a href="https://codepen.io/lucas-cq/pen/qBjpXrZ">
              First thingy</a> by Lucas Cummings (<a href="https://codepen.io/lucas-cq">@lucas-cq</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
              </p>
              <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
            <article class="article-text">
              <p>This was after my first lesson in HTML and CSS. Definitely a step up in terms of layout, but still not there yet.
                I learned basic margin and padding. Maybe some displays here and there. But this is far from my fruition.
              </p>
            </article>
              <!--CODEPEN-->
              <p class="codepen" data-height="500" data-theme-id="dark" data-default-tab="result" data-slug-hash="PojdmdW" data-user="lucas-cq" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
              <span>See the Pen <a href="https://codepen.io/lucas-cq/pen/PojdmdW">
              First Grid</a> by Lucas Cummings (<a href="https://codepen.io/lucas-cq">@lucas-cq</a>)
              on <a href="https://codepen.io">CodePen</a>.</span>
              </p>
              <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
            <article class="article-text">
              <p>Fast forward a couple weeks, and I started to learn Flexbox and Grid. This is where I really got my hands dirty. I coded every day
                trying to understand Flexbox and Grid. Give it a couple more weeks and this was all second nature to me.
              </p>
              <p>As you can see, my skills have really improved over 6 months. I really enjoyed the challenge of JavaScript, but CSS and design encapsulated me.
                With this portfolio website I really just wanted to have fun with the things I enjoy most in development. Nuxt has been my favorite lesson so far, so I
                encorporated it into my final almost immediately.
              </p>
            </article>
            </div>
            <section class="thankyou">
            <h2>A Special Thanks To</h2>
              <p>Tony Grimes</p>
              <p>Ashlyn Knox</p>
              <p>My Classmates</p>
            </section>
        </section>
      </main>
    <Footer />
  </div>
</template>

<style>
  .hero-text2 {
    color: white;
    font-size: 27px;
  }

  .hero-text2 h1{
    font-size: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-bottom: 5px;
    width: 14ch; 
  }

  .about2 {
    background-color: #494949;
    color: white;
    padding: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .about2 h2 {
    font-size: 45px;
  }

  .codepen {
    width: 1000px;
  }

  .article-text {
    font-size: 20px;
    line-height: 40px;
    margin: 2rem 2rem 5rem 2rem;
  }

  .thankyou h2 {
    text-align: center;
  }

  .thankyou p {
    text-align: center;
    font-size: 20px;
  }

  @media screen and (max-width: 940px) {
    .codepen {
      width: 420px;
    }

    .about2 h2{
      margin-top: 0px;
    }
    
    .hero-text h1 {
      max-width: 15ch;
    }
  }
</style>

<script>
export default {
  
}
</script>