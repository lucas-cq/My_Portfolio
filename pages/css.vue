<template>
  <div>
    <Navigation />
    <main>
      <section class="article-section article-head">
        <h1>A Collection of my Favorite <span class="lucas-text">CSS</span> Transitions</h1>
      </section>
      <div class="card-wrapper">
      <section class="css-cards">
        <div class="css-card card-1" v-show="!displayCode"><h3>Hover</h3></div>
        <div class="code-card" v-show="displayCode">
          <p>.card:hover { background-color: #FF5D73; }</p>
        </div>

        <div class="css-card card-2" v-show="!displayCode"><h3>Shadow</h3></div>
          <div class="code-card" v-show="displayCode">
            <p>.card:hover { filter: drop-shadow(8px 8px 8px rgb(68, 3, 3)); }</p>
          </div>

        <div class="css-card card-3" v-show="!displayCode"><h3>Spin</h3></div>
          <div class="code-card" v-show="displayCode">
            <p>.card:hover { transform: rotate(1080deg); }</p></div>

        <div class="css-card card-4" v-show="!displayCode"><h3>Grow</h3></div>
          <div class="code-card" v-show="displayCode">
            <p>.card:hover { width: 8rem; height: 8rem; font-size: 50px; }</p>
          </div>

        <div class="css-card card-5" v-show="!displayCode"><h3>Shrink</h3></div>
          <div class="code-card" v-show="displayCode">
            <p>.card:hover { width: 1rem; height: 1rem; font-size: 20px; }</p>
          </div>

        <div class="css-card card-6" v-show="!displayCode"><h3>Vanish</h3></div>
          <div class="code-card" v-show="displayCode">
            <p>.card:hover { opacity: 0; }</p>
          </div>

      </section>
      </div>
      <div @click="toggleCode" class="show-button"><button>Show Code</button></div>
    </main>
    <Footer />
  </div>
</template>

<style>

.show-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #494949;
  padding-bottom: 3rem;
  padding-top: auto
}

.show-button button {
  font-size: 30px;
  background-color: #FF5D73;
  border: none;
  color: white;
  border-radius: 20px;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
}

.show-button button:hover {
  background-color: #ff3d58;
}

.article-section {
  display: flex;
  justify-content: center;
  margin: 8rem auto 16rem auto;
}

.article-head {
  color: white;
}

.article-head h1{
  font-size: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-bottom: 5px;
  width: 18ch;
  text-align: center;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  background-color: #494949;
}

.css-cards {
  background-color: #494949;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80rem;
  margin: 5rem;
}

.css-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7C7A7A;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: white;
  border-radius: 47px;
  width: 5rem;
  height: 5rem;
  margin: 4rem;
  padding: 6rem;
  font-size: 30px;
  text-align: center;
}

.css-card h3 {
  margin: auto;
}
/* ************ */
/* Initial card */
/* ************ */

.card-1 {
  transition: 1s;
}

.card-2 {
  transition: 1s;
}

.card-3 {
  transition: transform 2s;
}

.card-4 {
  transition: width 1s, height 1s, font-size 1s;
}

.card-5 {
  transition: width 1s, height 1s, font-size 1s;
}

.card-6 {
  transition: 1s;
}

/* ********** */
/* Hover Card */
/* ********** */

.card-1:hover {
  background-color: #FF5D73;
}

.card-2:hover {
  filter: drop-shadow(8px 8px 8px rgb(68, 3, 3));
}

.card-3:hover {
  transform: rotate(1080deg);
}

.card-4:hover {
  width: 8rem;
  height: 8rem;
  font-size: 50px;
}

.card-5:hover {
  width: 1rem;
  height: 1rem;
  font-size: 20px;
}

.card-6:hover {
  opacity: 0;
}

/* ********* */
/* Code Card */
/* ********* */
.code-card {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #7C7A7A;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  color: white;
  border-radius: 47px;
  width: 5rem;
  height: 5rem;
  margin: 4rem;
  padding: 6rem;
}

.code-card p {
  font-size: 20px;
  width: 15ch;
  margin-top: 0px;
}
</style>

<script>
export default {
  name: 'show',
  data() {
    return {
      displayCode: null,
    }
  },
  methods: {
    toggleCode() {
      this.displayCode = !this.displayCode
    }
  }
}
</script>