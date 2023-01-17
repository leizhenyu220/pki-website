<template>
  <div class="crumb">
    <i class="el-icon-s-home" style="float: left;"></i>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: superiorPageJump }">{{ superiorPage }}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ twoLevelPage }}</el-breadcrumb-item>
      <el-breadcrumb-item v-if="threeSwitch == true">{{ threeLevelPage }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "crumb-zj",
  data() {
    return {
      superiorPage: "", // 面包屑-一级菜单
      twoLevelPage: "", // 面包屑-二级页面
      threeLevelPage: "", // 面包屑-三级页面
      superiorPageJump: "", // 面包屑-一级菜单跳转链接
      twoLevelPageJump: "", // 面包屑-二级页面跳转链接
      threeSwitch: false, // 面包屑-三级显示开关
      detailsList: [], // 列表页所有新闻或者案例
      crumbAggregate: [],
      clickIndexs: Number,
      newsNames: Number, // 新闻详情标题
      extractList: [], // 接收sessionStorage中存储的值
    }
  },
  computed: {
    set() {
      return [
        this.$store.state.tabsAggregate, // 所有Tabs下边的子级集合
        this.$store.state.crumbsActive, // 面包屑二级高亮下标
        this.$store.state.crumbsSwitch, // 第三级面包屑显示开关
        this.$store.state.listIndex, // 点击新闻列表或案例列表的下标
        this.$store.state.list, // 新闻列表或案例列表
        this.$store.state.listActiveName, // 点击新闻列表或案例列表的标题
        this.$store.state.crumbsOneActive, // 面包屑一级高亮下标
        this.$store.state.crumbsOneActiveJump, // 面包屑一级跳转链接
        console.log(this.$store.state.crumbsOneActiveJump)
      ] // 从Vuex中获取动态切换的值
    }
  },
  watch: {
    set(newVal) { // 将从Vuex中获取到的值赋给参数
      let _this = this
      _this.crumbAggregate = newVal[0] // 获取所点击的二级导航名称
      _this.superiorPage = newVal[6]// 获取所点击的一级导航名称
      _this.twoLevelPage = newVal[1] // 获取所点击的二级导航名称
      _this.threeSwitch = newVal[2] // 第三级面包屑显示开关
      _this.clickIndexs = newVal[3] // 点击新闻列表或案例列表的下标
      _this.detailsList = newVal[4] // 新闻列表或案例列表
      _this.newsNames = newVal[4] // 新闻列表或案例列表
      _this.superiorPageJump = newVal[7] // 面包屑一级跳转链接
      if (_this.threeSwitch == true) {
        _this.threeLevelPage = newVal[4][_this.$store.state.listIndex].title
      }
    },
  },
  created() {
    let _this = this
    _this.extractList = JSON.parse(sessionStorage.getItem("person"))
    if (_this.$store.state.list == undefined || _this.$store.state.list == [] || _this.$store.state.list.length == 0) {
      _this.$nextTick(() => {
        //_this.crumbAggregate = _this.$store.state.tabsAggregate
        _this.superiorPageJump = _this.$store.state.crumbsOneActiveJump // 面包屑一级跳转链接
        if (_this.extractList != null) {
          _this.clickIndexs = _this.extractList[0]
        }
      })
    } else {
      _this.detailsList = _this.$store.state.list
      _this.$nextTick(() => {
        //_this.superiorPageJump = _this.$store.state.crumbsOneActiveJump // 面包屑一级跳转链接
        _this.crumbAggregate = _this.$store.state.tabsAggregate
        _this.clickIndexs = _this.$store.state.listIndex
      })
    }
  },
  mounted() {
    let _this = this
    _this.$nextTick(() => { // DOM元素渲染完毕之后执行该JS代码(异步处理)，防止控制台报错
      if (_this.$store.state.list == undefined || _this.$store.state.list == [] || _this.$store.state.list.length == 0) {
        if (_this.extractList != null) {
          //_this.threeSwitch = _this.extractList[3]
          _this.threeSwitch = _this.$store.state.crumbsSwitch
        }
        _this.superiorPage = _this.$store.state.crumbsOneActive // 获取所点击的一级导航名称
        _this.twoLevelPage = _this.$store.state.crumbsActive // 获取所点击的二级导航名称
        if (_this.threeSwitch == true) {
          _this.threeLevelPage = _this.extractList[2][_this.extractList[0]].title
        }
      } else {
        _this.threeSwitch = _this.$store.state.crumbsSwitch
        _this.superiorPage = _this.$store.state.crumbsOneActive //_this.crumbAggregate[0].tab // 获取所点击的一级导航名称
        _this.twoLevelPage = _this.$store.state.crumbsActive // 获取所点击的二级导航名称
        if (_this.threeSwitch == true) {
          _this.threeLevelPage = _this.$store.state.list[_this.$store.state.listIndex].title
        }
      }
    })
  },
  methods: {},
}
</script>

<style scoped>
/* 面包屑 外层div */
.crumb {
  margin-bottom: 40px;
}

/* 面包屑 最左侧图标 */
.el-icon-s-home {
  color: #575b66;
  margin-right: 10px;
  font-size: 20px;
}

/* 面包屑 所有文字、图标颜色、大小 */
.el-breadcrumb {
  color: #666666;
  font-size: 16px;
}

/* 面包屑 去掉首页、一级菜单文字粗体 */
.crumb /deep/ .el-breadcrumb__inner a,
.crumb /deep/ .el-breadcrumb__inner.is-link {
  font-weight: normal;
}

/* 面包屑 当前页文字样式 */
.crumb /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner,
.crumb /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.crumb /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.crumb /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  color: #0073eb;
  font-weight: bolder;
}

.crumb /deep/ .el-breadcrumb__inner a:hover,
.crumb /deep/ .el-breadcrumb__inner.is-link:hover {
  color: #0073eb;
}
</style>
