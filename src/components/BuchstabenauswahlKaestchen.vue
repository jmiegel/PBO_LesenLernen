<template>
  <div class="kaestchen_wrapper">
    <div class="bild_wrapper">
      <img :src="kaestchenData.img" />
    </div>
    <div class="info_wrapper">
      <div class="buchstabe_wrapper">
        {{ kaestchenData.upper }} {{ kaestchenData.lower }}
      </div>
      <div class="checkbox_wrapper">
        <input v-model="auswBuchArr[index]" type="checkbox" />
      </div>
    </div>
  </div>
</template>

<script>
import auswahlBuchstaben from "@/auswahlBuchstaben";
export default {
  name: "BuchstabenauswahlKaestchen",
  props: {
    kaestchenData: Object,
    index: Number
  },
  data() {
    return {
      auswBuchArr: auswahlBuchstaben
    };
  }
};
</script>

<style scoped>
.kaestchen_wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100px;
}

.info_wrapper {
  display: flex;
  flex-direction: row;
}

.buchstabe_wrapper {
  width: 66%;
}

.checkbox_wrapper {
  width: 34%;
}
</style>
