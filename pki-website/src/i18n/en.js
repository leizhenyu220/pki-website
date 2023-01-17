const en = {
    login: { /* 登录页 */
        welcome: 'Welcome to Website', // 欢迎访问标题
        welcomeTest: 'Download KEK CA certificate Download DB CA certificate, download DBT CA certificate, download DBX file, apply for SHIM/EFI driver file signature. Download KEK CA certificate Download DB CA certificate, download DBT\n' +
            '\n' +
            'CA certificate, download DBX file, apply for SHIM/EFI driver file signature download KEK CA certificate download DB CA certificate, download DBT CA certificate, download DBX file, apply for SHIM/EFI driver file signature download KEK CA certificate download DB\n' +
            '\n' +
            'CA certificate, download DBT CA certificate, download DBX file, apply for SHIM/EFI driver file label', // 网站介绍简介
        loginJumps: { // 登录页右上角跳转集合-首页
            home: "home", // 首页
            product: "Product introduction", // 产品介绍
            technical: "Service and support", // 服务与支持
            latest: "Latest developments", // 最新动态
            about: "About us", // 关于我们
        },
        loginTopBtns: {
            sign: "Sign in", // 登录
            register: "register" // 注册
        },
        /* 登录 */
        loginInput: { // 登录表单
            user: "Please enter user name/mobile number", // 请输入用户名/手机号
            password: "Please input a password", // 请输入密码
            verification: "Please enter the verification code" // 请输入验证码
        },
        loginMaxBtns: { // 表单下大按钮
            sign: "Sign in", // 登录
            register: "register" // 注册
        },
        forgotPassword: "Forgot password", // 忘记密码
        /* 注册 */
        registerInput: { // 注册表单
            user: "Please enter the account number",
            password: "Please input a password",
            passwordRepeatRrgisterInput: "Please confirm the password",
            enterpriseRrgisterInput: "Please enter the enterprise name",
            phone: "Please enter your mobile number",
            verification: "Please enter the verification code"
        }
    },
    home: { /* 首页 */
        navbar: { // LOGO + 导航栏 + 登录/注册/个人中心 + 搜索
            nav: {
                home: "home", // 首页
                product: "Product introduction", // 产品介绍
                technical: "Service and support", // 服务与支持
                technicalItem: { // 服务与支持-二级导航
                    kek: "Download KEK CA certificate", // 下载KEK CA证书
                    db: "Download DB CA certificate", // 下载DB CA证书
                    dbt: "Download DBT CA certificate", // 下载DBT CA证书
                    dbx: "Download DBX certificate", // 下载DBX证书
                    efi: "Apply for SHIM/EFI driver file signature" // 申请SHIM/EFI驱动程序文件签名
                },
                latest: "Latest developments", // 最新动态
                about: "About us", // 关于我们
                aboutItem: { // 关于我们-二级导航
                    about: "about", // 关于XX
                    qualificationsAndHonors: "Qualifications and honors", // 资质与荣誉
                    customerStories: "Customer stories", // 客户案例
                    contactUs: "contact us" // 联系我们
                }
            },
            signRegister: { // 登录/注册/个人中心页面入口
                out: "sign out", // 退出
                sign: "Sign in", // 登录
                register: "register", // 注册
                search: "Please enter content" // 点击搜索图标后，input占位文字
            }
        },
        slider: { // 大轮播图
            btn: "See more" // 按钮
        },
        tabs: { // Tab切换卡
            tabItemA: {
                title: "Signature service platform", // 第一个Tab切换子级中文标题
                english: "签名服务平台", // 第一个Tab切换子级英文
                tabItemContentA: {
                    contentTitle: "Service and support",
                    contentText: "Kirin Software provides a variety of technical service channels, including the 400 hotline, WeChat official account, service and support special mailbox, to provide customers with 7X24 hours of non-stop response and provide high-quality services at the first time",
                    jumps: {
                        jumpItemA: {
                            title: "Download KEK CA certificate",
                            english: "下载KEK CA证书"
                        },
                        jumpItemB: {
                            title: "Download DB CA certificate",
                            english: "下载DB CA证书"
                        },
                        jumpItemC: {
                            title: "Download DBT CA certificate",
                            english: "下载DBT CA证书"
                        },
                        jumpItemD: {
                            title: "Download DBX certificate",
                            english: "下载DBX文件"
                        },
                        jumpItemE: {
                            title: "Apply for SHIM/EFI driver file signature",
                            english: "申请SHIM/EFI\n驱动程序文件签名"
                        }
                    }
                }
            },
            tabItemB: {
                title: "Safe Start Certificate", // 第二个Tab切换子级中文标题
                english: "安全启动认证证书" // 第二个Tab切换子级英文
            },
            tabItemC: {
                title: "SHIM/EFI driver file signature", // 第三个Tab切换子级中文标题
                english: "SHIM/EFI驱动程序文件签名" // 第三个Tab切换子级英文
            }
        }
    },
    language: {
        zh: '中文',
        en: 'English',
    },
}
export default en;
