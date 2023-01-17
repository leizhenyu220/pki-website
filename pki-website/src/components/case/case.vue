<template>
  <div class="case-slider">
    <div class="prev">
      <img src="@/assets/images/pki-web_69.png" @click="arrowClick('prev')"/>
    </div>
    <el-carousel arrow="always" :autoplay="false" indicator-position="none" ref="cardShow">
      <el-carousel-item v-for="(item, index) in casePhoto" :key="index">
        <div class="case-item">
          <div class="case-no white-color">01</div>
          <div class="news-fonts">
            <div class="news-time-title f-left">
              <router-link :to="{path: '/case'}" class="news-title">案例A</router-link>
              <div class="case-english">Case A</div>
            </div>
            <div class="news-jump-icon">
              <img src="@/assets/images/pki-web_55.png" alt="">
            </div>
          </div>
          <img :src="item.src1" alt="">
        </div>
        <div class="case-item">
          <div class="case-no white-color">02</div>
          <div class="news-fonts">
            <div class="news-time-title f-left">
              <router-link :to="{path: '/case'}" class="news-title">案例B</router-link>
              <div class="case-english">Case B</div>
            </div>
            <div class="news-jump-icon">
              <img src="@/assets/images/pki-web_55.png" alt="">
            </div>
          </div>
          <img :src="item.src2" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="next">
      <img src="@/assets/images/pki-web_69.png" @click="arrowClick('next')"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "case-zj",
  data() {
    return {
      casePhoto: [ // 首页-客户案例 轮播图片集合
        {
          src1: require("@/assets/images/pki-web_64.png"),
          src2: require("@/assets/images/pki-web_66.png")
        }, {
          src1: require("@/assets/images/pki-web_64.png"),
          src2: require("@/assets/images/pki-web_66.png")
        }
      ]
    }
  },
  methods: {
    /* 客户案例 轮播左右滑动按钮 */
    arrowClick(val) {
      if (val === 'next') {
        this.$refs.cardShow.next()
      } else {
        this.$refs.cardShow.prev()
      }
    }
  }
}
</script>

<style scoped>
.case-slider {
  position: relative;
}

.prev,
.next {
  cursor: pointer;
}

.prev {
  position: absolute;
  left: -60px;
  top: 40%;
}

.next {
  position: absolute;
  right: -60px;
  top: 40%;
  transform: rotate(180deg);
}

.case-slider /deep/ .el-carousel__arrow--left {
  left: -60px;
}

.case-slider /deep/ .el-carousel__arrow--right {
  right: -60px;
}

.case-item {
  width: 590px;
  float: left;
  position: relative;
  cursor: pointer;
}

.case-item img {
  width: 100%;
}

.case-item:first-child {
  margin-right: 20px;
}

.case-item .news-fonts {
  height: 90px;
  padding: 16px 50px;
  background-color: #f3f3f3;
}

.case-item .news-jump-icon {
  margin-top: 17px;
}

.case-item:hover .news-title {
  color: #0073eb;
  transition: all 0.3s;
}

.case-no {
  position: absolute;
  bottom: 110px;
  left: 30px;
  font-size: 72px;
  font-weight: bolder;
  z-index: 10;
}

.case-english {
  color: #999999;
  font-size: 12px;
  line-height: 26px;
}

.news-fonts {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 26px 20px;
  background-color: #0073eb;
  box-sizing: border-box;
  overflow: hidden;
}

.news-time-title {
  width: 80%;
  display: inline-block;
}

.news-title {
  font-size: 18px;
  font-weight: bolder;
  margin-top: 6px;
  text-decoration: none;
  color: #333333;
  display: block;
  transition: all 0.3s;
}

.news-jump-icon {
  float: right;
  margin-top: 22px;
  transition: all 0.3s linear;
}

.case-item:hover .news-jump-icon {
  transform: translateX(10px);
  transition: all 0.3s linear;
}
</style>
