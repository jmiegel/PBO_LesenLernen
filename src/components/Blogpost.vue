<template>
  <div>
    <div>{{ testVar }} - {{ testVar2 }}</div>
    <button @click="changeVar">Klick mich</button>
    <button @click="changeVar2">Klick mich</button>
    <div v-for="(eintrag, index) in testArr" :key="index">
      <input v-model="testArr[index].value" placeholder="edit me" />
      {{ testArr[index] }}
      <img :src="testArr[index].img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Blogpost",
  data() {
    return {
      testVar: "Das ist ein Text",
      testVar2: "",
      testArr: [
        { value: 1, img: require("../assets/logo.png") },
        { value: 1, img: require("../assets/logo.png") },
        { value: 1, img: require("../assets/logo.png") },
        { value: 1, img: require("../assets/logo.png") },
        { value: 1, img: require("../assets/logo.png") }
      ]
    };
  },
  methods: {
    changeVar() {
      let testVar;
      testVar = "Das ist ein neuer Text";
      console.log(testVar);
      this.testVar = testVar;
    },
    changeVar2() {
      let irgendwas;
      irgendwas = "irgendwas";
      this.testVar2 = irgendwas;
    }
  }
};
</script>
