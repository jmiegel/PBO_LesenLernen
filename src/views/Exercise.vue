<template>
  <div>
    <progress :value="progress" :max="maxTasks"></progress>
    <Task v-if="progress < maxTasks" :key="componentKey" />
    <div v-else class="smiley_wrapper">
      <font-awesome-icon icon="smile-beam" size="9x" />
    </div>
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
      componentKey: 0,
      progress: 0,
      maxTasks: 5
    };
  },
  methods: {
    nextTask() {
      this.componentKey += 1;
      this.progress++;

      if (this.progress > this.maxTasks) window.location.href = "/";
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

.smiley_wrapper {
  padding: 2em;
  color: orange;
}
</style>
