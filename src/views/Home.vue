<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <!--<HelloWorld />-->
    <!--<BlogPost />-->
    <h1>Welche Buchstaben kannst du schon?</h1>
    <button class="Normalbutton">Einstellungen</button>
    <button class="Piktobutton">
      <img id="puzzleimg" alt="Puzzle" src="../assets/puzzle.png" />
    </button>
    <button class="Piktobutton">
      <img id="startimg" alt="Start" src="../assets/start.png" />
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import BlogPost from "../components/Blogpost.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
    //BlogPost
  }
};
</script>

<style>
.Normalbutton {
  background-color: lightgray;
  border: none;
  padding: 1em;
  font-size: 1.2em;
  border-radius: 4px;
}

.Piktobutton {
  background-color: blue;
  border-radius: 4px;
  padding: 0px;
}

img {
  height: 50%;
  width: 50%;
}
</style>
