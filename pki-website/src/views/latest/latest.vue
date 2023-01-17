<template>
  <div class="latest-news">
    <nav-menu></nav-menu>
    <div class="product-introduce">
      <div class="product-introduce-fonts white-color">
        <div class="product-introduce-title">最新动态</div>
        <div class="product-introduce-english">LATEST NEWS</div>
      </div>
      <img src="@/assets/images/pki-web_42.png" alt="">
    </div>
    <div class="product-tabs">
      <el-tabs ref="tabs" class="pad-b0" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="最新动态" name="新闻">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon news-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">新闻</span>
              <span class="tabs-english">News</span>
            </span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div ref="list">
                <div class="technical-introduction white-bg" ref="listItem" title="新闻" v-for="(item, index) in newsLatestList.slice((queryParams.pageNum - 1) * queryParams.pageSize, queryParams.pageNum * queryParams.pageSize)" :key="index" @click="toggleCrumbSweiger(index, item.title)">
                  <div class="technical-introduction-fonts">
                    <div class="technical-introduction-title f-left">{{ item.title }}</div>
                    <div class="technical-introduction-date">{{ item.date }}</div>
                  </div>
                  <div class="technical-introduction-text">{{ item.text }}</div>
                </div>
              </div>
              <div class="pagination">
                <el-pagination
                    class="page"
                    v-show="total > 0"
                    layout="prev, pager, next"
                    :total="total"
                    :current-page.sync="queryParams.pageNum"
                    :page-size="queryParams.pageSize"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="最新动态" name="公告发布信息">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon announcement-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">公告发布信息</span>
              <span class="tabs-english">Announcement release information</span>
            </span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div ref="list">
                <div class="technical-introduction white-bg" ref="listItem" title="新闻" v-for="(item, index) in newsLatestList.slice((queryParams.pageNum - 1) * queryParams.pageSize, queryParams.pageNum * queryParams.pageSize)" :key="index" @click="toggleCrumbSweiger(index, item.title)">
                  <div class="technical-introduction-fonts">
                    <div class="technical-introduction-title f-left">{{ item.title }}</div>
                    <div class="technical-introduction-date">{{ item.date }}</div>
                  </div>
                  <div class="technical-introduction-text">{{ item.text }}</div>
                </div>
              </div>
              <div class="pagination">
                <el-pagination
                    class="page"
                    v-show="total > 0"
                    layout="prev, pager, next"
                    :total="total"
                    :current-page.sync="queryParams.pageNum"
                    :page-size="queryParams.pageSize"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange">
                </el-pagination>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <footer-web></footer-web>
    <to-top></to-top>
  </div>
</template>

<script>
import navMenu from "@/components/nav/nav-menu";
import crumb from "@/components/crumb/crumb";
import footerWeb from "@/components/footer/footer";
import toTop from "@/components/to-top/to-top";

export default {
  name: "latest-page",
  components: {
    navMenu, // 横向导航栏 + LOGO
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    crumb, // 面包屑
  },
  data() {
    return {
      tabsMenusAggregate: [], // Tab切换卡集合
      tabsName: "最新动态", // 根据当前页面显示对应Tabs切换卡内容，初始值为首页
      activeName: '新闻', // 大Tab切换当前激活名称
      newsLatestList: [ // 新闻列表
        {
          title: "科技强检 国内首批｜麒麟软件助力贵州省人民检察院开启智慧检务新篇章1",
          date: "2022-12-21",
          num: 0,
          text: "目前，以自主软硬件为核心的信息技术自主创新正在从特定领域走向全行业。今年6月，麒麟软件支撑贵州省人民检察院核心业务迁移项目完成所有业务系统的测试并已顺利上线，在业务稳定性、服务效率、防控风险、信息安全保障等方面获得了明显提升，至今稳定运行。贵州省人民检察院因此成为国内首批核心业务系统全部采用自主软硬件产品的检察院，以自主创新实践开启了智慧检务的新篇章。"
        }, {
          title: "科技强检 国内首批｜麒麟软件助力贵州省人民检察院开启智慧检务新篇章2",
          date: "2022-12-21",
          num: 1,
          text: "目前，以自主软硬件为核心的信息技术自主创新正在从特定领域走向全行业。今年6月，麒麟软件支撑贵州省人民检察院核心业务迁移项目完成所有业务系统的测试并已顺利上线，在业务稳定性、服务效率、防控风险、信息安全保障等方面获得了明显提升，至今稳定运行。贵州省人民检察院因此成为国内首批核心业务系统全部采用自主软硬件产品的检察院，以自主创新实践开启了智慧检务的新篇章。"
        }, {
          title: "科技强检 国内首批｜麒麟软件助力贵州省人民检察院开启智慧检务新篇章3",
          date: "2022-12-21",
          num: 2,
          text: "目前，以自主软硬件为核心的信息技术自主创新正在从特定领域走向全行业。今年6月，麒麟软件支撑贵州省人民检察院核心业务迁移项目完成所有业务系统的测试并已顺利上线，在业务稳定性、服务效率、防控风险、信息安全保障等方面获得了明显提升，至今稳定运行。贵州省人民检察院因此成为国内首批核心业务系统全部采用自主软硬件产品的检察院，以自主创新实践开启了智慧检务的新篇章。"
        }, {
          title: "科技强检 国内首批｜麒麟软件助力贵州省人民检察院开启智慧检务新篇章4",
          date: "2022-12-21",
          num: 3,
          text: "目前，以自主软硬件为核心的信息技术自主创新正在从特定领域走向全行业。今年6月，麒麟软件支撑贵州省人民检察院核心业务迁移项目完成所有业务系统的测试并已顺利上线，在业务稳定性、服务效率、防控风险、信息安全保障等方面获得了明显提升，至今稳定运行。贵州省人民检察院因此成为国内首批核心业务系统全部采用自主软硬件产品的检察院，以自主创新实践开启了智慧检务的新篇章。"
        }, {
          title: "科技强检 国内首批｜麒麟软件助力贵州省人民检察院开启智慧检务新篇章5",
          date: "2022-12-21",
          num: 4,
          text: "目前，以自主软硬件为核心的信息技术自主创新正在从特定领域走向全行业。今年6月，麒麟软件支撑贵州省人民检察院核心业务迁移项目完成所有业务系统的测试并已顺利上线，在业务稳定性、服务效率、防控风险、信息安全保障等方面获得了明显提升，至今稳定运行。贵州省人民检察院因此成为国内首批核心业务系统全部采用自主软硬件产品的检察院，以自主创新实践开启了智慧检务的新篇章。"
        }, {
          title: "科技强检 国内首批｜麒麟软件助力贵州省人民检察院开启智慧检务新篇章6",
          date: "2022-12-21",
          num: 5,
          text: "目前，以自主软硬件为核心的信息技术自主创新正在从特定领域走向全行业。今年6月，麒麟软件支撑贵州省人民检察院核心业务迁移项目完成所有业务系统的测试并已顺利上线，在业务稳定性、服务效率、防控风险、信息安全保障等方面获得了明显提升，至今稳定运行。贵州省人民检察院因此成为国内首批核心业务系统全部采用自主软硬件产品的检察院，以自主创新实践开启了智慧检务的新篇章。"
        }
      ],
      total: 6, // 总条数
      queryParams: { // 查询参数
        pageNum: 1,
        pageSize: 4
      },
    }
  },
  computed: {
    set() {
      return [this.$store.state.crumbsActive, this.$store.state.tabsAggregate] // 从Vuex中获取动态切换的值
    }
  },
  watch: {
    set(newVal) { // 将从Vuex中获取到的值赋给参数
      this.activeName = newVal[0] // 获取所点击的Tab高亮名称
    }
  },
  created() {
    let _this = this
    _this.$nextTick(() => {
      let tabDoms = _this.$refs.tabs.panes
      for (let j = 0; j < tabDoms.length; j++) {
        _this.tabsMenusAggregate.push(
          {
            tab: _this.tabsName,
            tabItem: tabDoms[j]
          }
        )
      }
    })
    this.$store.dispatch("setTabsActiveValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/latest"]) // 将存储的值传给Vuex中存储
    this.$store.dispatch("setNewsCaseSwitchValue", false) // 页面初始化不显示面包屑第三级标题
    this.activeName = this.$store.state.crumbsActive
  },
  methods: {
    /* Tab切换卡点击事件 */
    handleClick(e) {
      let _this = this
      this.activeName = e.name // 将点击的标题赋给Tabs下的当前激活名称
      this.$store.commit("setTabsMenusAggregateValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/latest"]) // 将存储的值传给Vuex中存储
    },
    handleSizeChange(val) {
      this.queryParams.pageSize = val
    },
    handleCurrentChange(val) {
      this.queryParams.pageNum = val;
    },
    /* 点击跳转至详情页面 */
    toggleCrumbSweiger(num, name) {
      let _this = this
      _this.$router.replace({path: '/news'}) // 跳转至新闻详情
      _this.$store.dispatch("setNewsCaseDetailsValue", [num, name, _this.newsLatestList]) // 将存储的值传给Vuex中存储
      _this.$store.dispatch("setNewsCaseSwitchValue", true) // 将存储的值传给Vuex中存储
      let person = [num, name, _this.newsLatestList, true]
      sessionStorage.setItem("person", JSON.stringify(person))
    }
  }
}
</script>

<style scoped></style>
