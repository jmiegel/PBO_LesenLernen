<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <!--<HelloWorld />-->
    <!--<BlogPost />-->
    <h1>Welche Buchstaben kannst du schon?</h1>
    <div id="home_grid">
      <!--<img id="anlauttabelle" src="../assets/anlauttabelle.jpg" alt="Anlauttabelle" />-->
      <div v-for="(entry, i) in piktArray" :key="entry.name">
        {{ piktArray[i].upper }} - {{ piktArray[i].lower }}
        <img :src="piktArray[i].img" />
      </div>

      <button id="button_puzzle" class="Piktobutton">
        <img id="puzzleimg" alt="Puzzle" src="../assets/puzzle.png" />
      </button>

      <button id="btn_einstellungen" class="Normalbutton">Einstellungen</button>

      <button id="button_start" class="Piktobutton">
        <img id="startimg" alt="Start" src="../assets/start.png" />
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
//import BlogPost from "../components/Blogpost.vue";
import Piktogrammes from "../piktogrammes/piktogrammes.js";

export default {
  name: "Home",
  components: {
    //HelloWorld,
    //BlogPost
  },
  data() {
    return {
      piktArray: Piktogrammes
    };
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

/*img {
  height: 50%;
  width: 50%;
}*/

#home_grid {
  display: grid;
}

#anlauttabelle {
  grid-row: 1;
  grid-column: 2;
}

#button_einstellungen {
  grid-row: 2;
  grid-column: 1;
}

#button_puzzle {
  grid-row: 1;
  grid-column: 3;
}

#button_start {
  grid-row: 2;
  grid-column: 3;
}
</style>
