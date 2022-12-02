<template>
  <div id="app">
    <header >
     <NavBar/>
    </header>
    <main class="min-h-screen">
      
      <RouterView></RouterView>
    </main>
    <footer>
      <ContactFooter/>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ContactFooter from './components/ContactFooter.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ContactFooter,
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a0aebb;
  margin-top: 60px;
}
</style>
