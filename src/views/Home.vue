<template>
  <div class="home">
    <img src="../assets/logo.png">
    <div style="display:flex">
      <div>aaa</div>
      <div>bb</div>
    </div>
    <el-button  @click="clickFn">111</el-button>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    clickFn(){
      const a = '11'
      console.log(a)
    }
  },
}
</script>
