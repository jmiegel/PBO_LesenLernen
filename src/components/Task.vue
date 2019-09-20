<template>
  <div class="task_wrapper">
    <div v-for="(char, index) in wordsArr[0]" :key="index" class="char_wrapper">
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
      wordsArr: words
    };
  }
};
</script>

<style scoped>
.task_wrapper {
  display: flex;
  flex-direction: row;
}

.char_wrapper {
  font-size: 10em;
  padding: 0.5em;
  font-weight: normal;
}

.char_wrapper:hover {
  font-weight: bold;
}
</style>
