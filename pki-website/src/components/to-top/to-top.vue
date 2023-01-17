<template>
  <el-button type="primary" icon="el-icon-arrow-up" class="to-top" circle ref="toTop" v-show="showBtn"
             @click="backTop"></el-button>
</template>

<script>
export default {
  name: "to-top",
  data() {
    return {
      showBtn: false // 回到顶部
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop)
  },
  methods: {
    /* 回到顶部 */
    // 获取当前滚动条位置控制显示或隐藏回到顶部按钮
    scrollToTop () {
      const that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.showBtn = true
      } else {
        that.showBtn = false
      }
    },
    // 点击回到顶部
    backTop() {
      const that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    }
  }
}
</script>

<style scoped>
/* 回到顶部按钮 */
.to-top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  background-color: #0073eb;
  border: none;
  width: 50px;
  height: 50px;
  font-size: 20px;
  transition: all 0.3s;
}
/* 鼠标悬停下回到顶部按钮样式 */
.to-top:hover {
  background-color: #333333;
}
</style>
