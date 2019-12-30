<template>
    <el-menu
            background-color="White"
            text-color="#CCC"
            active-text-color="#f4664b"
            router>
        <el-menu-item index="/wdxsqb">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
        </el-menu-item>
        <el-menu-item index="/wdxszs">
            <i class="el-icon-location"></i>
            <span slot="title">正式辅导</span>
        </el-menu-item>
        <el-menu-item index="/wdxsst">
            <i class="el-icon-document"></i>
            <span slot="title">试听辅导</span>
        </el-menu-item>
    </el-menu>
</template>

<script>

export default {
  name: 'Wdxs',
}
</script>

<style scoped>
    .el-menu-item {
        margin-top: 30px;
        /*margin-left: 100px;*/
    }

    .el-menu {
        margin-top: 20px;
        background-color: #222222;
        width: 200px;
        height: 600px;
        margin-left: 90px;
    }

</style>
