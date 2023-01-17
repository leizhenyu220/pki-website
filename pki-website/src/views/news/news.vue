<template>
  <div class="news-details">
    <nav-menu></nav-menu>
    <div class="product-content grey-bg details-content">
      <div class="main details-main">
        <div class="crumbs">
          <crumb></crumb>
        </div>
        <div class="technical-introduction white-bg">
          <div class="technical-introduction-fonts">
            <div class="technical-introduction-title">{{ newsTitle }}</div>
            <div class="technical-introduction-text" v-if="newsId%2 == 0">
              数字政府建设风起云涌，“国产化”更是绕不开的话题。各地政府在数字化建设过程中，不仅需要数字技术推动政府数字化、智能化运行，也提出了底层硬件、软件平台和上层应用逐步国产化的需求，这要求软硬件厂商在建设过程中，不仅满足用户实际功能需求，还要逐步完成替换工作，构建全新的网信平台生态。数字政府建设风起云涌，“国产化”更是绕不开的话题。各地政府在数字化建设过程中，不仅需要数字技术推动政府数字化、智能化运行，也提出了底层硬件、软件平台和上层应用逐步国产化的需求，这要求软硬件厂商在建设过程中，不仅满足用户实际功能需求，还要逐步完成替换工作，构建全新的网信平台生态。数字政府建设风起云涌，“国产化”更是绕不开的话题。各地政府在数字化建设过程中，不仅需要数字技术推动政府数字化、智能化运行，也提出了底层硬件、软件平台和上层应用逐步国产化的需求，这要求软硬件厂商在建设过程中，不仅满足用户实际功能需求，还要逐步完成替换工作，构建全新的网信平台生态。数字政府建设风起云涌，“国产化”更是绕不开的话题。
            </div>
            <div class="technical-introduction-text" v-else>
              <p class="technical-introduction-text line-mar">《互联网信息服务深度合成管理规定》已于 2022 年 11 月 3 日国家互联网信息办公室 2022 年第 21 次室务会议审议通过，并经工业和信息化部、公安部同意后对外公布，将于 2023 年 1 月 10 日起施行。</p>
              <p class="technical-introduction-text line-mar">这是我国第一部针对深度合成服务治理的专门性部门规章，规范互联网信息服务深度合成管理，明确生成合成类算法治理的对象，确立算法治理的基本原则，鼓励相关行业组织加强行业自律，建立健全行业标准、行业准则和自律管理制度，强化深度合成服务提供者和技术支持者的主体责任，为安全可靠的深度合成技术发展指明了方向，为技术的服务应用提供指引和规范。</p>
              <p class="technical-introduction-text line-mar">深度合成技术是指利用深度学习、虚拟现实等生成合成类算法制作文本、图像、音频、视频、虚拟场景等网络信息的技术；而深度合成服务提供者、支持者是指提供深度合成服务的组织、个人以及为深度合成服务提供技术支持的组织、个人。</p>
              <p class="technical-introduction-text line-mar">新规要求深度合成服务提供者主体不得利用深度合成服务从事违法活动，还要建立健全用户管理制度，制定和公开管理规侧等，加强深度合成内容管理，建立健全辟谣机制和申诉、投诉、举报机制。</p>
              <p class="technical-introduction-text line-mar">此外，《规定》要求深度合成服务提供者落实信息安全主体责任，建立健全管理制度和技术保障措施，制定公开管理规则、平台公约，对使用者进行真实身份信息认证，明确应用程序分发平台应当落实安全管理责任，核验深度合成类应用程序相关情况。</p>
              <p class="technical-introduction-text line-mar">《规定》指出：提供智能对话、合成人声、人脸生成、沉浸式拟真场景等生成或者显著改变信息内容功能的服务的，应当进行显著标识，避免公众混淆或者误认。要求任何组织和个人不得采用技术手段删除、篡改、隐匿相关标识。</p>
            </div>
          </div>
        </div>
        <div class="around">
          <el-button class="around-item around-prev" :disabled="isPrev" :style="{ visibility: isPrev ? 'hidden' : 'unset' }" @click="newsAroundToggle">上一章</el-button>
          <el-button class="around-item around-next" :disabled="isNext" :style="{ visibility: isNext ? 'hidden' : 'unset' }" @click="newsAroundToggle">下一章</el-button>
        </div>
      </div>
    </div>
    <footer-web class="details-footer"></footer-web>
    <to-top></to-top>
  </div>
</template>

<script>
import navMenu from "@/components/nav/nav-menu";
import footerWeb from "@/components/footer/footer";
import toTop from "@/components/to-top/to-top";
import crumb from "@/components/crumb/crumb";

export default {
  name: "news-page",
  components: {
    navMenu, // 横向导航栏 + LOGO
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    crumb, // 面包屑
  },
  data() {
    return {
      newsTitle: "", // 动态新闻标题
      isPrev: false, // “上一篇”按钮禁用状态
      isNext: false, // “下一篇”按钮禁用状态
      newsActive: 0, // 当前显示文章
      newsId: 0, // 当前显示文章id
      newsList: [], // 获取新闻列表所有项
      extractList: [], // 读取保存在sessionStorage中的值
    }
  },
  computed: {
    set() {
      return [
        this.$store.state.listIndex,
        this.$store.state.crumbsSwitch,
        this.$store.state.listActiveName,
        this.$store.state.tabsAggregate,
        this.$store.state.crumbsActive,
        this.$store.state.list
      ]
    },
  },
  watch: {
    set(newVal) {
      this.newsId = newVal[0]
      this.newsTitle = newVal[2]
      this.newsList = newVal[5]
    },
  },
  created() {
    let _this = this
    let list = _this.$store.state.list
    _this.extractList = JSON.parse(sessionStorage.getItem("person"))
    if (_this.$store.state.list == undefined || _this.$store.state.list == [] || _this.$store.state.list.length == 0) {
      _this.newsTitle = _this.extractList[2][_this.extractList[0]].title
      _this.newsId = _this.extractList[0]
      if (_this.newsId == 0) {
        _this.isPrev = true
      } else if (_this.newsId == _this.extractList[2].length - 1) {
        _this.isNext = true
        _this.newsId = _this.extractList[2].length - 1
      }
    } else {
      _this.newsTitle = _this.$store.state.list[_this.$store.state.listIndex].title
      _this.newsId = _this.$store.state.listIndex
      if (_this.newsId == 0) {
        _this.isPrev = true
      } else if (_this.newsId == list.length - 1) {
      _this.isNext = true
        _this.newsId = list.length - 1
      }
    }
  },
  mounted() {},
  methods: {
    /* 文章切换事件 */
    newsAroundToggle(e) {
      let _this = this
      if (e.target.innerText == "上一章") {
        //上一篇
        _this.newsId--
        if(_this.newsId === 0){
          _this.isPrev = true
          _this.newsTitle = _this.extractList[2][0].title
        } else {
          _this.newsTitle = _this.extractList[2][_this.newsId].title
        }
        _this.isNext = false
      } else if (e.target.innerText == "下一章") {
        _this.newsId++
        if(_this.newsId === _this.extractList[2].length - 1){
          _this.$message.warning('已经是最后一条数据啦')
          _this.newsTitle = _this.extractList[2][_this.extractList[2].length - 1].title
          _this.isNext = true
        } else {
          _this.newsTitle = _this.extractList[2][_this.newsId].title
        }
        _this.isPrev = false
      }
      _this.$store.dispatch("setNewsCaseDetailsValue", [_this.newsId, _this.extractList[2][_this.newsId].title, _this.extractList[2]]) // 将存储的值传给Vuex中存储
    },
  }
}
</script>

<style scoped>
.around {
  margin-top: 40px;
  margin-right: 40px;
  float: right;
}

.around-item {
  display: inline-block;
  padding: 0 20px;
  float: left;
  font-size: 14px;
  color: #666666;
  transition: all 0.3s;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.around-item:hover {
  color: #0073eb;
}

.el-button.is-disabled,
.el-button.is-disabled:focus,
.el-button.is-disabled:hover {
  background: transparent;
}
</style>
