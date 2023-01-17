<template>
  <div class="product">
    <nav-menu></nav-menu>
    <div class="product-introduce">
      <div class="product-introduce-fonts white-color">
        <div class="product-introduce-title">关于我们</div>
        <div class="product-introduce-english">ABOUT US</div>
      </div>
      <img src="@/assets/images/pki-web_28.png" alt="">
    </div>
    <div class="product-tabs">
      <el-tabs ref="tabs" class="about-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="关于我们" name="关于XX">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon about-us-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">关于XX</span>
              <span class="tabs-english">About XX</span>
            </span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">公司简介</div>
                  <div class="about-introdection">
                    <div class="technical-introduction-text f-left" style="width: 790px;"> 有限公司 ( WoTrus CA Limited )
                      成立于2002年，是同时获得国内电子认证服务许可证(由工信部颁发)和通过国际认证的证书颁发机构(CA)。从2004年开始代理国外CA证书产品，到2006年开始做自己品牌产品，再到2011年开始从自己的顶级根证书下签发全球信任的各种数字证书。一路走来，不断历练，多年的不懈努力，已经取得了丰富成果，可以完全取代国外CA证书产品，沃通人已经准备好了承担起保护我国互联网安全的重任。沃通电子认证服务有限公司
                      ( WoTrus CA Limited ) 成立于2002年，是同时获得国内电子认证服务许可证(由工信部颁发)和通过国际认证的证书颁发机构(CA)。
                    </div>
                    <img src="@/assets/images/pki-web_36.png" alt="">
                  </div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">公司业绩</div>
                  <div class="technical-introduction-text"> WoTrus
                    自有品牌数字证书产品特别针对中国市场的特点和需求而设计，满足了各种用户需求、质优价廉、全球通用、支持所有浏览器和服务器。由于性能价格比高、全面支持中文以及本地化的优质服务，受到了广大高中低端用户的普遍欢迎，产品已经广泛应用于银行、证券、基金、中国移动、中国电信和各大知名电子商务网站，其中，WoSign
                    微软代码签名证书在中国市场占有率已经超过 90%，SSL 证书中国市场占有率已经超过 30% 。WoSign
                    已经成为中国唯一拥有自己的全球信任的根证书的、自主品牌的、支持所有浏览器的、全系列数字证书产品供应商，也是中国最大的、市场份额占绝对优势(70%)的数字证书产品供应商。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于我们" name="资质与荣誉">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon qualification-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">资质与荣誉</span>
              <span class="tabs-english">Qualification and Honor</span>
            </span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="qualification-honor technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">资质</div>
                </div>
                <div class="qualification-honor-list">
                  <div class="qualification-honor-item" v-for="(item, index) in qualificationHonorList" :key="index">
                    <div class="qualification-honor-photo">
                      <img :src="item.src" alt="">
                    </div>
                    <div class="qualification-honor-title">{{ item.title }}</div>
                  </div>
                </div>
              </div>
              <div class="qualification-honor technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">荣誉</div>
                </div>
                <div class="qualification-honor-list">
                  <div class="qualification-honor-item" v-for="(item, index) in qualificationHonorList" :key="index">
                    <div class="qualification-honor-photo">
                      <img :src="item.src" alt="">
                    </div>
                    <div class="qualification-honor-title">{{ item.title }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="关于我们" name="客户案例">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon customer-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">客户案例</span>
              <span class="tabs-english">Customer Stories</span>
            </span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="case-list" ref="list">
                <div class="case-item" ref="listItem" title="案例" v-for="(item, index) in casePhoto.slice((queryParams.pageNum - 1) * queryParams.pageSize, queryParams.pageNum * queryParams.pageSize)" :key="index" :class="item.class" @click="toggleCrumbSweiger(index, item.title)">
                  <div class="case-no white-color">0{{ item.num + 1 }}</div>
                  <div class="news-fonts">
                    <div class="news-time-title f-left">
                      <div class="news-title">{{ item.title }}</div>
                      <router-view></router-view>
                      <div class="case-english">{{ item.english }}</div>
                    </div>
                    <div class="news-jump-icon">
                      <img src="@/assets/images/pki-web_55.png" alt="">
                    </div>
                  </div>
                  <img :src="item.src" alt="">
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
        <el-tab-pane label="关于我们" name="联系我们">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon contact-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">联系我们</span>
              <span class="tabs-english">Contact us</span>
            </span>
          </span>
          <div class="product-content grey-bg">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="technical-introduction my-introduction white-bg">
                <div class="my-introduction-item" v-for="(item, index) in myIntroductionList" :key="index">
                  <div class="my-introduction-title">{{ item.title }}</div>
                  <div class="my-introduction-text">{{ item.text }}</div>
                </div>
              </div>
              <div class="technical-introduction white-bg">
                <div class="technical-introduction-fonts">
                  <div class="technical-introduction-title">公司地址</div>
                </div>
                <div class="technical-introduction-table">
                  <el-table
                      :data="tableAboutData"
                      :show-header="false"
                      style="width: 100%">
                    <el-table-column
                        prop="address"
                        label="地址"
                        width="500">
                    </el-table-column>
                    <el-table-column
                        prop="tel"
                        label="电话">
                    </el-table-column>
                    <el-table-column
                        prop="postal"
                        label="邮编">
                    </el-table-column>
                    <el-table-column
                        prop="fax"
                        label="传真">
                    </el-table-column>
                  </el-table>
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
  name: "about-page",
  components: {
    navMenu, // 横向导航栏 + LOGO
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    crumb, // 面包屑
  },
  data() {
    return {
      tabsMenusAggregate: [], // Tab切换卡集合
      tabsName: "关于我们", // 根据当前页面显示对应Tabs切换卡内容，初始值为首页
      activeName: '关于XX', // 大Tab切换当前激活名称
      tableAboutData: [{ // 公司地址
        address: '北京分公司：中国北京市南海淀区南礼士路321号17层1004',
        tel: '电话: 010-8827-2910:',
        postal: "邮编: 10000",
        fax: "传真：010-62800607"
      }, {
        address: '上海分公司:  上海市黄浦区南礼士路321号17层1004',
        tel: '电话: 010-8217-2120',
        postal: "邮编: 10000",
        fax: "传真：010-62800607"
      }, {
        address: '广州分公司:  广州市黄浦区桂林路321号17层1004',
        tel: '电话: 020-8887-1130',
        postal: "邮编: 10000",
        fax: "传真：010-62800607"
      }, {
        address: '深圳分公司:  深圳市黄浦区南路21号17层1004',
        tel: '电话: 010-8827-2910',
        postal: "邮编: 10000",
        fax: "传真：010-62800607"
      }],
      myIntroductionList: [ // 联系我们-信息介绍
        {
          title: "服务热线:",
          text: "400-800-900"
        }, {
          title: "邮箱:",
          text: "2232731@qq.com"
        }, {
          title: "值班客服电话:",
          text: "180-0000-1234"
        }
      ],
      qualificationHonorList: [ // 资质与荣誉 资质
        {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }, {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }, {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }, {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }, {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }, {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }, {
          src: require("@/assets/images/pki-web_41.png"),
          title: "电子认证服务许可证"
        }
      ],
      casePhoto: [ // 客户案例
        {
          num: 0,
          title: "XX公司案例01",
          english: "Case A",
          src: require("@/assets/images/pki-web_64.png"),
          class: "case-item-left",
        }, {
          num: 1,
          title: "XX公司案例02",
          english: "Case B",
          src: require("@/assets/images/pki-web_66.png"),
          class: "",
        }, {
          num: 2,
          title: "XX公司案例03",
          english: "Case C",
          src: require("@/assets/images/pki-web_64.png"),
          class: "case-item-left",
        }, {
          num: 3,
          title: "XX公司案例04",
          english: "Case D",
          src: require("@/assets/images/pki-web_66.png"),
          class: "",
        }, {
          num: 4,
          title: "XX公司案例05",
          english: "Case E",
          src: require("@/assets/images/pki-web_64.png"),
          class: "case-item-left",
        }, {
          num: 5,
          title: "XX公司案例06",
          english: "Case F",
          src: require("@/assets/images/pki-web_66.png"),
          class: "",
        }
      ],
      /* 关于我们-数据集 -- 结束 */
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
      for (let i = 0; i < tabDoms.length; i++) {
        _this.tabsMenusAggregate.push(
          {
            tab: _this.tabsName,
            tabItem: tabDoms[i]
          }
        )
      }
    })
    this.$store.commit("setTabsMenusAggregateValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/about"]) // 将存储的值传给Vuex中存储
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
      this.$store.dispatch("setTabsActiveValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/about"]) // 将存储的值传给Vuex中存储
    },
    handleSizeChange(val) {
      this.queryParams.pageSize = val
    },
    handleCurrentChange(val) {
      this.queryParams.pageNum = val;
    },
    /* 点击跳转至详情页面 */
    toggleCrumbSweiger(num, name) {
      this.$router.replace('/case') // 跳转至案例详情
      this.$store.dispatch("setNewsCaseDetailsValue", [num, name, this.casePhoto]) // 将存储的值传给Vuex中存储
      this.$store.dispatch("setNewsCaseSwitchValue", true) // 将存储的值传给Vuex中存储
      let person = [num, name, this.casePhoto, true]
      sessionStorage.setItem("person", JSON.stringify(person))
    }
  }
}
</script>

<style scoped></style>

