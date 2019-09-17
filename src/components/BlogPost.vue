<template>
  <div v-if="testvar">
    <div>{{ testText }} - {{ testText2 }}</div>

    <button @click="changeVar">klickmich</button>
    <button @click="changeVar2">klickmichauch</button>
    <div v-for="(test, index) in testArray" :key="index + test.text">
      <input v-model="testArray[index].value" placeholder="edit me" />
      {{ testArray[index] }}
      <img :src="testArray[index].img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  data() {
    return {
      testvar: true,
      testText: "Das ist der Test",
      testText2: "",
      testArray: [
        { text: "n1", value: 1, img: require("../assets/logo.png") },
        { text: "n2", value: 2, img: require("../assets/logo.png") },
        { text: "n3", value: 3, img: require("../assets/logo.png") },
        { text: "n4", value: 4, img: require("../assets/logo.png") },
        { text: "n5", value: 5, img: require("../assets/logo.png") }
      ]
    };
  },
  methods: {
    changeVar() {
      let testText;
      testText = "hallo";

      testText += "jkljakfdslka";
      console.log(testText);

      this.testText = testText;
      this.testText2 = "bittebitte";
    },
    changeVar2() {
      this.testText = "neinnein";
      this.testText2 = "jaja";
    }
  }
};
</script>
