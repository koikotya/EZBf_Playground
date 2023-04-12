<template>
  <div class="code-input">
    <label for="code-input">ソースコード:</label>
    <textarea
      id="code-input"
      v-model="code"
      rows="10"
      cols="50"
      spellcheck="false"
      placeholder="fn main() {
    print(&quot;Hello, World!&quot;);
}"
    ></textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: ""
    };
  },
  methods: {
    getCode() {
      return this.code;
    }
  }
};
</script>

<style scoped>
.code-input {
  margin-bottom: 1rem;
}

textarea {
  white-space: pre;
  width: 100%;
  resize: vertical;
}
</style>
