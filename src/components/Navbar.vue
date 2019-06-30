<template>
    <nav class="navbar">
        <div class="brand">
            <router-link to="/">AppName</router-link>
        </div>
        <ul class="nav">
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
        </ul>
    </nav>
</template>
<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  background: #f0f0f0;
}
.navbar a{
    color: #555;
}
.navbar a:hover{
    color: #42b983;
}
.navbar .brand{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
}

.navbar .nav {
  list-style: none;
}
.navbar .nav li{
  display: inline-block;
  padding: 15px 15px;
}
</style>
