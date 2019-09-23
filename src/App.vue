<template>
  <div id="app">
    <router-view />
    <link
      href="https://fonts.googleapis.com/css?family=Be+Vietnam&display=swap"
      rel="stylesheet"
    />
  </div>
</template>

<style>
#app {
  font-family: "Be Vietnam", Helvetica, Arial, Geneva, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.testClass {
  border: 1px solid black;
}
</style>
