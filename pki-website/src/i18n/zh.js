const zh = {
    login: {
        welcome: '欢迎访问网站',
        welcomeTest: '下载KEK CA证书下载 DB CA证书、下载DBT CA证书、下载 DBX文件，申请SHIM/EFI驱动程序文件签名.下载KEK CA证书下载 DB CA证书、下载DBT\n' +
            '          CA证书、下载 DBX文件，申请SHIM/EFI驱动程序文件签名下载KEK CA证书下载 DB CA证书、下载DBT CA证书、下载 DBX文件，申请SHIM/EFI驱动程序文件签名下载KEK CA证书下载 DB\n' +
            '          CA证书、下载DBT CA证书、下载 DBX文件，申请SHIM/EFI驱动程序文件签',
        loginJumps: { // 登录页右上角跳转集合-首页
            home: "首页",
            product: "产品介绍",
            technical: "服务与支持", // 服务与支持
            latest: "最新动态", // 最新动态
            about: "关于我们", // 关于我们
        },
        loginTopBtns: { // 登录页右上角小按钮
            sign: "登录",
            register: "注册"
        },
        /* 登录 */
        loginInput: { // 登录表单
            user: "请输入用户名/手机号",
            password: "请输入密码",
            verification: "请输入验证码"
        },
        loginMaxBtns: { // 表单下大按钮
            sign: "登    录",
            register: "注    册"
        },
        forgotPassword: "忘记密码",
        /* 注册 */
        registerInput: { // 注册表单
            user: "请输入账号",
            password: "请输入密码",
            passwordRepeatRrgisterInput: "请确认密码",
            enterpriseRrgisterInput: "请输入企业名称",
            phone: "请输入手机号码",
            verification: "请输入验证码"
        }
    },
    home: { /* 首页 */
        navbar: { // LOGO + 导航栏 + 登录/注册/个人中心 + 搜索
            nav: { // 导航栏
                home: "首页",
                product: "产品介绍",
                technical: "服务与支持", // 服务与支持
                technicalItem: { // 服务与支持-二级导航
                    kek: "下载KEK CA证书",
                    db: "下载DB CA证书",
                    dbt: "下载DBT CA证书",
                    dbx: "下载DBX文件",
                    efi: "申请SHIM/EFI驱动程序文件签名"
                },
                latest: "最新动态", // 最新动态
                about: "关于我们", // 关于我们
                aboutItem: { // 关于我们-二级导航
                    about: "关于XX",
                    qualificationsAndHonors: "资质与荣誉",
                    customerStories: "客户案例",
                    contactUs: "联系我们"
                }
            },
            signRegister: { // 登录/注册/个人中心页面入口 + 搜索
                out: "退出",
                sign: "登录",
                register: "注册",
                search: "请输入内容"
            }
        },
        slider: { // 大轮播图
            btn: "查看更多"
        },
        tabs: { // Tab切换卡
            tabItemA: {
                title: "签名服务平台", // 第一个Tab切换子级中文标题
                english: "Signature service platform", // 第一个Tab切换子级英文
                tabItemContentA: {
                    contentTitle: "服务与支持",
                    contentText: "麒麟软件提供多种技术服务渠道，包括400电话热线、微信公众号、服务与支持专用邮箱等，为客户提供7X24小时的不间断响应，第一时间提供优质服务",
                    jumps: {
                        jumpItemA: {
                            title: "下载KEK CA证书",
                            english: "Download KEK CA certificate"
                        },
                        jumpItemB: {
                            title: "下载DB CA证书",
                            english: "Download DB CA certificate"
                        },
                        jumpItemC: {
                            title: "下载DBT CA证书",
                            english: "Download DBT CA certificate"
                        },
                        jumpItemD: {
                            title: "下载DBX文件",
                            english: "Download DBX certificate"
                        },
                        jumpItemE: {
                            title: "申请SHIM/EFI\n驱动程序文件签名",
                            english: "Apply for SHIM/EFI driver file signature"
                        }
                    }
                }
            },
            tabItemB: {
                title: "安全启动认证证书", // 第二个Tab切换子级中文标题
                english: "Safe Start Certificate" // 第二个Tab切换子级英文
            },
            tabItemC: {
                title: "SHIM/EFI驱动程序文件签名", // 第三个Tab切换子级中文标题
                english: "SHIM/EFI driver file signature" // 第三个Tab切换子级英文
            }
        }
    },
    language: {
        zh: '中文',
        en: 'English',
    },
}
export default zh;
