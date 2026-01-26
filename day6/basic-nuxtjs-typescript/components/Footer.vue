  
  <script setup lang="ts">

        </script>
<template>
   <footer>
    <p>&copy; 2023 My Website. All rights reserved</p>
        <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
        </ul>
   </footer>
</template>

<style scoped>

        footer {
            background-color: black;
            color: #ffffff;
            padding: 10px;
            text-align: center;
        }    
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        li{
            display: inline;
            margin-right: 10px;
        }
        a {
            color: #ffffff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
</style>