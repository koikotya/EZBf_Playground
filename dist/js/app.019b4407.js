(function(){"use strict";var e={9135:function(e,r,t){var n=t(9242),o=t(3396);const u={id:"app"},a=(0,o._)("h1",null,"EZBrainfuck Playground",-1),i={class:"container"},c={class:"col"},s={class:"col"};function d(e,r,t,n,d,l){const f=(0,o.up)("CodeInput"),p=(0,o.up)("RunButton"),v=(0,o.up)("OutputArea"),h=(0,o.up)("ErrorArea");return(0,o.wg)(),(0,o.iD)("div",u,[a,(0,o._)("div",i,[(0,o._)("div",c,[(0,o.Wm)(f,{ref:"codeInputRef"},null,512),(0,o.Wm)(p)]),(0,o._)("div",s,[(0,o.Wm)(v,{ref:"outputAreaRef"},null,512),(0,o.Wm)(h,{ref:"errorAreaRef"},null,512)])])])}const l=e=>((0,o.dD)("data-v-43d8d506"),e=e(),(0,o.Cn)(),e),f={class:"code-input"},p=l((()=>(0,o._)("label",{for:"code-input"},"ソースコード:",-1)));function v(e,r,t,u,a,i){return(0,o.wg)(),(0,o.iD)("div",f,[p,(0,o.wy)((0,o._)("textarea",{id:"code-input","onUpdate:modelValue":r[0]||(r[0]=e=>a.code=e),rows:"10",cols:"50",spellcheck:"false",placeholder:'fn main() {\r\n    print("Hello, World!");\r\n}'},null,512),[[n.nr,a.code]])])}var h={data(){return{code:""}},methods:{getCode(){return this.code}}},m=t(89);const g=(0,m.Z)(h,[["render",v],["__scopeId","data-v-43d8d506"]]);var b=g;const w={class:"run-button"};function y(e,r,t,n,u,a){return(0,o.wg)(),(0,o.iD)("div",w,[(0,o._)("button",{onClick:r[0]||(r[0]=(...e)=>a.runEZBf&&a.runEZBf(...e))},"コード生成")])}var _={methods:{runEZBf(){this.$parent.runEZBf()}}};const E=(0,m.Z)(_,[["render",y],["__scopeId","data-v-a83a9ef0"]]);var O=E;const A=e=>((0,o.dD)("data-v-3a4d9098"),e=e(),(0,o.Cn)(),e),k={class:"output-area"},C=A((()=>(0,o._)("label",{for:"output-area"},"生成結果:",-1)));function R(e,r,t,u,a,i){return(0,o.wg)(),(0,o.iD)("div",k,[C,(0,o.wy)((0,o._)("textarea",{id:"output-area","onUpdate:modelValue":r[0]||(r[0]=e=>a.output=e),rows:"10",cols:"50",placeholder:"",disabled:""},null,512),[[n.nr,a.output]])])}var j={data(){return{output:""}},methods:{setOutput(e){this.output=e}}};const Z=(0,m.Z)(j,[["render",R],["__scopeId","data-v-3a4d9098"]]);var I=Z;const B=e=>((0,o.dD)("data-v-f7568656"),e=e(),(0,o.Cn)(),e),D={class:"error-area"},M=B((()=>(0,o._)("label",{for:"error-area"},"標準エラー出力:",-1)));function $(e,r,t,u,a,i){return(0,o.wg)(),(0,o.iD)("div",D,[M,(0,o.wy)((0,o._)("textarea",{id:"error-area","onUpdate:modelValue":r[0]||(r[0]=e=>a.error=e),rows:"10",cols:"50",placeholder:"",disabled:""},null,512),[[n.nr,a.error]])])}var x={data(){return{error:""}},methods:{setError(e){this.error=e}}};const P=(0,m.Z)(x,[["render",$],["__scopeId","data-v-f7568656"]]);var T=P,S={components:{CodeInput:b,RunButton:O,OutputArea:I,ErrorArea:T},data(){return{wasmModule:null}},async mounted(){try{const e=await t.e(758).then(t.bind(t,758)),r=await e.default({onRuntimeInitialized:()=>{console.log("WASM module initialized")}});this.wasmModule=r,this.$refs.outputAreaRef.setOutput(""),this.$refs.errorAreaRef.setError("")}catch(e){console.error("Failed to load wasm module:",e)}},methods:{async runEZBf(){try{this.$refs.outputAreaRef.setOutput("");const e=this.$refs.codeInputRef.getCode(),r=await this.wasmModule.ccall("gen_code","string",["string"],[e]);console.log("Function result:",r),this.$refs.outputAreaRef.setOutput(r)}catch(e){console.error("Error running gen_code:",e)}try{this.$refs.errorAreaRef.setError("");const e=await this.wasmModule.ccall("get_err","string",[],[]);console.log("stderr:",e),this.$refs.errorAreaRef.setError(e)}catch(e){console.error("Error running get_err:",e)}}}};const W=(0,m.Z)(S,[["render",d]]);var z=W;(0,n.ri)(z).mount("#app")}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return e[n](u,u.exports,t),u.exports}t.m=e,function(){var e=[];t.O=function(r,n,o,u){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],u=e[d][2];for(var i=!0,c=0;c<n.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(i=!1,u<a&&(a=u));if(i){e.splice(d--,1);var s=o();void 0!==s&&(r=s)}}return r}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[n,o,u]}}(),function(){t.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(r,{a:r}),r}}(),function(){t.d=function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(r,n){return t.f[n](e,r),r}),[]))}}(),function(){t.u=function(e){return"js/"+e+".f206573d.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={},r="ezbf_playground:";t.l=function(n,o,u,a){if(e[n])e[n].push(o);else{var i,c;if(void 0!==u)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==r+u){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.setAttribute("data-webpack",r+u),i.src=n),e[n]=[o];var f=function(r,t){i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(t)})),r)return r(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){t.b=document.baseURI||self.location.href;var e={143:0};t.f.j=function(r,n){var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)n.push(o[2]);else{var u=new Promise((function(t,n){o=e[r]=[t,n]}));n.push(o[2]=u);var a=t.p+t.u(r),i=new Error,c=function(n){if(t.o(e,r)&&(o=e[r],0!==o&&(e[r]=void 0),o)){var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;i.message="Loading chunk "+r+" failed.\n("+u+": "+a+")",i.name="ChunkLoadError",i.type=u,i.request=a,o[1](i)}};t.l(a,c,"chunk-"+r,r)}},t.O.j=function(r){return 0===e[r]};var r=function(r,n){var o,u,a=n[0],i=n[1],c=n[2],s=0;if(a.some((function(r){return 0!==e[r]}))){for(o in i)t.o(i,o)&&(t.m[o]=i[o]);if(c)var d=c(t)}for(r&&r(n);s<a.length;s++)u=a[s],t.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return t.O(d)},n=self["webpackChunkezbf_playground"]=self["webpackChunkezbf_playground"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9135)}));n=t.O(n)})();
//# sourceMappingURL=app.019b4407.js.map