<template>
  <div>
    <h1>Übung</h1>
    <progress></progress>
    <Task :key="componentKey" />
    <button @click="nextTask">
      <font-awesome-icon icon="play" size="4x" />
    </button>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  name: "Exercise",
  components: {
    Task
  },
  data() {
    return {
      componentKey: 0
    };
  },
  methods: {
    nextTask() {
      this.componentKey += 1;
    }
  }
};
</script>

<style scoped></style>
