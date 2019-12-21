<template>
    <div>
        <nav-menu></nav-menu>
<!--        可以显示子控件但是要注册-->
        <router-view/>
    </div>
</template>

<script>
import NavMenu from './common/NavMenu';
export default {
  name: 'Home',
  components:{NavMenu}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
