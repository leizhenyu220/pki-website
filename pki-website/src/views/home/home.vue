<template>
  <div class="home">
    <nav-menu class="nav"></nav-menu>
    <slider-carousel></slider-carousel>
    <div class="home-tabs product-tabs">
      <el-tabs ref="tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="$t('home.tabs.tabItemA.title')" name="签名服务平台">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon autograph-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">{{ $t('home.tabs.tabItemA.title') }}</span>
              <span class="tabs-english">{{ $t('home.tabs.tabItemA.english') }}</span>
            </span>
          </span>
          <div class="technical-support grey-bg">
            <div class="main">
              <div class="tachnical-support-fonts">
                <div class="tachnical-support-title">{{ $t('home.tabs.tabItemA.tabItemContentA.contentTitle') }}</div>
                <div class="tachnical-support-text">{{ $t('home.tabs.tabItemA.tabItemContentA.contentText') }}</div>
              </div>
              <div class="tachnical-support-jumps">
                <router-link :to="{path: ''}" class="tachnical-support-jump" v-for="(item, index) in jumpPages"
                             :key="index">
                  <div>
                    <div class="tachnical-support-photo">
                      <img :src="item.src" :class="item.iconUrl">
                    </div>
                    <div class="tachnical-support-jump-fonts">
                      <div class="tachnical-support-jump-title">{{ $t(item.title) }}</div>
                      <div class="tachnical-support-jump-english">{{ $t(item.english) }}</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="main technical-support">
            <div class="tachnical-support-fonts">
              <div class="tachnical-support-title">最新动态</div>
              <div class="tachnical-support-text">麒麟软件与行业的最新动态、最新进展</div>
            </div>
            <div class="news-content">
              <div class="news-photo_text f-left">
                <img src="@/assets/images/pki-web_52.png" alt="">
                <div class="news-fonts white-color">
                  <div class="news-time-title f-left">
                    <div class="time-date">2022-12-28</div>
                    <router-link :to="{path: ''}" class="news-title">边界无限入选行业首份ADR报告 比肩国际成唯一获推荐国内厂商</router-link>
                  </div>
                  <div class="news-jump-icon">
                    <img src="@/assets/images/pki-web_60.png" alt="">
                  </div>
                </div>
              </div>
              <div class="news-list">
                <div class="news-item" v-for="(item, index) in newsList" :key="index">
                  <div class="news-time-title f-left">
                    <div class="time-date">{{ item.timeDate }}</div>
                    <router-link :to="{path: ''}" class="news-title">{{ item.title }}</router-link>
                  </div>
                  <div class="news-jump-icon">
                    <img src="@/assets/images/pki-web_55.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="technical-support grey-bg">
            <div class="main">
              <div class="tachnical-support-fonts">
                <div class="tachnical-support-title">关于我们</div>
                <div class="tachnical-support-text">
                  麒麟软件提供多种技术服务渠道，包括400电话热线、微信公众号、服务与支持专用邮箱等，为客户提供7X24小时的不间断响应，第一时间提供优质服务
                </div>
              </div>
              <div class="about-nums">
                <div class="about-num-item" v-for="(item, index) in aboutNums" :key="index">
                  <div class="about-num">
                    <NumberGrow :value="item.num"></NumberGrow>
                    <div class="company">{{ item.company }}</div>
                  </div>
                  <div class="about-num-text">{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="main technical-support">
            <div class="tachnical-support-fonts">
              <div class="tachnical-support-title">客户案例</div>
              <div class="tachnical-support-text">企业坚持开放合作打造产业生态，为客户提供完整的国产化解决方案</div>
            </div>
            <div class="case-content">
              <case-slider></case-slider>
            </div>
          </div>
          <div class="technical-support contact-bg">
            <div class="main">
              <div class="tachnical-support-fonts">
                <div class="tachnical-support-title">联系我们</div>
                <div class="tachnical-support-text">如您有业务合作需求,请点击按钮写下您的需求,我们将在第一时间联系到您.</div>
              </div>
              <el-button type="primary" class="contact-btn">合作咨询</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('home.tabs.tabItemB.title')" name="安全启动认证证书">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon authentication-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">{{ $t('home.tabs.tabItemB.title') }}</span>
              <span class="tabs-english">{{ $t('home.tabs.tabItemB.english') }}</span>
            </span>
          </span>
          <div class="technical-support grey-bg">
            <div class="main">
              <div class="tachnical-support-fonts">
                <div class="tachnical-support-title">安全启动认证证书</div>
                <div class="tachnical-support-text">
                  麒麟软件提供多种技术服务渠道，包括400电话热线、微信公众号、服务与支持专用邮箱等，为客户提供7X24小时的不间断响应，第一时间提供优质服务
                </div>
              </div>
              <div class="tachnical-support-jumps">
                <router-link :to="{path: '/'}" class="tachnical-support-jump" v-for="(item, index) in jumpPages"
                             :key="index">
                  <div>
                    <div class="tachnical-support-photo">
                      <img :src="item.src" :class="item.iconUrl">
                    </div>
                    <div class="tachnical-support-jump-fonts">
                      <div class="tachnical-support-jump-title">{{ item.title }}</div>
                      <div class="tachnical-support-jump-english">{{ item.english }}</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane :label="$t('home.tabs.tabItemC.title')" name="SHIM/EFI驱动程序文件签名">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon drive-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">{{ $t('home.tabs.tabItemC.title') }}</span>
              <span class="tabs-english">{{ $t('home.tabs.tabItemC.english') }}</span>
            </span>
          </span>
          <div class="technical-support grey-bg">
            <div class="main">
              <div class="tachnical-support-fonts">
                <div class="tachnical-support-title">SHIM/EFI驱动程序文件签名</div>
                <div class="tachnical-support-text">
                  麒麟软件提供多种技术服务渠道，包括400电话热线、微信公众号、服务与支持专用邮箱等，为客户提供7X24小时的不间断响应，第一时间提供优质服务
                </div>
              </div>
              <div class="tachnical-support-jumps">
                <router-link :to="{path: '/'}" class="tachnical-support-jump" v-for="(item, index) in jumpPages"
                             :key="index">
                  <div>
                    <div class="tachnical-support-photo">
                      <img :src="item.src" :class="item.iconUrl">
                    </div>
                    <div class="tachnical-support-jump-fonts">
                      <div class="tachnical-support-jump-title">{{ item.title }}</div>
                      <div class="tachnical-support-jump-english">{{ item.english }}</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <footerWeb></footerWeb>
    <to-top></to-top>
  </div>
</template>

<script>
import navMenu from "@/components/nav/nav-menu";
import sliderCarousel from "@/components/slider/slider";
import caseSlider from "@/components/case/case"
import footerWeb from "@/components/footer/footer";
import toTop from "@/components/to-top/to-top";
import NumberGrow from "@/components/number-grow/number-grow"

export default {
  name: "home-index",
  components: { // 组件集合定义声明
    navMenu, // 横向导航栏 + LOGO
    sliderCarousel, // 顶部大轮播图
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    NumberGrow, // 首页-关于我们 数字滚动
    caseSlider, // 首页-案例
  },
  data() {
    return {
      activeName: '签名服务平台', // 大Tab切换当前激活名称
      /* 首页-数据集 -- 开始 */
      jumpPages: [ // 首页-服务与支持 跳转版块集合
        {
          src: require("../../assets/images/pki-web_02.png"),
          iconUrl: "kek-icon",
          title: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemA.title",
          english: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemA.english"
        }, {
          src: require("../../assets/images/pki-web_03.png"),
          iconUrl: "db-icon",
          title: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemB.title",
          english: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemB.english"
        }, {
          src: require("../../assets/images/pki-web_05.png"),
          iconUrl: "dbt-icon",
          title: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemC.title",
          english: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemC.english"
        }, {
          src: require("../../assets/images/pki-web_07.png"),
          iconUrl: "dbx-icon",
          title: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemD.title",
          english: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemD.english"
        }, {
          src: require("../../assets/images/pki-web_08.png"),
          iconUrl: "efi-icon",
          title: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemE.title",
          english: "home.tabs.tabItemA.tabItemContentA.jumps.jumpItemE.english"
        }
      ],
      newsList: [ // 首页-最新动态 新闻列表集合
        {
          timeDate: "2022-12-28",
          title: "边界无限入选行业首份ADR报告 比肩国际成唯一获推荐国内厂商"
        }, {
          timeDate: "2022-12-29",
          title: "边界无限入选行业首份ADR报告 比肩国际成唯一获推荐国内厂商"
        }
      ],
      aboutNums: [ // 首页-关于我们 数量集合
        {
          num: 40,
          company: "W+",
          text: "开发者正在使用"
        }, {
          num: 1000,
          company: "亿",
          text: "日均相应字符量"
        }, {
          num: 24,
          company: "小时",
          text: "快速服务集成"
        }
      ],
    }
  },
  created() {},
  computed: {},
  watch: {},
  mounted() {
    this.sign = this.$route.query.sign
    this.signName = this.$route.query.user
  },
  methods: {
    /* Tab切换卡点击事件 */
    handleClick() {},
  }
}
</script>

<style scoped>
/* 首页-导航栏 开始 */
/* 首页状态下，顶部导航栏背景色透明 */
.nav {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
/* 首页-导航栏 结束 */
</style>
