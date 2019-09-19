<template>
  <div class="home">
    <h1>Welche Buchstaben kannst du schon?</h1>

    <BuchstabenauswahlTabelle />

    <div class="button_wrapper">
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
import pictograms from "@/pictograms.js";
import BuchstabenauswahlTabelle from "@/components/BuchstabenauswahlTabelle.vue";

export default {
  name: "Home",
  components: {
    BuchstabenauswahlTabelle
  },
  data() {
    return {
      piktArray: pictograms
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

.button_wrapper {
  display: flex;
  flex-direction: row;
}
</style>
