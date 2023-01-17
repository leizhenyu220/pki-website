<template>
  <div class="product">
    <nav-menu></nav-menu>
    <div class="product-introduce">
      <div class="product-introduce-fonts white-color">
        <div class="product-introduce-title">产品介绍</div>
        <div class="product-introduce-english">PRODUCT INTRODUCTION</div>
        <div class="product-introduce-btns">
          <el-button class="product-introduce-btn" type="primary">咨询</el-button>
          <el-button class="product-introduce-btn">购买</el-button>
        </div>
      </div>
      <img src="@/assets/images/pki-web_22.png" alt="">
    </div>
    <div class="product-tabs">
      <el-tabs ref="tabs" class="pad-b0" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="产品介绍" name="签名服务平台">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon autograph-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">签名服务平台</span>
              <span class="tabs-english">Signature service platform</span>
            </span>
          </span>
          <div class="product-content">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="product-introduction">
                <div class="product-introduction-left-photo f-left">
                  <img src="@/assets/images/pki-web_23.png" alt="">
                </div>
                <div class="product-introduction-fonts">
                  <div class="product-introduction-title">产品简介</div>
                  <div class="product-introduction-text">银河麒麟高级服务器操作系统V10是针对企业级关键业务，适应虚拟化、云计算、大数据、工业互联网时代对主机系统可靠性、安全性、性能、扩展性和实时性等需求，依据CMMI5级标准研制的提供内生本质安全、云原生支持、自主平台深入优化、 高性能、易管理的新一代自主服务器操作系统，同源支持飞 腾、鲲鹏、龙芯、申威、海光、兆芯等自主平台;应用于政府、金 融、教育、财税、公安、审计、交通、医疗、制造等领域。基于银河麒麟高级服务器操作系统，用户可轻松构建数据中心、高可用集群和负载均衡集群、虚拟化应用服务、分布式文件系统等，并实现对虚拟数据中心的跨物理系统、虚拟机集群进行统一的监控和管理。 银河麒麟高级服务器操作系统支持云原生应用，满足企业当前数据中心及下一代的虚拟化(含Docker容器)、大数据、云服务的需求，为用户提供融合、统一、自主创新的基础软件平台及灵活的管理服务。</div>
                </div>
              </div>
            </div>
            <div class="product-section grey-bg">
              <div class="main">
                <div class="tachnical-support-fonts">
                  <div class="tachnical-support-title">产品类型</div>
                </div>
                <div class="product-type">
                  <div class="product-type-item" v-for="(items, index) in productType" :key="index">
                    <div class="product-type-item-edition">{{ items.edition }}</div>
                    <div class="product-type-projects">
                      <div class="product-type-project" v-for="(item, i) in productType[index].productProject" :key="i">
                        <div class="product-type-project-icon f-left">
                          <i class="el-icon-check"></i>
                        </div>
                        <div class="product-type-project-text">{{ item.text }}</div>
                      </div>
                    </div>
                    <div class="product-type-details-jumps white-color">
                      <router-link class="product-type-details-jump" :to="{path: ''}">查看详情</router-link>
                      <i class="el-icon-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-section main">
              <div class="tachnical-support-fonts">
                <div class="tachnical-support-title">产品优势</div>
              </div>
              <div class="product-advantage product-type">
                <div class="product-advantage-item" v-for="(item, index) in productAdvantageList" :key="index">
                  <div class="product-advantage-photo">
                    <img :src="item.src" alt="">
                  </div>
                  <div class="product-advantage-title">{{ item.title }}</div>
                  <div class="product-advantage-text">{{ item.text }}</div>
                </div>
              </div>
            </div>
            <div class="product-section grey-bg">
              <div class="main">
                <div class="tachnical-support-fonts">
                  <div class="tachnical-support-title">产品案例</div>
                </div>
                <case-slider></case-slider>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="产品介绍" name="安全启动认证证书">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon authentication-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">安全启动认证证书</span>
              <span class="tabs-english">Safe Start Certificate</span>
            </span>
          </span>
          <div class="product-content">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="product-introduction">
                <div class="product-introduction-left-photo f-left">
                  <img src="@/assets/images/pki-web_23.png" alt="">
                </div>
                <div class="product-introduction-fonts">
                  <div class="product-introduction-title">产品简介</div>
                  <div class="product-introduction-text">银河麒麟高级服务器操作系统V10是针对企业级关键业务，适应虚拟化、云计算、大数据、工业互联网时代对主机系统可靠性、安全性、性能、扩展性和实时性等需求，依据CMMI5级标准研制的提供内生本质安全、云原生支持、自主平台深入优化、 高性能、易管理的新一代自主服务器操作系统，同源支持飞 腾、鲲鹏、龙芯、申威、海光、兆芯等自主平台;应用于政府、金 融、教育、财税、公安、审计、交通、医疗、制造等领域。基于银河麒麟高级服务器操作系统，用户可轻松构建数据中心、高可用集群和负载均衡集群、虚拟化应用服务、分布式文件系统等，并实现对虚拟数据中心的跨物理系统、虚拟机集群进行统一的监控和管理。 银河麒麟高级服务器操作系统支持云原生应用，满足企业当前数据中心及下一代的虚拟化(含Docker容器)、大数据、云服务的需求，为用户提供融合、统一、自主创新的基础软件平台及灵活的管理服务。</div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="产品介绍" name="SHIM/EFI驱动程序文件签名">
          <span slot="label" class="tabs-text">
            <i class="tabs-icon drive-icon"></i>
            <span class="tabs-fonts">
              <span class="tabs-title">SHIM/EFI驱动程序文件签名</span>
              <span class="tabs-english">SHIM/EFI driver file signature</span>
            </span>
          </span>
          <div class="product-content">
            <div class="main">
              <div class="crumbs">
                <crumb ref="crumb"></crumb>
              </div>
              <div class="product-introduction">
                <div class="product-introduction-left-photo f-left">
                  <img src="@/assets/images/pki-web_23.png" alt="">
                </div>
                <div class="product-introduction-fonts">
                  <div class="product-introduction-title">产品简介</div>
                  <div class="product-introduction-text">银河麒麟高级服务器操作系统V10是针对企业级关键业务，适应虚拟化、云计算、大数据、工业互联网时代对主机系统可靠性、安全性、性能、扩展性和实时性等需求，依据CMMI5级标准研制的提供内生本质安全、云原生支持、自主平台深入优化、 高性能、易管理的新一代自主服务器操作系统，同源支持飞 腾、鲲鹏、龙芯、申威、海光、兆芯等自主平台;应用于政府、金 融、教育、财税、公安、审计、交通、医疗、制造等领域。基于银河麒麟高级服务器操作系统，用户可轻松构建数据中心、高可用集群和负载均衡集群、虚拟化应用服务、分布式文件系统等，并实现对虚拟数据中心的跨物理系统、虚拟机集群进行统一的监控和管理。 银河麒麟高级服务器操作系统支持云原生应用，满足企业当前数据中心及下一代的虚拟化(含Docker容器)、大数据、云服务的需求，为用户提供融合、统一、自主创新的基础软件平台及灵活的管理服务。</div>
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
import caseSlider from "@/components/case/case"
import crumb from "@/components/crumb/crumb";
export default {
  name: "product-page",
  components: {
    navMenu, // 横向导航栏 + LOGO
    footerWeb, // 网站页脚
    toTop, // 回到顶部
    caseSlider, // 首页-案例
    crumb, // 面包屑
  },
  data() {
    return {
      tabsMenusAggregate: [], // Tab切换卡集合
      tabsName: "产品介绍", // 根据当前页面显示对应Tabs切换卡内容，初始值为首页
      activeName: '签名服务平台', // 大Tab切换当前激活名称
      productType: [ // 产品类型
        {
          edition: "1.01版本",
          productProject: [
            {
              text: "采用国密SM2算法体系"
            }, {
              text: "支持主流国密浏览器"
            }, {
              text: "国密HTTPS加密通信"
            }, {
              text: "仅验证域名所有权"
            }
          ]
        }, {
          edition: "2.01版本",
          productProject: [
            {
              text: "采用国密SM2算法体系"
            }, {
              text: "支持主流国密浏览器"
            }, {
              text: "国密HTTPS加密通信"
            }, {
              text: "仅验证域名所有权"
            }, {
              text: "支持通配域名和多域名全备份"
            }
          ]
        }, {
          edition: "3.01版本",
          productProject: [
            {
              text: "采用国密SM2算法体系"
            }, {
              text: "支持主流国密浏览器"
            }, {
              text: "国密HTTPS加密通信"
            }, {
              text: "仅验证域名所有权"
            }, {
              text: "支持通配域名和多域名全备份"
            }
          ]
        }, {
          edition: "4.01版本",
          productProject: [
            {
              text: "采用国密SM2算法体系"
            }, {
              text: "支持主流国密浏览器"
            }, {
              text: "国密HTTPS加密通信"
            }, {
              text: "仅验证域名所有权"
            }, {
              text: "支持通配域名和多域名全备份"
            }
          ]
        }
      ],
      productAdvantageList: [ // 产品优势
        {
          src: require("../../assets/images/pki-web_24.png"),
          title: "合规可信机构",
          text: "获取工信部《电子认证服务许可证》、国密局《电子认证服务使用密码许可证》等多项国家许可，具备合规资质"
        }, {
          src: require("../../assets/images/pki-web_25.png"),
          title: "首推国秘SSL证书",
          text: "沃通深耕SSL证书领域十余年，是首家推出国密SSL证书并率先建立国密全生态体系的CA机构，具备国密研发实力和专业服务能力。"
        }, {
          src: require("../../assets/images/pki-web_26.png"),
          title: "信赖之选",
          text: "沃通联合全国十几家CA机构进行国密SSL证书、国密中级根的合作及推广，已服务众多政务网站实现国密HTTPS通信加密。"
        }
      ],
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
      this.$store.dispatch("setTabsActiveValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName, "/product"]) // 将存储的值传给Vuex中存储
    })
  },
  methods: {
    /* Tab切换卡点击事件 */
    handleClick(e) {
      let _this = this
      this.activeName = e.name // 将点击的标题赋给Tabs下的当前激活名称
      this.$store.commit("setTabsMenusAggregateValue", [_this.tabsMenusAggregate, _this.activeName, _this.tabsName]) // 将存储的值传给Vuex中存储
    },
  }
}
</script>

<style scoped></style>
