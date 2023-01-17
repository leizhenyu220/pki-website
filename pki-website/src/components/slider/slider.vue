<template>
  <div class="slider">
    <el-carousel :interval="3000" arrow="always" indicator-position="none">
      <el-carousel-item v-for="(item, index) in sliderImages" :key="index" ref="car">
        <div class="main">
          <div class="slider-introduce" v-if="item.show == true">
            <div class="slider-title white-color">{{ item.title }}</div>
            <p class="slider-text slider-chinese white-color">{{ item.text }}</p>
            <p class="slider-text slider-english white-color">{{ item.english }}</p>
            <el-button type="primary" class="slider-btn">查看更多</el-button>
          </div>
        </div>
        <img :src="item.src">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "slider-carousel",
  data() {
    return {
      sliderImages: [ // 顶部大轮播图
        {
          id: 0,
          title: "创开源之势享无境未来",
          text: '麒麟软件隆重推出万物智联产品品牌“星光麒麟"',
          english: 'Kirin Software grandly launched the product brand of All Things Smart Link, "Starlight Kirin"',
          src: require("../../assets/images/pki-web_01.png"),
          show: true
        }, {
          id: 1,
          title: "",
          text: '',
          english: '',
          src: require("../../assets/images/pki-web_10.jpg"),
          show: false
        }, {
          id: 2,
          title: "创开源之势享无境未来",
          text: '麒麟软件隆重推出万物智联产品品牌“星光麒麟"',
          english: 'Kirin Software grandly launched the product brand of All Things Smart Link, "Starlight Kirin"',
          src: require("../../assets/images/pki-web_10.png"),
          show: false
        }
      ]
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped>
.slider /deep/ .el-carousel__container {
  height: 740px;
}

.slider /deep/ .el-carousel__arrow {
  width: 20px;
  height: 33px;
  background-color: transparent;
}

.slider /deep/ .el-icon-arrow-left:before,
.slider /deep/ .el-icon-arrow-right:before {
  content: "";
}

.slider /deep/ .el-carousel__arrow--left {
  left: 12%;
  background-image: url("../../assets/images/pki-web_04.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.slider /deep/ .el-carousel__arrow--right {
  right: 12%;
  background-image: url("../../assets/images/pki-web_06.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto 100%;
}

.slider-introduce {
  position: absolute;
  padding-top: 100px;
}

.slider-title {
  font-family: "Puhui";
  font-size: 70px;
  width: 400px;
  margin-top: 120px;
  margin-bottom: 50px;
  line-height: 80px;
}

.slider-text {
  width: 400px;
}

.slider-chinese {
  font-family: "Microsoft YaHei";
  font-size: 18px;
  margin-bottom: 8px;
}

.slider-english {
  font-weight: bolder;
  font-size: 11px;
  line-height: 16px;
}

.slider-btn {
  width: 145px;
  height: 40px;
  background-color: #FFFFFF;
  border: none;
  border-radius: 0;
  margin-top: 20px;
  color: #001040;
  font-size: 16px ;
}

.slider-btn:hover {
  transition: all 0.3s;
  background-color: #0073eb;
  color: #FFFFFF;
}
</style>
