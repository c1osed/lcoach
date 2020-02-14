<template>
    <div class="example-container">
            
        <el-breadcrumb separator="/">
                  
            <el-breadcrumb-item
                            v-for="(item,index) in breadList"
                            :key="index"
                            :to="{ path: item.path }">
                {{item.name}}
            </el-breadcrumb-item>
                
        </el-breadcrumb>
          
    </div>
</template>
<script>
export default {
  data() {
    return {
      breadList: [] // 路由集合
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    isHome(route) {
      return route.name === "homeback";
    },
    getBreadcrumb() {
      let matched = this.$route.matched;
      //如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: "/homeback", meta: { title: "首页" } }].concat(matched);
      }
      this.breadList = matched;
    }
  },
  created() {
    this.getBreadcrumb();
  }
}
</script>
<style scoped>
    .example-container{
        width: 100%;
        height: 50px;
        box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04);
    }
    .el-breadcrumb{
        width: 100%;
        height:100%;
        line-height: 50px;
    }
</style>
