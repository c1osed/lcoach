<template>
    <el-container>
        <el-aside >
            <wdxs-side-menu></wdxs-side-menu>
        </el-aside>
            <el-main>Main</el-main>
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

</style>
