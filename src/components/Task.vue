<template>
  <div class="task_wrapper">
    <div
      v-for="(anlaut, index) in wordsArr[wIndex]"
      :key="index"
      class="char_wrapper"
    >
      <img :src="pictArr[anlautIndices[index]].img" />
    </div>
  </div>
</template>

<script>
import words from "@/words.js";
import pictograms from "@/pictograms.js";

export default {
  name: "Task",
  data() {
    return {
      wordsArr: words,
      wIndex: 0,
      auswBuchArr: [],
      pictArr: pictograms,
      anlautIndices: []
    };
  },
  mounted() {
    const min = 0;
    const max = this.wordsArr.length;
    this.wIndex = Math.floor(Math.random() * (max - min)) + min;

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

    this.anlautIndices = [];
    for (let i = 0; i < this.wordsArr[this.wIndex].length; i++) {
      let anlaut = this.wordsArr[this.wIndex][i];
      for (let j = 0; j < this.pictArr.length; j++) {
        if (
          anlaut === this.pictArr[j].upper ||
          anlaut === this.pictArr[j].lower
        ) {
          this.anlautIndices.push(j);
        }
      }
    }
  }
};
</script>

<style scoped>
.task_wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 5em;
}

.char_wrapper {
  font-size: 10em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-weight: bold;
  transition: color 0.5s ease;
}

.char_wrapper:hover {
  color: orange;
}
</style>
