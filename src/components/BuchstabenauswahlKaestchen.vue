<template>
  <div class="kaestchen_wrapper" @click="onClick">
    <div class="bild_wrapper">
      <img :src="kaestchenData.img" />
    </div>
    <div class="info_wrapper">
      <div class="buchstabe_wrapper">
        {{ kaestchenData.upper }} {{ kaestchenData.lower }}
      </div>
      <div class="checkbox_wrapper">
        <input
          v-model="internalSelect"
          type="checkbox"
          @input="$emit('input', $event.target.checked, index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuchstabenauswahlKaestchen",
  props: {
    kaestchenData: { type: Object, default: () => {} },
    index: { type: Number, default: 0 },
    selected: { type: Boolean, default: false }
  },
  data() {
    return {
      internalSelect: false
    };
  },
  watch: {
    selected: {
      handler: function(newValue) {
        this.internalSelect = newValue;
      },
      immediate: true
    }
  },
  methods: {
    onClick() {
      this.internalSelect = !this.internalSelect;
      this.$emit("input", this.internalSelect, this.index);
    }
  }
};
</script>

<style scoped>
.kaestchen_wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100px;
}

.info_wrapper {
  display: flex;
  flex-direction: row;
}

.buchstabe_wrapper {
  width: 66%;
}

.checkbox_wrapper {
  width: 34%;
}

.bild_wrapper {
  width: 100px;
  height: 70px;
  text-align: center;
  line-height: 70px;
}

.bild_wrapper img {
  vertical-align: middle;
}
</style>
