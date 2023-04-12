<template>
  <div class="error-area">
    <label for="error-area">標準エラー出力:</label>
    <textarea
      id="error-area"
      v-model="error"
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
      error: ""
    };
  },
  methods: {
    setError(result) {
      this.error = result;
    }
  }
};
</script>

<style scoped>
.error-area {
  margin-bottom: 1rem;
}

textarea {
  white-space: pre;
  width: 100%;
  resize: vertical;
}

</style>
