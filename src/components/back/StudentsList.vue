<template>
    <el-card class="box-card" shadow="always">
        <!--    学生列表页面-->
        <el-table :data="studentslist" border style="width:100%" :row-class-name="tableRowClassName">
            <el-table-column type="index" label="序号" width="50">
            </el-table-column>
            <el-table-column prop="name" label="学生姓名" width="100">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="100">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="100">
            </el-table-column>
            <el-table-column prop="birthday"  label="生日" width="100">
                <template slot-scope="scope">
                    {{scope.row.birthday | dataFormat}}
                </template>
            </el-table-column>
            <el-table-column prop="school" label="学校" width="100">
            </el-table-column>
            <el-table-column prop="lesson" label="课程" width="100">
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="100">
            </el-table-column>
            <el-table-column prop="parentsPhone" label="父母电话" width="100">
            </el-table-column>
            <el-table-column prop="qq" label="qq" width="100">
            </el-table-column>
            <el-table-column prop="profile" label="个人简介" width="180">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
<!--                    修改按钮-->
                    <el-tooltip content="修改学生信息" placement="top" :enterable="false">
                        <el-button type="primary" icon="el-icon-edit" size="medium" @click="showEditDialog(scope.row.id)"></el-button>
                    </el-tooltip>
<!--                    删除按钮-->
                    <el-tooltip content="删除学生信息" placement="top" :enterable="false">
                        <el-button type="danger" icon="el-icon-delete" @click="deleteStudentById(scope.row.id)" size="medium "></el-button>
                    </el-tooltip>
                </template>
            </el-table-column>
        </el-table>
            <!--    分页区域-->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="queryInfo.pn"
                :page-sizes="[1, 2, 3, 4,5]"
                :page-size="queryInfo.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                background
                :total="total">
        </el-pagination>
<!--        操作区域-->
        <el-dialog title="修改学生信息" :visible.sync="EditdialogVisible" width="50%" @close="editFormClose()">
            <el-form :model="EditForm" :rules="Editrule" ref="EditFormref" label-width="70px">
                <el-form-item label="学生名称">
                    <el-input v-model="EditForm.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="EditForm.password"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="EditForm.address"></el-input>
                </el-form-item>
                <el-form-item label="生日" prop="birthday" >
                    <el-date-picker
                            v-model="EditForm.birthday"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择日期">
                    </el-date-picker>
<!--                    <el-input v-model="EditForm.birthday"></el-input>-->
                </el-form-item>
                <el-form-item label="学校" prop="school">
                    <el-input v-model="EditForm.school"></el-input>
                </el-form-item>
                <el-form-item label="课程" prop="lesson">
                    <el-input v-model="EditForm.lesson"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="EditForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="父母电话" prop="parentsPhone">
                    <el-input v-model="EditForm.parentsPhone"></el-input>
                </el-form-item>
                <el-form-item label="qq" prop="qq">
                    <el-input v-model="EditForm.qq"></el-input>
                </el-form-item>
                <el-form-item label="个人简介" prop="profile">
                    <el-input v-model="EditForm.profile"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
    <el-button @click="EditdialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('EditFormref')">确 定</el-button>
  </span>
        </el-dialog>

    </el-card>



</template>


<script>

export default {
  name: 'studentslist',
  data () {
    return {
      queryInfo: {
        pn: 1,
        pagesize:5
      },
      studentslist:[],
      total:0,
      // 学生的数据
      EditForm :{},
      // 控制修改用户对话框
      EditdialogVisible: false,
      Editrule: {
        username:[{required: true}],
        password:[
          { required: true,message :"请输入密码",trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        address:[],
        birthday:[],
        school:[],
        lesson:[],
        phone:[],
        parentsPhone:[],
        qq:[],
        profile:[]
      }
    }
  },
  created () {
    this.loadStudents()
  },
  methods: {
    tableRowClassName({rowIndex}) {
      if (rowIndex%2===0) {
        return 'warning-row';
      } else if (rowIndex % 2===1) {
        return 'success-row';
      }
      return '';
    },
    //监听pagesize改变事件
    handleSizeChange(pagesize) {
      // console.log(pagesize);
      this.queryInfo.pagesize=pagesize;
      this.loadStudents();
    },
    //监听页码值改变事件
    handleCurrentChange(newpn) {
      // console.log(newpage);
      this.queryInfo.pn=newpn;
      this.loadStudents();
    },
    loadStudents () {
      this.$axios.get('/students', {params: this.queryInfo}).then(resp => {
        console.log(resp);
          if(resp.data.code==200){
            this.studentslist=resp.data.data.list;
            this.total = resp.data.data.total;
          }
      })
    },
    showEditDialog(id){
      console.log(id);
      this.EditdialogVisible=true;
      this.$axios.get('/students/'+id).then(resp=>{
        if(resp.data.code!==200){
          this.$message.error('查询用户失败')
        }
        console.log(resp);
        this.EditForm = resp.data.data;


      })
      //
    },
    editFormClose(){
      this.$refs.EditFormref.resetFields();
    },
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
         // alert('submit!');
          this.$axios.put('/students',{
           id: this.EditForm.id,
            name:this.EditForm.name,
            password :this.EditForm.password,
            address : this.EditForm.address,
            birthday : this.EditForm.birthday,
            school: this.EditForm.school,
            lesson: this.EditForm.lesson,
            phone: this.EditForm.phone,
            parentsPhone: this.EditForm.parentsPhone,
            qq: this.EditForm.qq,
            profile: this.EditForm.profile,
          }).then(resp=>{
            if(resp.data.code!==200){
              this.$message.error('修改用户失败')
            }else{
              this.$message.success('修改用户成功')
              // console.log(this.EditForm.id);
              this.EditdialogVisible = false;
              this.loadStudents();
            }
          })


        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    deleteStudentById(id){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$axios.delete('/students/'+id).then(resp => {
          console.log(resp);
          if(resp.data.code==200){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.loadStudents();
          }else {
            this.$message.error('删除用户失败');
            this.loadStudents();
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });


      // this.$axios.delete('/students'+id).then(resp => {
      //   console.log(resp);
      //   if(resp.data.code==200){
      //     this.message.error("删除成功");
      //     this.loadStudents();
      //   }
      // })


    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .el-pagination{
        white-space: nowrap;
        margin-top: 20px;
        /*padding: 2px 5px;*/
        color: #303133;
        font-weight: 700;
        float: right;
    }
    .el-card{
        width: 100%;
        height: 100%;
    }
    .el-table .warning-row {
        background:#fff;
    }

    .el-table .success-row {
        background:#FAFAFA;
    }

</style>
