
<script setup lang="ts">
    console.log("Navbar 888");
</script>

<template>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {
        background-color: aqua;
        color: aliceblue;
        padding: 10px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    li {
        display: inline;
        margin-right: 20px;
    }
    a {
        color: aliceblue;
        text-decoration: none;
    }
</style>