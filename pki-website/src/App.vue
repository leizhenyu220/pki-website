<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
      localStorage.setItem("messageStore",JSON.stringify(this.$store.state))
    })
    //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("messageStore") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("messageStore"))));
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

html,
body {
  height: 100%;
}

img {
  vertical-align: middle;
}

/*引用阿里巴巴普惠体 粗体*/
@font-face {
  font-family: "Puhui";
  src: url("assets/fonts/Alibaba-PuHuiTi-Heavy.otf");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  /*text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}

#app /deep/ .el-message {
  z-index: 9999;
}

/*水平居中内容主体*/
.main {
  width: 1200px;
  margin: 0 auto;
}

/*白色文字*/
.white-color {
  color: #FFFFFF;
}

/*灰色背景*/
.grey-bg {
  background-color: #f5f5f5;
}

/*白色背景*/
.white-bg {
  background-color: #FFFFFF;
}

/*左浮动*/
.f-left {
  float: left;
}
</style>
