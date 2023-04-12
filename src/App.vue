<template>
  <div id="app">
    <h1>EZBrainfuck Playground</h1>
    <div class="container">
      <div class="col">
        <CodeInput ref="codeInputRef" />
        <RunButton/>
      </div>
      <div class="col">
        <OutputArea ref="outputAreaRef" />
        <ErrorArea ref="errorAreaRef" />
      </div>
    </div>
  </div>
</template>

<script>
import CodeInput from './components/CodeInput.vue';
import RunButton from './components/RunButton.vue';
import OutputArea from './components/OutputArea.vue';
import ErrorArea from './components/ErrorArea.vue';

export default {
  components: {
    CodeInput,
    RunButton,
    OutputArea,
    ErrorArea
  },
  data() {
    return {
      wasmModule: null,
    };
  },
  async mounted() {
    try {
      const yourCompilerModule = await import("./module/ezbf.js");

      const wasmModule = await yourCompilerModule.default({
        onRuntimeInitialized: () => {
          console.log("WASM module initialized");
        },
      });

      this.wasmModule = wasmModule;

      this.$refs.outputAreaRef.setOutput("");
      this.$refs.errorAreaRef.setError("");
    } catch (error) {
      console.error("Failed to load wasm module:", error);
    }
  },
  methods: {
  async runEZBf() {
    try {
      this.$refs.outputAreaRef.setOutput("");
      const input = this.$refs.codeInputRef.getCode();
      const result = await this.wasmModule.ccall('gen_code', 'string', ['string'], [input]);
      console.log("Function result:", result);
      this.$refs.outputAreaRef.setOutput(result);
    } catch (error) {
      console.error("Error running gen_code:", error);
    }
    try {
      this.$refs.errorAreaRef.setError("");
      const result = await this.wasmModule.ccall('get_err', 'string', [], []);
      console.log("stderr:", result);
      this.$refs.errorAreaRef.setError(result);
    } catch (error) {
      console.error("Error running get_err:", error);
    }
  },
},
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: flex-start;
}

.col {
  flex-basis: 45%;
}

/* 画面サイズが小さい場合、コンポーネントを縦に並べる */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .col {
    flex-basis: 100%;
  }
}

label {
  display: block;
  margin-bottom: 0.5rem;
}
</style>
