<template>
  <div class="home">
    <h1>Welche Buchstaben kannst du schon?</h1>

    <!-- Div-Struktur für Startseite -->
    <div class="content_wrapper">
      <div class="row1_wrapper">
        <div class="table_wrapper">
          <BuchstabenauswahlTabelle />
        </div>
        <div class="button_wrapper">
          <router-link
            id="start_button"
            to="/exercise"
            tag="button"
            class="round_button"
          >
            <font-awesome-icon icon="play" size="8x" />
          </router-link>
          <button id="puzzle_button" class="round_button">
            <font-awesome-icon icon="puzzle-piece" size="6x" />
          </button>
        </div>
      </div>
      <div class="row2_wrapper">
        <button id="settings_button">Einstellungen</button>
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
.content_wrapper {
  display: flex;
  flex-direction: column;
  padding: 2em;
}

.row1_wrapper {
  display: flex;
  flex-direction: row;
}

.row2_wrapper {
  display: flex;
  flex-direction: row;
  padding-top: 4em;
}

.table_wrapper {
  padding: 2%;
  width: 80%;
}

.button_wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 20%;
  text-align: center;
}

.round_button {
  border: none;
  padding: 1em;
  transition-duration: 0.5s;
  background-color: white;
}

#puzzle_button {
  padding-top: 4em;
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
