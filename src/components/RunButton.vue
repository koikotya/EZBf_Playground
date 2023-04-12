<template>
  <div class="run-button">
    <button @click="runEZBf">コード生成</button>
  </div>
</template>

<script>
export default {
  methods: {
    runEZBf() {
      this.$parent.runEZBf();
    },
  },
};
</script>

<style scoped>
.run-button {
  margin-bottom: 1rem;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
