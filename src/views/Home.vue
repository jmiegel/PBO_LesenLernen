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
          <button>
            <font-awesome-icon icon="puzzle-piece" size="4x" />
          </button>
        </div>
      </div>
      <div class="row2_wrapper">
        <div class="settings_button_wrapper">
          <button>
            <font-awesome-icon icon="user-cog" size="4x" />
          </button>
        </div>
        <div class="start_button_wrapper">
          <router-link to="/exercise" tag="button">
            <font-awesome-icon icon="play" size="4x" />
          </router-link>
        </div>
      </div>
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
      piktArray: pictograms,
      auswBuchArr: []
    };
  },
  mounted() {
    for (let i = 0; i < pictograms.length; i++) {
      this.auswBuchArr.push(false);
    }
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
}
</style>
