<template>
  <div class="case-details">
    <nav-menu></nav-menu>
    <div class="product-content grey-bg">
      <div class="main">
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
              物联网是新一代信息技术的重要组成部分，IT行业又叫：泛互联，意指物物相连，万物万联。由此，“物联网就是物物相连的互联网”。这有两层意思：第一，物联网的核心和基础仍然是互联网，是在互联网基础上的延伸和扩展的网络；第二，其用户端延伸和扩展到了任何物品与物品之间，进行信息交换和通信。因此，物联网的定义是通过射频识别、红外感应器、全球定位系统、激光扫描器等信息传感设备，按约定的协议，把任何物品与互联网相连接，进行信息交换和通信，以实现对物品的智能化识别、定位、跟踪、监控和管理的一种网络
            </div>
          </div>
          <div class="case-details-photos">
            <img src="@/assets/images/pki-web_48.png" alt="">
            <img src="@/assets/images/pki-web_49.png" alt="">
          </div>
        </div>
        <div class="around">
          <el-button class="around-item around-prev" :disabled="isPrev" :style="{ visibility: isPrev ? 'hidden' : 'unset' }" @click="newsAroundToggle">上一章</el-button>
          <el-button class="around-item around-next" :disabled="isNext" :style="{ visibility: isNext ? 'hidden' : 'unset' }" @click="newsAroundToggle">下一章</el-button>
        </div>
      </div>
    </div>
    <footer-web></footer-web>
    <to-top></to-top>
  </div>
</template>

<script>
import navMenu from "@/components/nav/nav-menu";
import footerWeb from "@/components/footer/footer";
import toTop from "@/components/to-top/to-top";
import crumb from "@/components/crumb/crumb";

export default {
  name: "case-page",
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
  activated() {},
  created() {
    let _this = this
    let list = _this.$store.state.list
    _this.extractList = JSON.parse(sessionStorage.getItem("person"))
    if (_this.$store.state.list == undefined || _this.$store.state.list == [] || _this.$store.state.list.length == 0) {
      if (_this.extractList != null) {
        _this.newsTitle = _this.extractList[2][_this.extractList[0]].title
        _this.newsId = _this.extractList[0]
        if (_this.newsId == 0) {
          _this.isPrev = true
        } else if (_this.newsId == _this.extractList[2].length - 1) {
          _this.isNext = true
          _this.newsId = _this.extractList[2].length - 1
        }
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
.case-details-photos {
  margin-top: 30px;
  display: flex;
}

.case-details-photos img {
  flex: 1;
}

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
