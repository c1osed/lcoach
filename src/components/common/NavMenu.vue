<template>
    <el-menu :default-active="'/wdxs'" mode="horizontal" router
             background-color="#0ac4ff"
             text-color="#fff"
             active-text-color="#ffd04b">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
        </el-menu-item>
        <div class="wdxx">
            <img class="header" src="../../assets/登陆背景.gif">
            <div>
<!--                <a-dropdown>-->
<!--                    <a class="ant-dropdown-link" @click="onClickTwo"> Hover me, Click menu item-->
<!--&lt;!&ndash;                        <a-icon type="down" /> &ndash;&gt;-->
<!--</a>-->
<!--                    <a-menu slot="overlay" @click="onClick">-->
<!--                        <a-menu-item key="1">1st menu item</a-menu-item>-->
<!--                        <a-menu-item key="2">2nd menu item</a-menu-item>-->
<!--                        <a-menu-item key="3">3rd menu item</a-menu-item>-->
<!--                    </a-menu>-->
<!--                </a-dropdown>-->
            </div>
        </div>
    </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: '　首页　'},
        {name: '/wdkb', navItem: '我的课表'},
        {name: '/wdxs', navItem: '我的学生'},
        {name: '/lskc', navItem: '历史课程'},
        {name: '/teacherplan', navItem: '教学规划'}
      ]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      //返回
      // 0: "/wdxs"
      // length: 1
      console.log(key, keyPath)
      this.$router.push(key)
    },
    onClick({ key }) {
      this.$message.success(`点击了第 ${key} 个下拉菜单`)
    },
    onClickTwo() {
      this.$message.success("点击了一下链接")
    }
  }
}
</script>
<style scoped>
    @import "../../assets/css/Home.css";
    /*.el-menu :first-child {*/
    /*    margin-left: 30%;*/
    /*}*/
    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;
    }
    .spanStyle{
        white-space: nowrap;  /*强制span不换行*/
        display: inline-block;  /*将span当做块级元素对待*/
        /*width: 32px;  !*限制宽度*!*/
        /*overflow: hidden;  !*超出宽度部分隐藏*!*/
        /*text-overflow: ellipsis;  !*超出部分以点号代替*!*/
        /*line-height: 0.9;  !*数字与之前的文字对齐*!*/
        /*margin: 0 auto;*/
        margin-left: 0px;
        font-size: 12px;
    }
    .el-menu{
        padding-left: 30%;
    }
    .wdtx {
        display: flex;
        float: right;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        width: 80px;
        margin-right:0px;;
        height: 60px;

        /*display: table-cell;*/
        /*text-align: center;*/
        /*vertical-align: middle;*/
        /*    水水水水水水水水水水水水水水水水水水水*/
        /*    background: #ffff00;*/
        /*    float:right;*/
        /*    width:104px;*/
        /*    height:60px;*/
        /*    position:absolute;*/
        /*//父元素要相对定位*!*!*/
        /*    left:90%;*/
        /*    top:50%;*/
        /*    transform: translate(-50%,-50%);*/
        /*未知宽高*/
        /*margin:auto;*/
        /*left:0;*/
        /*right:0;*/
        /*top:0;*/
        /*bottom:0;*/
    }

     .header {
        width: 37px;
        height: 36px;
        /*float: left;*/
         margin: 0px;
        /*border-radius: 50%;*/
        /*float: right;*/
        /*margin-left: 0px;*/

    }

    .wdxx {
        display: flex;
        float: right;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        margin-right: 160px;
        width: 120px;
        height: 60px;
        /*display: table-cell;*/
        /*text-align: center;*/
        /*vertical-align: middle;*/

    }
    .el-dropdown{
        margin: 0 auto;
    }

</style>
