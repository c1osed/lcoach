<template>
    <el-menu :default-active="'/wdxs'" mode="horizontal" router
             background-color="#0ac4ff"
             text-color="#fff"
             active-text-color="#ffd04b">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>
        <a class="my" href="#">个人中心</a>
    </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data() {
    return {
      navList: [
      {name: '/index', navItem: '　首页　'},
      {name: '/wdkb', navItem: '我的课表'},
      {name: '/wdxs', navItem: '我的学生'},
      {name: '/lskc', navItem: '历史课程'},
      {name: '/index', navItem: '教学规划'}
    ]
  }
  },
  methods: {
    handleSelect (key, keyPath) {
      //返回
      // 0: "/wdxs"
      // length: 1
      console.log(key,keyPath);
       this.$router.push(key);
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/Home.css";
.el-menu-item{
    /*position: absolute;*/
    /*left: 1%;*/

}

</style>
