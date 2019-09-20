<template>
  <div>
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

<style scoped>
progress {
  border-radius: 4px;
  width: 60%;
  height: 50%;
}
</style>
