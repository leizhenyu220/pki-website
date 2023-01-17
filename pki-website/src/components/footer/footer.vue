<template>
  <div class="footer">
    <div class="main">
      <ul class="footer-menu f-left">
        <li class="footer-menu-item" v-for="(item, index) in footerMenuList" :key="index">
          <div class="footer-menu-title">{{ item.title }}</div>
          <router-link :to="{path: ''}" class="footer-menu-jump" v-for="(items, i) in item.jumps" :key="i">
            {{ items.jump }}
          </router-link>
        </li>
      </ul>
      <div class="qr-code-list">
        <img src="@/assets/images/pki-web_81.png" alt="">
        <img src="@/assets/images/pki-web_83.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-web",
  data() {
    return {
      footerMenuList: [ // 顶部大轮播图
        {
          title: "产品介绍",
          jumps: [
            {
              jump: "签名服务平台"
            }, {
              jump: "安全启动认证证书"
            }, {
              jump: "SHIM/EFI"
            }, {
              jump: "驱动程序文件签名"
            }
          ]
        }, {
          title: "技术支持",
          jumps: [
            {
              jump: "下载KEK CA证书"
            }, {
              jump: "下载DB CA证书"
            }, {
              jump: "下载DBT CA证书"
            }, {
              jump: "下载DBX文件"
            }, {
              jump: "申请SHIM/EFI"
            }, {
              jump: "驱动程序文件签名"
            }
          ]
        }, {
          title: "最新动态",
          jumps: [
            {
              jump: "新闻"
            }, {
              jump: "公告发布信息"
            }
          ]
        }, {
          title: "关于我们",
          jumps: [
            {
              jump: "关于XX"
            }, {
              jump: "资质与荣誉"
            }, {
              jump: "客户案例"
            }, {
              jump: "联系我们"
            }
          ]
        }
      ]
    }
  },
  mounted(){}
}
</script>

<style scoped>
.footer {
  height: 320px;
  padding: 60px 0 60px 0;
  background-color: #212225;
  color: #FFFFFF;
  overflow: hidden;
  box-sizing: border-box;
}

.footer-menu {
  width: 70%;
  display: flex;
}

.footer-menu-item {
  flex: 1;
  padding-right: 20px;
}

.footer-menu-title {
  font-weight: bolder;
  font-size: 18px;
  line-height: 40px;
}

.footer-menu-jump {
  font-size: 14px;
  text-decoration: none;
  color: #FFFFFF;
  display: block;
  line-height: 20px;
}

.footer-menu-jump:hover {
  color: #0073eb;
  transition: all 0.3s;
}

.qr-code-list {
  float: right;
}

.qr-code-list img {
  margin-left: 15px;
}
</style>
