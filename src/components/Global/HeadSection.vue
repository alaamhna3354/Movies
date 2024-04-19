<template>
    <div class="head-section">
     <div class="container">
        <h1 class="text-white">{{ TitlePage }}</h1>
        <p class="text-white">
            {{ PathPageFrom }} / {{ PathPageTo }}
        </p>
     </div>
    </div>
  </template>
  <script>
  export default {
     props: {
     TitlePage: String,
     PathPageFrom: String,
     PathPageTo: String,
   },
  
  };
  </script>
 
  