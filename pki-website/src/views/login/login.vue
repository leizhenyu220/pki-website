<template>
  <div class="login" :style="{ height: windowHeight + 'px' }">
    <div class="login-photo f-left">
      <div class="internationalization">
        <i class="internationalization-icon f-left"></i>
        <el-select class="internationalization-select" v-model="internationalizationValue" placeholder="请选择" @change="changeLang">
          <el-option
              v-for="item in internationalizationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="login-fonts white-color">
        <div class="login-title">{{$t("login.welcome")}}</div>
        <div class="login-txt">{{$t("login.welcomeTest")}}</div>
      </div>
    </div>
    <div class="login-sign">
      <div class="login-jumps-register">
        <div class="login-center">
          <div class="login--jumps f-left">
            <router-link class="login-jump-item" v-for="(item, index) in loginJump" :key="index" :to="{path: item.url}">
              {{ $t(item.title) }}
            </router-link>
          </div>
          <el-button type="primary" class="register-btn" v-if="register == undefined" @click="toggleRegister($event)">{{ $t("login.loginTopBtns.register") }}</el-button>
          <el-button type="primary" class="register-btn" v-else @click="toggleRegister($event)">{{ $t("login.loginTopBtns.sign") }}</el-button>
        </div>
      </div>
      <div class="login-center">
        <div class="login-logo">
          <img src="@/assets/images/pki-web_16.png" alt="">
        </div>
        <div class="form-login" v-if="register == undefined">
          <el-form ref="signForm" :model="signForm" :rules="signRules">
            <el-form-item class="login-input" prop="phoneInput">
              <el-input type="text" v-model="signForm.phoneInput" :placeholder="$t('login.loginInput.user')"
                        prefix-icon="el-icon-mobile-phone"></el-input>
            </el-form-item>
            <el-form-item class="login-input" prop="passwordInput">
              <el-input type="password" v-model="signForm.passwordInput" :placeholder="$t('login.loginInput.password')"
                        prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item class="login-input verification" prop="signVerificationInput">
              <!--              <img src="@/assets/images/pki-web_15.png" alt="">-->
              <canvas @click="getNewCode($event)" ref="verification" id="s-canvas" class="verificationInput-canvas" :width="contentWidth" :height="contentHeight"></canvas>
              <el-input type="text" v-model="signForm.signVerificationInput" :placeholder="$t('login.loginInput.verification')"
                        prefix-icon="el-icon-mobile-phone" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item class="login-input">
              <el-button type="primary" class="login-btn" @click="goHome">{{ $t("login.loginMaxBtns.sign") }}</el-button>
            </el-form-item>
            <router-link class="forget-password" :to="{path: '/'}">{{ $t("login.forgotPassword") }}</router-link>
          </el-form>
        </div>
        <div class="form-login" v-else>
          <el-form ref="registerForm" :model="registerForm" :rules="registerRules">
            <el-form-item class="login-input society" prop="societyInput">
              <el-input type="text" v-model="registerForm.societyInput" :placeholder="$t('login.registerInput.user')" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
            <el-form-item class="login-input" prop="passwordRrgisterInput">
              <el-input type="password" v-model="registerForm.passwordRrgisterInput" :placeholder="$t('login.registerInput.password')"
                        prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item class="login-input" prop="passwordRepeatRrgisterInput">
              <el-input type="password" v-model="registerForm.passwordRepeatRrgisterInput" :placeholder="$t('login.registerInput.passwordRepeatRrgisterInput')"
                        prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item class="login-input" prop="enterpriseRrgisterInput">
              <el-input type="text" v-model="registerForm.enterpriseRrgisterInput" :placeholder="$t('login.registerInput.enterpriseRrgisterInput')"
                        prefix-icon="el-icon-school"></el-input>
            </el-form-item>
            <el-form-item class="login-input" prop="phoneRrgisterInput">
              <el-input type="text" v-model="registerForm.phoneRrgisterInput" :placeholder="$t('login.registerInput.phone')"
                        prefix-icon="el-icon-mobile-phone"></el-input>
            </el-form-item>
            <el-form-item class="login-input verification" prop="verificationRegisterInput">
<!--              <img src="@/assets/images/pki-web_15.png" alt="">-->
              <canvas @click="getNewCode($event)" ref="verification" id="r-canvas" class="verificationInput-canvas" :width="contentWidth" :height="contentHeight"></canvas>
              <el-input type="text" v-model="registerForm.verificationRegisterInput" :placeholder="$t('login.registerInput.verification')"
                        prefix-icon="el-icon-mobile-phone" maxlength="6"></el-input>
            </el-form-item>
            <el-form-item class="login-input">
              <el-button type="primary" class="login-btn" @click="toggleSign">{{ $t("login.loginMaxBtns.register") }}</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "login-page",
  data() {
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.registerForm.passwordRrgisterInput) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      windowHeight: document.documentElement.clientHeight, // 实时屏幕高度
      register: undefined, // 控制登录区域或者注册区域显示或隐藏
      contentWidth: 150, // 图片验证码图片元素宽度
      contentHeight: 50, // 图片验证码图片元素高度
      codeCaptcha: '', // 图片验证码
      signForm: { // 表单初始值
        signVerificationInput: '', // 登录页-验证码Input输入框初始值
        phoneInput: '', // 登录页-用户名/手机号Input输入框初始值
        passwordInput: '', // 登录页-密码Input输入框初始值
      },
      registerForm: { // 表单初始值
        verificationRegisterInput: '', // 注册页-验证码Input输入框初始值
        societyInput: '', // 注册页-账号Input输入框初始值
        passwordRrgisterInput: '', // 注册页-密码Input输入框初始值
        passwordRepeatRrgisterInput: '', // 注册页-再次输入密码Input输入框初始值
        enterpriseRrgisterInput: '', // 注册页-企业名称Input输入框初始值
        phoneRrgisterInput: '', // 注册页-手机号Input输入框初始值
      },
      queryParmas: { // 查询参数
        signVerificationInput: undefined, // 登录页-验证码Input输入框初始值
        verificationRegisterInput: undefined, // 注册页-验证码Input输入框初始值
        societyInput: undefined, // 注册页-账号Input输入框初始值
        passwordRrgisterInput: undefined, // 注册页-密码Input输入框初始值
        passwordRepeatRrgisterInput: undefined, // 注册页-再次输入密码Input输入框初始值
        enterpriseRrgisterInput: undefined, // 注册页-企业名称Input输入框初始值
        phoneRrgisterInput: undefined, // 注册页-手机号Input输入框初始值
        phoneInput: undefined, // 登录页-用户名/手机号Input输入框初始值
        passwordInput: undefined, // 登录页-密码Input输入框初始值
      },
      signRules: { // 表单校验
        phoneInput: [ // 登录页-用户名/手机号Input输入框初始值
          {required: true, message: "用户名或手机号不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        passwordInput: [ // 登录页-密码Input输入框初始值
          {required: true, message: "密码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        signVerificationInput: [ // 登录页-验证码Input输入框初始值
          {required: true, message: "验证码不能为空", trigger: "blur"},
          {max: 4, message: "长度不能超过4个字符", trigger: "blur"}
        ],
      },
      registerRules: { // 表单校验
        verificationRegisterInput: [ // 注册页-验证码Input输入框初始值
          {required: true, message: "验证码不能为空", trigger: "blur"},
          {max: 4, message: "长度不能超过4个字符", trigger: "blur"}
        ],
        societyInput: [ // 注册页-账号Input输入框初始值
          {required: true, message: "账号不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        passwordRrgisterInput: [ // 注册页-密码Input输入框初始值
          {required: true, message: "密码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        passwordRepeatRrgisterInput: [ // 注册页-确认密码Input输入框初始值
          {required: true, validator: validatePass2, message: "确认密码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        enterpriseRrgisterInput: [ // 注册页-企业名称Input输入框初始值
          {required: true, message: "企业名称不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ],
        phoneRrgisterInput: [ // 注册页-手机号码Input输入框初始值
          {required: true, message: "手机号码不能为空", trigger: "blur"},
          {max: 20, message: "长度不能超过20个字符", trigger: "blur"}
        ]
      },
      loginJump: [ // 登录页右上角跳转集合
        {
          title: "login.loginJumps.home",
          url: "/home"
        }, {
          title: "login.loginJumps.product",
          url: "/product"
        }, {
          title: "login.loginJumps.technical",
          url: "/technical"
        }, {
          title: "login.loginJumps.latest",
          url: "/latest"
        }, {
          title: "login.loginJumps.about",
          url: "/about"
        }
      ],
      internationalizationOptions: [{
        value: 'zh',
        label: '简体中文'
      }, {
        value: 'en',
        label: 'English'
      }],
      internationalizationValue: '简体中文'
    }
  },
  created() {
  },
  mounted() {
    let that = this;
    window.onresize = () => { // 动态监听浏览器窗口大小实时变化，并重新执行以下代码
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        that.windowHeight = window.fullHeight;  // 高
      })()
    };
    if (this.$route.query.num != "" || this.$route.query.num != undefined) {
      this.register = this.$route.query.num // 根据导航栏点击的登录或者注册按钮切换显示相应组件页面
    }
    this.getCanvas();
  },
  methods: {
    /* 切换语言 */
    changeLang(lang) {
      this.$i18n.locale = lang
    },
    /* 点击“注册”按钮切换到注册页面 */
    toggleRegister(e) {
      let _this = this
      _this.register = "1"
      if (e.path[0].innerText == "登录") {
        _this.$refs['registerForm'].validate((valid) => {
          if (valid) {
            _this.$router.replace("/") // 点击按钮返回到登录页
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    },
    /* 点击“注册”按钮切换到登录页面 */
    toggleSign() {
      let _this = this
      _this.$refs['registerForm'].validate((valid) => {
        if (valid) {
          _this.$emit("toggleSign", _this.register)
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* 点击“登录”按钮跳转到首页 */
    goHome() {
      let _this = this
      _this.matching() // 调用图片验证码校验函数
      _this.$refs['signForm'].validate((valid) => {
        if (valid) {
          _this.$router.replace({path: "/home"})
          if (_this.signForm.phoneInput != "") {
            _this.$store.dispatch("setLoginSignValue", [true, _this.signForm.phoneInput]) // 页面初始化不显示面包屑第三级标题
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    /* 图片验证码 */
    // 生成4位数的随机验证码
    getCodeCaptcha() {
      let _this = this
      _this.codeCaptcha = '';
      let codeList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'z', 'x', 'c', 'v', 'b', 'n', 'm',
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M'
      ];
      let i = 0;
      let num = 0;
      for (; i < 4; ++i) {
        codeList.sort(function () {
          return (0.5 - Math.random());
        });
        num = _this.randomNum(61, 0);
        _this.codeCaptcha += codeList[num];
      }
    },
    // 生成随机数
    randomNum(max, min) {
      return Math.round(Math.random() * (max - min) + min + 1);
    },
    getNewCode(e) {
      let _this = this
      _this.getCanvas(e);
    },
    // 生成随机颜色
    getRgbNum() {
      let r = this.randomNum(256, 0);
      let g = this.randomNum(256, 0);
      let b = this.randomNum(256, 0);
      let a = this.randomNum(256, 0);
      return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    },
    getCanvas() {
      this.getCodeCaptcha();
      let canvas = document.getElementById("s-canvas");
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = this.getRgbNum();//填充的颜色
      ctx.strokeStyle = this.getRgbNum();//边框的颜色
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);//画一个矩形
      ctx.strokeRect(0, 0, this.contentWidth, this.contentHeight);//画一个矩形框
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = this.getRgbNum();
        ctx.font = this.randomNum(40, 30) + 'px SimHei';//字体大小
        ctx.fillText(this.codeCaptcha[i], (20 + i * 15), this.randomNum(40, 30));//写文本
      }
      for (let i = 0; i < 10; i++) {
        ctx.strokeStyle = this.getRgbNum();
        ctx.beginPath();//开始一条路径
        ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));//路径的起点
        ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight));//路径的终点
        ctx.stroke();//画线
      }
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.getRgbNum();
        ctx.beginPath();
        //画弧线arc(x,y,r,sAngle,eAngle,counterclockwise)
        //(x,y)圆心，r半径，sAngle弧的起始角度（弧的圆形的三点钟方向为0度），eAngle弧的结束角度，counterclockwise顺时针还是逆时针画弧，false顺，true逆
        ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI);
        ctx.fill();//填充，也可以用stroke，但是点会比较大
      }
    },
    matching() {
      if (this.signForm.signVerificationInput === '') {
        this.$message({
          type: "error",
          message: "未输入验证码，请正确输入验证码",
          customClass: "message-pop"
        })
      } else if (this.signForm.signVerificationInput.toLowerCase() === this.codeCaptcha.toLowerCase()){
        this.$message({
          type: "success",
          message: "验证码验证成功！",
          customClass: "message-pop"
        })
      } else {
        this.$message({
          type: "error",
          message: "验证码输入错误！请重新输入",
          customClass: "message-pop"
        })
        this.getCanvas();
        this.signForm.signVerificationInput = '';
      }
    }
  },
}
</script>

<style scoped>
/* 登录页 外层div */
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 登录页 左侧图片区 */
.login-photo {
  width: 60%;
  height: 100%;
  background-image: url("../../assets/images/pki-web_13.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right top;
  position: relative;
}

/* 登录页 国际化div(语言切换区) */
.internationalization {
  position: absolute;
  top: 30px;
  left: 30px;
}

/* 登录页 国际化图标 */
.internationalization-icon {
  display: block;
  width: 30px;
  height: 30px;
  margin-top: 5px;
  background-image: url("../../assets/images/pki-web_47.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
}

/* 登录页 国际化下拉列表 */
.internationalization-select {
  width: 120px;
}

/* 登录页 国际化下拉列表去掉组件默认背景色和边框颜色，调整文字颜色、文字大小等 */
.internationalization-select /deep/ .el-input__inner {
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
}

/* 登录页 国际化下拉列表图标颜色调整为白色、图标大小 */
.internationalization-select /deep/ .el-input .el-select__caret {
  color: #FFFFFF;
  font-size: 16px;
}

/* 登录页 国际化下拉列表 选项区激活状态和鼠标悬停下样式 */
.internationalization-select /deep/ .el-select-dropdown__item.hover, .el-select-dropdown__item:hover {
  color: #FFFFFF;
  font-size: 14px;
  background-color: #0073eb;
  font-weight: normal;
  transition: all 0.3s;
}

/* 登录页 左侧图片-下边文字集合 */
.login-fonts {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background-color: rgba(0, 17, 59, 61%);
  padding: 60px 100px;
  box-sizing: border-box;
}

/* 登录页 左侧图片-下边标题文字样式 */
.login-title {
  font-family: Arial;
  font-size: 36px;
  font-weight: bolder;
  line-height: 60px;
}

/* 登录页 左侧图片-下边正文样式 */
.login-txt {
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
}

/* 登录页 右侧登录区 */
.login-sign {
  width: 40%;
  height: 100%;
  display: inline-block;
}

/* 登录页 右侧登录区-水平居中div */
.login-center {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
}

/* 登录页 右侧登录区-顶部跳页集合、注册/登录按钮div */
.login-jumps-register {
  width: 100%;
  height: 80px;
  line-height: 80px;
  border-bottom: 1px solid #F3F3F3;
}

/* 登录页 右侧登录区-顶部跳页列表 */
.login--jumps {
  width: 70%;
}

/* 登录页 右侧登录区-顶部跳页子级 */
.login-jump-item {
  float: left;
  padding: 0 10px;
  text-decoration: none;
  font-size: 15px;
  color: #666666;
  transition: all 0.3s;
}

/* 登录页 右侧登录区-鼠标悬停下跳页文字样式 */
.login-jump-item:hover {
  color: #0073eb;
}

/* 登录页 右侧登录区-登录/注册div样式 */
.register-btn {
  float: right;
  margin-top: 24px;
  width: 72px;
  height: 30px;
  font-size: 12px;
  line-height: 8px;
  padding: 12px 0;
  text-align: center;
}

/* 登录页 右侧登录区-登录、注册按钮样式 */
.login-btn,
.register-btn {
  background-color: #0073eb;
  border: none;
  text-align: center;
  transition: all 0.3s;
}

/* 登录页 右侧登录区-鼠标悬停下登录、注册按钮样式 */
.login-btn:hover,
.register-btn:hover {
  background-color: #333333;
}

/* 登录页 右侧登录区-LOGO */
.login-logo {
  margin: 80px 0;
  text-align: center;
}

.login-btn,
.register-btn {
  background-color: #0073eb;
  border: none;
  text-align: center;
  transition: all 0.3s;
}

.login-btn:hover,
.register-btn:hover {
  background-color: #333333;
}

.login-input {
  margin-bottom: 30px;
  width: 100%;
}

.login-input:hover /deep/ .el-input__inner {
  border-color: #0073eb;
}

.login-input /deep/ .el-input__inner {
  border: 1px solid #e5e5e4;
  height: 55px;
  font-size: 16px;
  color: #333333;
  box-sizing: border-box;
  transition: all 0.3s;
}

.login-input /deep/ .el-input--prefix .el-input__inner {
  padding-left: 40px;
}

.login-input /deep/ .el-input__inner::placeholder {
  color: #7c7c7c;
  padding-left: 0px;
}

.login-input /deep/ .el-input__icon {
  font-size: 20px;
  line-height: 55px;
}

.login-input.el-form-item.is-error /deep/ .el-input__inner,
.login-input.el-form-item.is-error /deep/ .el-input__inner:focus,
.login-input.el-form-item.is-error /deep/ .el-textarea__inner,
.login-input.el-form-item.is-error /deep/ .el-textarea__inner:focus {
  border-color: #F66464;
}

.society,
.verification {
  position: relative;
}

.verification canvas {
  position: absolute;
  right: 0px;
  top: 1px;
  height: 53px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: 1;
  cursor: pointer;
}

.login-btn {
  width: 100%;
  height: 55px;
  font-size: 18px;
  font-weight: 500;
}

.forget-password {
  float: right;
  color: #0073eb;
  text-decoration: none;
  font-size: 14px;
  margin-top: -20px;
  transition: all 0.3s;
}

.forget-password:hover {
  color: #333333;
}

.verification /deep/ .el-icon-mobile-phone {
  background-image: url("../../assets/images/pki-web_18.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 65% auto;
}

.verification /deep/ .el-icon-mobile-phone:before {
  content: "";
}
</style>
