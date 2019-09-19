<template>
  <div class="home">
    <h1>Welche Buchstaben kannst du schon?</h1>
    <div id="home_grid">
      <BuchstabenauswahlTabelle />
    </div>

    <div class="button_wrapper">
      <button>
        <font-awesome-icon icon="puzzle-piece" size="4x" />
      </button>

      <button>
        <font-awesome-icon icon="user-cog" size="4x" />
      </button>

      <button>
        <font-awesome-icon icon="play" size="4x" />
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
