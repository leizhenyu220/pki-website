<template>
  <div class="product">
    <nav-menu></nav-menu>
    <div class="product-introduce">
      <div class="product-introduce-fonts white-color">
        <div class="product-introduce-title">服务与支持</div>
        <div class="product-introduce-english">SERVICE AND SUPPORT</div>
      </div>
      <img src="@/assets/images/pki-web_27.png" alt="">
    </div>
    <div class="product-tabs">
      <el-tabs ref="tabs" class="techinical-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="服务与支持" name="下载KEK CA证书">
          <span slot="label" class="tabs-text">
            <span class="tabs-title">下载KEK CA证书</span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">KEK CA证书</div>
                  <div class="technical-introduction-text">WoTrus
                    数字证书支持所有流行的浏览器和服务器软件，其顶级根证书已经预置在各种操作系统中，您无需下载和安装任何根证书，但如果您所使用的系统中没有 WoTrus 根证书，则您可以免费下载相关的根证书。
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载路径</div>
                  <div class="technical-introduction-route">
                    <a class="technical-introduction-route-item" v-for="(item, index) in routeList" :key="index"
                       :href="item.downloadUrl">{{ item.title }}</a>
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载说明</div>
                  <div class="technical-introduction-table">
                    <el-table
                        :data="tableData"
                        stripe
                        :show-header="false"
                        style="width: 100%">
                      <el-table-column
                          prop="name"
                          label=""
                          width="100">
                      </el-table-column>
                      <el-table-column
                          prop="introduction"
                          label="">
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服务与支持" name="下载DB CA证书">
          <span slot="label" class="tabs-text">
            <span class="tabs-title">下载DB CA证书</span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">DB CA证书</div>
                  <div class="technical-introduction-text">WoTrus
                    数字证书支持所有流行的浏览器和服务器软件，其顶级根证书已经预置在各种操作系统中，您无需下载和安装任何根证书，但如果您所使用的系统中没有 WoTrus 根证书，则您可以免费下载相关的根证书。
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载路径</div>
                  <div class="technical-introduction-route">
                    <a class="technical-introduction-route-item" v-for="(item, index) in routeList" :key="index"
                       :href="item.downloadUrl">{{ item.title }}</a>
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载说明</div>
                  <div class="technical-introduction-table">
                    <el-table
                        :data="tableData"
                        stripe
                        :show-header="false"
                        style="width: 100%">
                      <el-table-column
                          prop="name"
                          label=""
                          width="100">
                      </el-table-column>
                      <el-table-column
                          prop="introduction"
                          label="">
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服务与支持" name="下载DBT CA证书">
          <span slot="label" class="tabs-text">
            <span class="tabs-title">下载DBT CA证书</span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">DBT CA证书</div>
                  <div class="technical-introduction-text">WoTrus
                    数字证书支持所有流行的浏览器和服务器软件，其顶级根证书已经预置在各种操作系统中，您无需下载和安装任何根证书，但如果您所使用的系统中没有 WoTrus 根证书，则您可以免费下载相关的根证书。
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载路径</div>
                  <div class="technical-introduction-route">
                    <a class="technical-introduction-route-item" v-for="(item, index) in routeList" :key="index"
                       :href="item.downloadUrl">{{ item.title }}</a>
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载说明</div>
                  <div class="technical-introduction-table">
                    <el-table
                        :data="tableData"
                        stripe
                        :show-header="false"
                        style="width: 100%">
                      <el-table-column
                          prop="name"
                          label=""
                          width="100">
                      </el-table-column>
                      <el-table-column
                          prop="introduction"
                          label="">
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服务与支持" name="下载DBX文件">
          <span slot="label" class="tabs-text">
            <span class="tabs-title">下载DBX文件</span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">DBX文件</div>
                  <div class="technical-introduction-text">WoTrus
                    数字证书支持所有流行的浏览器和服务器软件，其顶级根证书已经预置在各种操作系统中，您无需下载和安装任何根证书，但如果您所使用的系统中没有 WoTrus 根证书，则您可以免费下载相关的根证书。
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载路径</div>
                  <div class="technical-introduction-route">
                    <a class="technical-introduction-route-item" v-for="(item, index) in routeList" :key="index"
                       :href="item.downloadUrl">{{ item.title }}</a>
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载说明</div>
                  <div class="technical-introduction-table">
                    <el-table
                        :data="tableData"
                        stripe
                        :show-header="false"
                        style="width: 100%">
                      <el-table-column
                          prop="name"
                          label=""
                          width="100">
                      </el-table-column>
                      <el-table-column
                          prop="introduction"
                          label="">
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="服务与支持" name="申请SHIM/EFI驱动程序文件签名">
          <span slot="label" class="tabs-text">
            <span class="tabs-title">申请SHIM/EFI驱动程序文件签名</span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">申请SHIM/EFI驱动程序文件签名</div>
                  <div class="technical-introduction-text">WoTrus
                    数字证书支持所有流行的浏览器和服务器软件，其顶级根证书已经预置在各种操作系统中，您无需下载和安装任何根证书，但如果您所使用的系统中没有 WoTrus 根证书，则您可以免费下载相关的根证书。
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载路径</div>
                  <div class="technical-introduction-route">
                    <a class="technical-introduction-route-item" v-for="(item, index) in routeAboutList" :key="index"
                       :href="item.downloadUrl">{{ item.title }}</a>
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">下载说明</div>
                  <div class="technical-introduction-table">
                    <el-table
                        :data="tableData"
                        stripe
                        :show-header="false"
                        style="width: 100%">
                      <el-table-column
                          prop="name"
                          label=""
                          width="100">
                      </el-table-column>
                      <el-table-column
                          prop="introduction"
                          label="">
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
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
import footerWeb from "@/components/footer/footer";
import toTop from "@/components/to-top/to-top";
import crumb from "@/components/crumb/crumb";


export default {
  name: "technical-page",
  components: {
    navMenu, // 横向导航栏 + LOGO
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    crumb, // 面包屑
  },
  data() {
    return {
      tabsMenusAggregate: [], // Tab切换卡集合
      tabsName: "服务与支持", // 根据当前页面显示对应Tabs切换卡内容，初始值为首页
      activeName: '下载KEK CA证书', // 大Tab切换当前激活名称
      routeList: [ // 下载路径
        {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V1 Client CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V3 Client CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus TSA Signing CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus Document Signing CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V1 Server CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V3 Server CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V4 Server CA"
        }
      ],
      tableData: [{ // 下载说明
        name: '公司名称:',
        introduction: 'WoTrus CA Limited'
      }, {
        name: '国家:',
        introduction: 'CN'
      }, {
        name: '序列号:',
        introduction: '0A004C7E44148A8F902C840C79E6F0D8'
      }, {
        name: '签名算法:',
        introduction: 'SHA256 RSA'
      }, {
        name: '公钥长度:',
        introduction: '4096位 (RSA)'
      }, {
        name: '有效期:',
        introduction: '2018年1月22日 — 2043年1月22日'
      }, {
        name: '下载格式:',
        introduction: '45F662953267038A0A2FF8C54C9E52DB4F2AE3D7'
      }],
      routeAboutList: [ // 下载路径
        {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V1 Client CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V3 Client CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus TSA Signing CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus Document Signing CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V1 Server CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V3 Server CA"
        }, {
          downloadUrl: "",
          title: "CA WoTrus Root -- WoTrus V4 Server CA"
        }
      ],
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
      for (let i = 0; i < tabDoms.length; i++) {
        _this.tabsMenusAggregate.push(
            {
              tab: _this.tabsName,
              tabItem: tabDoms[i]
            }
        )
      }
    })
    this.$store.commit("setTabsMenusAggregateValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/technical"]) // 将存储的值传给Vuex中存储
    this.activeName = this.$store.state.crumbsActive
  },
  mounted() {
    let _this = this
    _this.$nextTick(() => {
      this.activeName = this.$store.state.crumbsActive
    })
  },
  methods: {
    /* Tab切换卡点击事件 */
    handleClick(e) {
      let _this = this
      this.activeName = e.name // 将点击的标题赋给Tabs下的当前激活名称
      this.$store.dispatch("setTabsActiveValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/technical"]) // 将存储的值传给Vuex中存储
    },
  }
}
</script>

<style scoped></style>

