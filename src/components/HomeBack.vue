<template>
    <div>
        <el-container>
            <el-header>
                <nav-back-menu></nav-back-menu>
            </el-header>
            <el-container>
                <el-aside class="as"><back-side-menu></back-side-menu></el-aside>
                <el-main>
                    <breadcrumb></breadcrumb>
                    <app-main></app-main>
<!--                    <router-view></router-view>-->
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Breadcrumb from './common/Breadcrumb'
import NavBackMenu from './common/NavBackMenu'
import BackSideMenu from './home/BackSideMenu'
import AppMain from './common/AppMain'
export default {
  name: 'HomeBack',
  components:{NavBackMenu,BackSideMenu,Breadcrumb,AppMain}


}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,body,#app,.el-container{
        height: 100%;
        margin: 0px;
        padding: 0px;
        /*background-color:#Eff1F4;*/
        background-color: #fff;
    }
    .el-header{
        padding: 0 0;
    }
    /*解决样式不生效的问题*/
    .as{width: 200px !important;
    }
    .el-main{
        width: 100%;
        height: 100%;
        padding: 0;
        background-color: #fff;
        }
    .el-aside {
        /*display: block;*/
        /*position: relative;*/
        /*overflow-y: scroll;*/
        /*height: 100vh;*/
        /*自适应*/
        height: calc(100vh - 60px);
    }


</style>
