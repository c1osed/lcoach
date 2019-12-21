<template>
    <el-menu
            background-color="White"
            text-color="#CCC"
            active-text-color="#f4664b">
        <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
        </el-menu-item>
        <el-menu-item index="1">
            <i class="el-icon-location"></i>
            <span slot="title">正式辅导</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">试听辅导</span>
        </el-menu-item>
        <el-menu-item>
            <span></span>
        </el-menu-item>
        <el-menu-item >
            <span></span>
        </el-menu-item>
        <el-menu-item>
            <span></span>
        </el-menu-item>
    </el-menu>
</template>

<script>

export default {
  name: 'Wdxs',
}
</script>

<style scoped>
    html,body,#app{
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .el-menu-item{
        margin-top: 30px;
    }.el-menu{
        background-color:#222222;
         }

</style>
