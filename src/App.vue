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

.bild_wrapper {
  min-width: 100px;
  max-width: 100px;
  min-height: 70px;
  max-height: 70px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.bild_wrapper img {
  /*vertical-align: middle;*/
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}
</style>
