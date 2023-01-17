<template>
  <div class="head-content">
    <div class="website-logo f-left">
      <img src="@/assets/images/pki-web_09.png" alt="">
    </div>
    <div class="main">
      <div class="menu-transverse" v-show="searchSwitch == false">
        <el-menu :default-active="activeMenu" :router="true" class="el-menu-demo" mode="horizontal"
                 @select="handleSelect">
          <el-menu-item index="/home">{{ $t("home.navbar.nav.home") }}</el-menu-item>
          <el-menu-item index="/product">{{ $t("home.navbar.nav.product") }}</el-menu-item>
          <el-submenu index="3">
            <template slot="title">{{ $t("home.navbar.nav.technical") }}</template>
            <el-menu-item v-for="(item, index) in menuItemTechnical" :key="index" :index="item.index" @click="menuServiceAboutItem(item, index)">{{ $t(item.title) }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="/latest">{{ $t("home.navbar.nav.latest") }}</el-menu-item>
          <el-submenu index="5">
            <template slot="title">{{ $t("home.navbar.nav.about") }}</template>
            <el-menu-item v-for="(item, index) in menuItemAbout" :key="index" :index="item.index" @click="menuServiceAboutItem(item, index)">{{ $t(item.title) }}
            </el-menu-item>
          </el-submenu>
          <router-view></router-view>
        </el-menu>
      </div>
    </div>
    <div class="sign white-color">
      <div class="sign-icon">
        <i class="el-icon-search" v-show="searchSwitch == false" @click="showSearchInput"></i>
      </div>
      <div class="sign-register" v-if="loginSign == true">
        <router-link :to="{path: '/personal'}" class="sign-jump f-left white-color">{{ signName }}</router-link>
        <i class="sign-line f-left">|</i>
        <div class="sign-jump f-left white-color" @click="outSign">{{ $t("home.navbar.signRegister.out") }}</div>
      </div>
      <div class="sign-register" v-else>
        <router-link :to="{path: '/', query: { num: undefined}}" class="sign-jump f-left white-color">{{ $t("home.navbar.signRegister.sign") }}</router-link>
        <i class="sign-line f-left">|</i>
        <router-link :to="{path: '/', query: { num: null}}" class="sign-jump f-left white-color">{{ $t("home.navbar.signRegister.register") }}</router-link>
      </div>
    </div>
    <el-input class="search-input" v-model="search" :placeholder="$t('home.navbar.signRegister.search')" prefix-icon="el-icon-search" v-show="searchSwitch == true" @change="hideSearchInput"></el-input>
  </div>
</template>

<script>
export default {
  name: "nav-menu",
  data() {
    return {
      tabsMenus: [], // 当前页面中的Tabs中的高亮
      tabsThisItemName: "",
      search: '', // 搜索Input初始值
      searchSwitch: false, // 控制搜索输入框/导航栏和搜索图标的切换显示开关
      loginSign: false, // 判断用户是否登录开关
      signName: "", // 已登录的用户名名称
      menuItemTechnical: [ // 导航栏：技术支持-二级导航
        {
          id: 0,
          index: "/technical",
          title: "home.navbar.nav.technicalItem.kek",
          zhTitle: "下载KEK CA证书",
          parent: "服务与支持"
        }, {
          id: 1,
          index: "/technical",
          title: "home.navbar.nav.technicalItem.db",
          zhTitle: "下载DB CA证书",
          parent: "服务与支持"
        }, {
          id: 2,
          index: "/technical",
          title: "home.navbar.nav.technicalItem.dbt",
          zhTitle: "下载DBT CA证书",
          parent: "服务与支持"
        }, {
          id: 3,
          index: "/technical",
          title: "home.navbar.nav.technicalItem.dbx",
          zhTitle: "下载DBX文件",
          parent: "服务与支持"
        }, {
          id: 4,
          index: "/technical",
          title: "home.navbar.nav.technicalItem.efi",
          zhTitle: "申请SHIM/EFI驱动程序文件签名",
          parent: "服务与支持"
        }
      ],
      menuItemAbout: [ // 导航栏：关于我们-二级导航
        {
          id: 0,
          index: "/about",
          title: "home.navbar.nav.aboutItem.about",
          zhTitle: "关于XX",
          parent: "关于我们"
        }, {
          id: 1,
          index: "/about",
          title: "home.navbar.nav.aboutItem.qualificationsAndHonors",
          zhTitle: "资质与荣誉",
          parent: "关于我们"
        }, {
          id: 2,
          index: "/about",
          title: "home.navbar.nav.aboutItem.customerStories",
          zhTitle: "客户案例",
          parent: "关于我们"
        }, {
          id: 3,
          index: "/about",
          title: "home.navbar.nav.aboutItem.contactUs",
          zhTitle: "联系我们",
          parent: "关于我们"
        }
      ]
    };
  },
  computed: {
    /* 导航栏切换高亮 */
    activeMenu() {
      //let _this = this
      const route = this.$route // 获取当前路由配置
      const {meta, path} = route // 格式化当前路由中的Path和路由名称
      // 可以在路由配置文件中设置自定义的路由路径到meta.activeMenu属性中，来控制菜单自定义高亮显示
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    set() {
      return [
          this.$store.state.tabsAggregate, // 获取Vuex中的控制二级导航当前点击的高亮名称
          this.$store.state.loginSign, // 获取Vuex中的已登录控制开关
          this.$store.state.loginSignName // 获取Vuex中的已登录用户名名称
      ]
    },
  },
  watch: {
    set(newVal) {
      this.tabsMenus = newVal[0] // 将存储在Vuex中的控制二级导航当前点击的高亮名称
      this.loginSign = newVal[1] // 判断用户是否登录开关
      this.signName = newVal[2]// 已登录的用户名名称
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.tabsMenus = this.$store.state.tabsAggregate
      this.loginSign = this.$store.state.loginSign // 判断用户是否登录开关
      this.signName = this.$store.state.loginSignName // 已登录的用户名名称
    })
  },
  methods: {
    /* “服务与支持”、“关于我们”二级导航点击事件 */
    menuServiceAboutItem(obj) {
      let _this = this
      _this.tabsThisItemName = obj.zhTitle // 获取当前点击的二级导航名称
      setTimeout(function (){
        _this.$store.dispatch("setTabsActiveValue", [_this.tabsMenus, _this.tabsThisItemName, obj.parent, obj.index]) // 将存储的值传给Vuex中存储
      }, 1)
    },
    /* 导航栏点击事件 */
    handleSelect() {
      this.$store.dispatch("setNewsCaseSwitchValue", false) // 页面初始化不显示面包屑第三级标题
    },
    /* 点击显示搜索Input输入框，隐藏导航栏和搜索图标 */
    showSearchInput() {
      let _this = this
      _this.searchSwitch = true
    },
    /* 点击隐藏搜索Input输入框，显示导航栏和搜索图标 */
    hideSearchInput() {
      let _this = this
      _this.searchSwitch = false
    },
    /* 点击“退出”按钮退出登录 */
    outSign() {
      this.loginSign = false
    },
  }
}
</script>

<style scoped>
/* 头部区域外层div */
.head-content {
  width: 100%;
  height: 90px;
  background-color: #0073eb;
  border-bottom: 1px solid #5372eb;
  position: relative;
}
/* 网站LOGO */
.website-logo {
  height: 100%;
  background-color: #0073eb;
  padding: 24px 30px;
  box-sizing: border-box;
}
/* 导航栏 */
.menu-transverse {
  float: right;
  height: 100%;
  margin-right: 60px;
}
/* 去掉Element-ui组件导航栏默认背景色 */
.menu-transverse /deep/ .el-menu {
  background: transparent;
}
/* 调整导航栏高度、行高、文字颜色和文字大小 */
.menu-transverse /deep/ .el-menu--horizontal > .el-menu-item,
.menu-transverse /deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 90px;
  line-height: 90px;
  font-size: 18px;
  color: #FFFFFF;
}
/* 去掉Element-ui组件导航栏默认边框 */
.menu-transverse /deep/ .el-menu.el-menu--horizontal {
  border: none;
}
/* 去掉Element-ui组件导航栏图标 */
.menu-transverse /deep/ .el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none;
}
/* 导航栏当前高亮样式 */
.menu-transverse /deep/ .el-menu--horizontal > .el-menu-item.is-active,
.menu-transverse /deep/ .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: none;
  background-color: #FFFFFF;
  color: #0073eb;
  font-weight: bolder;
}
/* 二级导航高度、行高 */
.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  height: 50px;
  line-height: 50px;
}
/* 一级导航鼠标悬停样式 */
.menu-transverse /deep/ .el-menu-item:hover,
.menu-transverse /deep/ .el-submenu:hover .el-submenu__title,
.el-menu--popup-bottom-start .el-menu-item:hover {
  color: #0073eb;
  background-color: #FFFFFF;
  font-weight: bolder;
}
/* 二级导航鼠标悬停样式 */
.menu-transverse /deep/ .el-menu--popup-bottom-start .el-menu-item:hover,
.menu-transverse /deep/ .el-menu--popup-bottom-start .el-submenu:hover .el-submenu__title,
.el-menu--popup-bottom-start .el-menu-item:hover {
  color: #FFFFFF;
  background-color: #0073eb;
  font-weight: normal;
}
/* 登录、注册区域div */
.sign {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  padding: 32px 50px 0 0;
}
/* 登录区搜索图标 */
.sign-icon {
  font-size: 20px;
  float: left;
  margin-right: 5px;
  cursor: pointer;
}
/* 登录区搜索Input组件 */
.search-input {
  position: absolute;
  top: 25px;
  width: 50%;
  max-width: 900px;
  left: 50%;
  transform: translateX(-50%);
}
/* 登录区搜索Input组件样式 */
.search-input /deep/ .el-input__inner {
  background-color: #0073eb;
  border-radius: 30px;
  color: #FFFFFF;
}
/* 登录区搜索Input组件和图标文字大小 */
.search-input /deep/ .el-input__inner,
.search-input /deep/ .el-icon-search {
  font-size: 16px;
}
/* 登录区搜索Input组件placeholder文字颜色和图标颜色 */
.search-input /deep/ .el-icon-search,
.search-input /deep/ .el-input__inner::placeholder {
  color: #FFFFFF;
}
/* 登录、注册文字样式 */
.sign-jump {
  display: block;
  line-height: 22px;
  padding: 0 10px;
  text-decoration: none;
  transition: all 0.3s;
  max-width: 90px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
/* 登录、注册文字鼠标悬停样式 */
.sign-jump:hover {
  color: #333333;
}
/* 登录与注册中间竖线行高 */
.sign-line {
  line-height: 22px;
}
.sign-register {
  display: flex;
}
</style>
