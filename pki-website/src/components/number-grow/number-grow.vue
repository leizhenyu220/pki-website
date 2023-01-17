<template>
  <div class="number-grow-warp">
    <span
        ref="numberGrow"
        :data-time="time"
        class="num"
    >{{ value }}</span
    >
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 2
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {
    numberGrow(ele) {
      let _this = this
      let step = Math.ceil((_this.value * 10) / (_this.time * 1000))
      //   let step = 10
      let current = 0
      let start = 0
      let t = setInterval(() => {
        start += step
        if (start > _this.value) {
          clearInterval(t)
          start = _this.value
          t = null
        }
        if (current === start) {
          return
        }
        current = start
        ele.innerHTML = this.numberPutComma(current)
      }, 20)
    },
    numberPutComma(value) {
      if (value === 0) {
        return 0
      }
      if (value.toString().length >= 13) {
        const moneys = value / 1000000000000
        const realVal = parseFloat(moneys).toFixed(2)
        return realVal
      } else if (value.toString().length >= 9) {
        const moneys = value / 100000000
        const realVal = parseFloat(moneys).toFixed(2)
        return realVal
      } else if (value.toString().length >= 5) {
        const moneys = value / 10000
        const realVal = parseFloat(moneys).toFixed(2)
        return realVal
      } else if (Number(value)) {
        let intPartFormat = value
            .toString()
            .replace(/(\d)(?=(?:\d{3})+$)/g, '$1') // 将整数部分逢三一断
        return intPartFormat
      }
    }
  },
  mounted() {
    this.numberGrow(this.$refs.numberGrow)
  },
  watch: {
    value: {
      deep: true,
      handler() {
        this.numberGrow(this.$refs.numberGrow)
      }
    }
  }
}
</script>

<style>
.num {
  color: #0073eb;
  font-size: 72px;
}
</style>


