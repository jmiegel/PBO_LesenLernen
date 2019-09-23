<template>
  <div id="task_wrapper" class="task_wrapper">
    <div
      v-for="(anlaut, index) in wordsArr[wIndex]"
      :key="index"
      class="char_wrapper"
      :style="{ width: divWidth + 'vw' }"
    >
      <div v-if="showLetter[index]">{{ anlaut }}</div>
      <img v-else :src="pictArr[anlautIndices[index]].img" />
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
      anlautIndices: [],
      showLetter: [],
      divWidth: 0
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

    // Indizes der Piktogramme ermitteln
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

    // Ermitteln, ob ein Buchstabe oder ein Piktogramm angezeigt werden soll
    this.showLetter = [];
    for (let i = 0; i < this.anlautIndices.length; i++) {
      let anlautIndex = this.anlautIndices[i];
      if (auswahlFromStorage[anlautIndex] === true) this.showLetter.push(true);
      else this.showLetter.push(false);
    }

    // Die Breite der Divs in % ermitteln
    this.divWidth = 100 / this.wordsArr[this.wIndex].length;
  }
};
</script>

<style scoped>
.task_wrapper {
  display: flex;
  flex-direction: row;
  padding-top: 5em;
  padding-bottom: 7em;
}

.char_wrapper {
  font-size: 5vw;
  padding-left: 0.5em;
  padding-right: 0.5em;
  font-weight: bold;
  transition: transform 0.5s ease;
}

.char_wrapper:hover {
  transform: scale(1.2);
}

img {
  border: 5px solid black;
  border-radius: 4px;
}
</style>
