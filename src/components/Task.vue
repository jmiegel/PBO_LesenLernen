<template>
  <div class="task_wrapper">
    <div
      v-for="(char, index) in wordsArr[wIndex]"
      :key="index"
      class="char_wrapper"
    >
      {{ char }}
    </div>
  </div>
</template>

<script>
import words from "@/words.js";

export default {
  name: "Task",
  data() {
    return {
      wordsArr: words,
      wIndex: 0
    };
  },
  mounted() {
    const min = 0;
    const max = this.wordsArr.length;
    this.wIndex = Math.floor(Math.random() * (max - min)) + min;
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
