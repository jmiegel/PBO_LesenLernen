<template>
  <div class="home">
    <h1>Welche Buchstaben kannst du schon?</h1>

    <!-- Div-Struktur für Startseite -->
    <div class="content_wrapper">
      <div class="row1_wrapper">
        <div class="table_wrapper">
          <BuchstabenauswahlTabelle />
        </div>
        <div class="puzzle_button_wrapper">
          <button id="puzzle_button" class="round_button">
            <font-awesome-icon icon="puzzle-piece" size="6x" />
          </button>
        </div>
      </div>
      <div class="row2_wrapper">
        <div class="settings_button_wrapper">
          <button id="settings_button">Einstellungen</button>
        </div>
        <div class="start_button_wrapper">
          <router-link
            id="start_button"
            to="/exercise"
            tag="button"
            class="round_button"
          >
            <font-awesome-icon icon="play" size="6x" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import pictograms from "@/pictograms.js";
import BuchstabenauswahlTabelle from "@/components/BuchstabenauswahlTabelle.vue";

export default {
  name: "Home",
  components: {
    BuchstabenauswahlTabelle
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

.content_wrapper {
  display: flex;
  flex-direction: column;
}

.row1_wrapper {
  display: flex;
  flex-direction: row;
}

.row2_wrapper {
  display: flex;
  flex-direction: row;
}

.table_wrapper {
  padding: 2% 10%;
  width: 80%;
}

.puzzle_button_wrapper {
  width: 20%;
  text-align: center;
}

.settings_button_wrapper {
  width: 80%;
  text-align: left;
}

.start_button_wrapper {
  width: 20%;
  text-align: center;
}

.round_button {
  border: none;
  padding: 1em;
  transition-duration: 0.5s;
  background-color: white;
}

#start_button:hover {
  color: yellowgreen;
}

#puzzle_button:hover {
  color: teal;
}

#settings_button {
  font-size: 2em;
  color: rgb(54, 51, 51);
  border-radius: 10px;
  border: 2px solid rgb(54, 51, 51);
}
</style>
