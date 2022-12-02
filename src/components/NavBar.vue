<template>
    <nav class="flex items-center justify-between flex-wrap bg-gray-600 p-6" >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
    <img class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" src="https://i.imgur.com/a3nBlXk.png"/>
    <span class="font-semibold text-xl tracking-tight">C.Clarke-Gonzalez</span>
  </div>
  <div class="block lg:hidden">
    
  <div class="w-full block justify-between flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
        <router-link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to= "/">Home</router-link>
      
        <router-link href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/Projects">Projects</router-link>
    </div>
    </div>
  </div>
    </nav>
  
  </template>
  
  <script>
    export default {
      name: 'NavBar'
    }
  </script>
  
  <style scoped>
  
  </style>
  