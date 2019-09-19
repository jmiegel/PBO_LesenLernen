<template>
  <div class="tabelle_wrapper">
    <div v-for="(entry, i) in pictArray" :key="entry.name">
      <BuchstabenauswahlKaestchen :kaestchen-data="entry" :index="i" />
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
      pictArray: pictograms
    };
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
