<template>
    <el-container>
        <el-aside >
            <wdxs-side-menu></wdxs-side-menu>
        </el-aside>
            <el-main><router-view></router-view></el-main>
<!--        <el-footer></el-footer>-->
    </el-container>


</template>

<script>
import WdxsSideMenu from './WdxsSideMenu'
export default {
  name: 'Wdxs',
  components:{WdxsSideMenu}
}
</script>

<style scoped>
    .el-aside{
        margin-left: 70px;
    }
    .el-main{
        background-color: white;
        margin-top: 20px;
        margin-right: 160px;
    }
   

</style>
