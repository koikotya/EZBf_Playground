<template>
  <div class="output-area">
    <label for="output-area">生成結果:</label>
    <textarea
      id="output-area"
      v-model="output"
      rows="10"
      cols="50"
      placeholder=""
      disabled
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      output: ""
    };
  },
  methods: {
    setOutput(result) {
      this.output = result;
    }
  }
};
</script>

<style scoped>
.output-area {
  margin-bottom: 1rem;
}

textarea {
  white-space: pre;
  width: 100%;
  resize: vertical;
}

</style>
