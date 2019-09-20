<template>
  <div class="tabelle_wrapper">
    <div v-for="(entry, i) in pictArray" :key="entry.name">
      <BuchstabenauswahlKaestchen
        :kaestchen-data="entry"
        :index="i"
        :selected="auswBuchArr[i]"
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
      auswBuchArr: []
    };
  },
  mounted() {
    const auswahlFromStorage = JSON.parse(localStorage.getItem("auswahl"));
    console.log(auswahlFromStorage);
    if (auswahlFromStorage === null) {
      for (let i = 0; i < pictograms.length; i++) {
        this.auswBuchArr.push(false);
      }
    } else {
      for (let i = 0; i < auswahlFromStorage.length; i++) {
        this.auswBuchArr.splice(i, 1, auswahlFromStorage[i]);
      }
    }
  },
  methods: {
    onInput(newValue, j) {
      this.auswBuchArr.splice(j, 1, newValue);
      localStorage.setItem("auswahl", JSON.stringify(this.auswBuchArr));
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
</style>
