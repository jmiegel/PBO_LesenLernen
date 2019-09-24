<template>
  <div class="tabelle_wrapper">
    <div v-for="(entry, i) in pictArray" :key="entry.name">
      <BuchstabenauswahlKaestchen
        :kaestchen-data="entry"
        :index="i"
        :selected="auswBuchArr[i]"
        class="box"
        :style="{ borderColor: colorArr[i] }"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
import pictograms from "@/pictograms.js";
import BuchstabenauswahlKaestchen from "@/components/BuchstabenauswahlKaestchen";

export default {
  name: "BuchstabenauswahlTabelle",
  components: {
    BuchstabenauswahlKaestchen
  },
  data() {
    return {
      pictArray: pictograms,
      auswBuchArr: [],
      colorArr: []
    };
  },
  mounted() {
    const auswahlFromStorage = JSON.parse(localStorage.getItem("auswahl"));

    if (auswahlFromStorage === null) {
      for (let i = 0; i < pictograms.length; i++) {
        this.auswBuchArr.push(false);
      }
    } else {
      for (let i = 0; i < auswahlFromStorage.length; i++) {
        this.auswBuchArr.splice(i, 1, auswahlFromStorage[i]);
      }
    }

    this.changeColors();
  },
  methods: {
    onInput(newValue, j) {
      this.auswBuchArr.splice(j, 1, newValue);
      localStorage.setItem("auswahl", JSON.stringify(this.auswBuchArr));

      this.changeColors();
    },
    changeColors() {
      this.colorArr = [];
      for (let i = 0; i < this.auswBuchArr.length; i++) {
        if (this.auswBuchArr[i] === true) this.colorArr.splice(i, 1, "orange");
        else this.colorArr.splice(i, 1, "black");
      }
    }
  }
};
</script>

<style scoped>
.tabelle_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.box {
  border-width: 4px;
  border-style: solid;
  border-radius: 10%;
  margin: 0.5em;
  transition-duration: 0.5s;
}

.box:hover {
  border-color: orange;
}
</style>
