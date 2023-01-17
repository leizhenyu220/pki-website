<template>
  <div class="password-strength">
    <div class="passwordstrength line">
      <div class="level1 level"
           :style="{'background-color': (passwordPercent >= 10 && passwordPercent < 25) ? '#FC5F76': ((passwordPercent >= 25 && passwordPercent < 35) ? '#FF9900': (passwordPercent >= 35 ? '#33CC00': '#e9fff4'))}"></div>
      <div class="level2 level"
           :style="{'background-color': ((passwordPercent >= 25 && passwordPercent < 35) ? '#FF9900': (passwordPercent >= 35 ? '#33CC00': '#e9fff4'))}"></div>
      <div class="level3 level" :style="{'background-color': passwordPercent >= 35 ? '#33CC00': '#e9fff4'}"></div>
    </div>
    <div class="passwordstrength text">
      <div class="level1 level">弱</div>
      <div class="level2 level">中</div>
      <div class="level3 level">强</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "passwordStrength",
  props: {
    passwordVal: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      passwordPercent: 0,
      //表单变量
      password: '',
    }
  },
  watch: {
    passwordVal(val) {
      this.password = val.length * 5
    },
    score(val) {
      this.passwordPercent = val
    }
  },
  methods: {},
}
</script>

<style scoped>
.password-strength {
  width: 180px;
  height: 30px;
  margin-top: 6px;
  float: left;
  border-radius: 2px;
  overflow: hidden;
}

.passwordstrength {
  display: flex;
}

.line {
  height: 4px;
}

.text {
  line-height: 26px;
}

.level {
  flex: 1;
  text-align: center;
  color: #BBBBBB;
  font-size: 12px;
  margin-right: 4px;
  border-radius: 2px;
}
</style>
