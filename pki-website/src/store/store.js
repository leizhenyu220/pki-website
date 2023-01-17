import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex);
// 创建公共仓库
export default new vuex.Store({
    state: { // Vuex状态
        sign: "", // 如果用户已登录，导航栏登录按钮显示用户名
        signName: "", // 显示的已登录用户名
        tabsAggregate: [], // 所有Tabs下边的子级集合
        crumbsOneActive: "", // 面包屑一级高亮下标
        crumbsOneActiveJump: "", // 面包屑一级跳转链接
        crumbsActive: "", // 面包屑二级高亮下标
        crumbsActiveJump: "", // 面包屑二级跳转链接
        crumbsOne: "", // 第一级面包屑显示开关
        crumbsSwitch: false, // 第三级面包屑显示开关
        listIndex: 0, // 点击新闻列表或案例列表的下标
        listActiveName: "", // 点击新闻列表或案例列表的标题
        list: [], // 新闻列表或案例列表
    },
    getters: { // 计算属性，相当于组件页面中的Computed
        listIndex: state => state.listIndex,
        listName: state => state.listActiveName,
        list: state => state.list
    },
    mutations: { // 数据方法集合
        setTabsMenusAggregateValue(state, name) {
            state.tabsAggregate = name[0] // 页面返回的所有Tabs下边的子级集合
            state.crumbsActive = name[1] // 页面返回的所有Tabs下边的子级集合
            state.crumbsOneActive = name[2] // 页面返回的导航栏一级导航名称
            state.crumbsOneActiveJump = name[3] // 页面返回的一级面包屑跳转链接
        },
        setTabsMenusOneValue(state, name) {
            state.crumbsOne = name
        },
        setDetailsIndexValue(state, name) {
            state.listIndex = name[0] // 点击新闻列表或案例列表的下标
            state.listActiveName = name[1] // 点击新闻列表或案例列表的标题
            state.list = name[2] // 新闻列表或案例列表
            //console.log(name)
        },
        setSwitchValue(state, name) {
            state.crumbsSwitch = name // 第三级面包屑显示开关
        },
        setLoginValue(state, name) {
            state.loginSign = name[0] // 如果用户已登录，导航栏登录按钮显示用户名
            state.loginSignName = name[1] // 显示的已登录用户名
        }
    },
    actions: { // 异步请求的数据方法集合
        setTabsActiveValue({commit}, name) {
            commit("setTabsMenusAggregateValue", name) // 页面返回的所点击的一级导航、二级导航和当前面包屑高亮标题
        },
        setTabsOneValue({commit}, name) {
            commit("setTabsMenusOneValue", name) // 页面返回的所点击的一级导航、二级导航和当前面包屑高亮标题
        },
        setNewsCaseDetailsValue({commit}, name) {
            commit("setDetailsIndexValue", name) // 页面返回的所点击的一级导航、二级导航和当前面包屑高亮标题
        },
        setNewsCaseSwitchValue({commit}, name) {
            commit("setSwitchValue", name) // 页面返回的所点击的一级导航、二级导航和当前面包屑高亮标题
        },
        setLoginSignValue({commit}, name) {
            commit("setLoginValue", name) // 页面返回的所点击的一级导航、二级导航和当前面包屑高亮标题
        }
    },
    modules: { // 模块化

    }
})
