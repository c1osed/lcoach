<template>
    <el-menu
            background-color="#393D49"
            text-color="#CCC"
            active-text-color="#009688"
            router>
        <!-- 左侧导航栏抽取循环部分 将路由列表传给子组件-->
        <aside-bar-item
                v-for="router in routers"
                :router="router"
                :key="router.path"
        >
            </aside-bar-item>
    </el-menu>
</template>

<script>
import AsideBarItem from './AsideBarItem'
export default {
  name: 'BackSideMenu',
  components:{
    AsideBarItem
  },

  methods: {
    handleOpen(key, keyPath) {
      //点击打开时当前的路径
      //console.log(key, keyPath, 'handleOpen');
    },
    handleClose(key, keyPath) {
      //console.log(key, keyPath, 'handleClose');
    }
  },
  computed: {
    routers () {
      //console.log(this.$router.options)
      //this.$router.options获取路由列表
      return this.$router.options.routes[1].children
    }
  },
}
</script>

<style scoped>
    .el-menu {
        background-color:#009688;
        width: 100%;
        height: 100%;
    }

</style>
