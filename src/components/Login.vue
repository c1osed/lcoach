<template>
    <div class="login_container">
        <div class="login_box">
            <!--            头像区域-->
            <div class="avatar-box">
                <img src="../assets/avatar.jpeg">
            </div>
            <!--            登陆表单区域-->
            <el-form ref="loginFormRef" label-width="0px" class="login_form" :model="loginForm" :rules="loginFormRules">
                <!--                用户名-->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <!--                密码-->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-goods" type="password"></el-input>
                </el-form-item>
                <!--                按钮区域-->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登陆</el-button>
                    <el-button type="info" @click="resetForm('loginFormRef')">重置</el-button>
                </el-form-item>
            </el-form>


        </div>

    </div>


</template>

<script>
export default {
  name: 'Login',
  data () {
    return{
      //这是登陆表单的数据对象
      loginForm:{
        username:'',
        password:''
      },
      //这是登陆表单的验证规则
      loginFormRules:{
        username: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 10个字符', trigger: 'blur'}
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur'},
        ]
      }
    };

  },
  methods:{
    // 重置方法
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
 //登陆方法
    login(){
      this.$refs.loginFormRef.validate(valid=>{
        console.log(valid);
        if(!valid) { this.$message.error('错了哦，登录失败');}else{
          this.$axios.post('/studentlogin',{username:this.loginForm.username,password :this.loginForm.password}).then(successResponse=>{
            // if(successResponse.data==200){}
            console.log(successResponse);
          }).catch(failResponse=>{
          });


          // //编程式导航跳转到后台主页，路由地址是home
          // this.$router.push("/home")
          // this.$message({
          //   message: '恭喜你，登陆成功',
          //   type: 'success'
          // });
        }


      });
    }
  },
}
</script>

<style scoped>

</style>
