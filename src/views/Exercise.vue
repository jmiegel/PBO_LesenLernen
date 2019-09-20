<template>
  <div>
    <h1>Übung</h1>
    <progress></progress>
    <Task />
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  name: "Exercise",
  components: {
    Task
  }
};
</script>

<style scoped></style>
