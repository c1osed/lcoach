<template>
    <el-card class="box-card" shadow="always">
        <!--    老师列表页面-->
        <el-table :data="teacherslist" border style="width:100%" :row-class-name="tableRowClassName">
            <el-table-column type="index" label="序号"   fixed="left" width="50">
            </el-table-column>
            <el-table-column prop="name" label="老师姓名" fixed="left" width="180">
            </el-table-column>
            <el-table-column prop="password" label="密码" width="180">
            </el-table-column>
            <el-table-column prop="subject" label="老师所教科目" width="180">
            </el-table-column>
            <el-table-column prop="header"  label="我的头像" width="180">
<!--                <template slot-scope="scope">-->
<!--                    {{scope.row.birthday | dataFormat}}-->
<!--                </template>-->
            </el-table-column>
            <el-table-column prop="tefl" label="教师资格证照片" width="180">
            </el-table-column>
            <el-table-column prop="identity" label="身份份证照片" width="180">
            </el-table-column>
            <el-table-column prop="profile" label="个人简介" width="180">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="180">
            </el-table-column>
            <el-table-column prop="birthday" label="出生日期" width="180">
                <template slot-scope="scope">
                                        {{scope.row.birthday | dataFormat}}
                </template>
            </el-table-column>
            <el-table-column prop="is_accreditation" label="是否认证" width="180">
            </el-table-column>
            <el-table-column prop="price" label="课时单价" width="180">
            </el-table-column>
            <el-table-column prop="experience" label="教学经验" width="180">
            </el-table-column>
            <el-table-column prop="teaching_age" label="教龄" width="180">
            </el-table-column>
            <el-table-column prop="harvest" label="收获课时" width="80">
            </el-table-column>
            <el-table-column prop="teachers_leisure" label="教师闲时" width="180">
            </el-table-column>
            <el-table-column prop="appointment_time" label="被约课时" width="180">
            </el-table-column>
            <el-table-column label="操作"  width="180" fixed="right">
                <template slot-scope="scope">
<!--                    修改按钮-->
                    <el-tooltip content="修改老师信息" placement="top" :enterable="false">
                        <el-button type="primary" icon="el-icon-edit" size="medium" @click="showEditDialog(scope.row.id)"></el-button>
                    </el-tooltip>
<!--                    删除按钮-->
                    <el-tooltip content="删除老师信息" placement="top" :enterable="false">
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
        <el-dialog title="修改老师信息" :visible.sync="EditdialogVisible" width="50%" @close="editFormClose()">
            <el-form :model="EditForm" :rules="Editrule" ref="EditFormref" label-width="70px">
                <el-form-item label="老师名称">
                    <el-input v-model="EditForm.name" disabled></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="EditForm.password"></el-input>
                </el-form-item>
<!--                <el-form-item label="地址" prop="subject">-->
<!--                    <el-input v-model="EditForm.address"></el-input>-->
<!--                </el-form-item>-->
                <el-form-item label="老师所教科目" prop="subject" >
                    <el-input v-model="EditForm.subject"></el-input>
<!--                    <el-date-picker-->
<!--                            v-model="EditForm.birthday"-->
<!--                            type="date"-->
<!--                            value-format="yyyy-MM-dd"-->
<!--                            placeholder="选择日期">-->
<!--                    </el-date-picker>-->
<!--                    <el-input v-model="EditForm.birthday"></el-input>-->
                </el-form-item>
                <el-form-item label="我的头像" prop="header">
                    <el-input v-model="EditForm.header"></el-input>
                </el-form-item>
                <el-form-item label="教师资格证照片" prop="tefl">
                    <el-input v-model="EditForm.tefl"></el-input>
                </el-form-item>
                <el-form-item label="身份份证照片" prop="identity">
                    <el-input v-model="EditForm.identity"></el-input>
                </el-form-item>
                <el-form-item label="个人简介" prop="profile">
                    <el-input v-model="EditForm.profile"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="sex">
                    <el-input v-model="EditForm.sex"></el-input>
                </el-form-item>
                <el-form-item label="出生日期" prop="birthday">
<!--                    <el-input v-model="EditForm.birthday"></el-input>-->
                                        <el-date-picker
                                                v-model="EditForm.birthday"
                                                type="date"
                                                value-format="yyyy-MM-dd"
                                                placeholder="选择日期">
                                        </el-date-picker>

                </el-form-item>
                <el-form-item label="是否认证" prop="is_accreditation">
                    <el-input v-model="EditForm.is_accreditation"></el-input>
                </el-form-item>
                <el-form-item label="课时单价" prop="price">
                    <el-input v-model="EditForm.price"></el-input>
                </el-form-item>
                <el-form-item label="教学经验" prop="experience">
                    <el-input v-model="EditForm.experience"></el-input>
                </el-form-item>
                <el-form-item label="教龄" prop="teaching_age">
                    <el-input v-model="EditForm.teaching_age"></el-input>
                </el-form-item>
                <el-form-item label="收获课时" prop="harvest">
                    <el-input v-model="EditForm.harvest"></el-input>
                </el-form-item>
                <el-form-item label="教师闲时" prop="teachers_leisure">
                    <el-input v-model="EditForm.teachers_leisure"></el-input>
                </el-form-item>
                <el-form-item label="被约课时" prop="appointment_time">
                    <el-input v-model="EditForm.appointment_time"></el-input>
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
  name: 'teacherslist',
  data () {
    return {
      queryInfo: {
        pn: 1,
        pagesize:5
      },
      teacherslist:[],
      total:0,
      // 老师的数据
      EditForm :{},
      // 控制修改用户对话框
      EditdialogVisible: false,
      Editrule: {
        name:[{required: true}],
        password:[
          { required: true,message :"请输入密码",trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        subject:[],
        header:[],
        tefl:[],
        identity:[],
        profile:[],
        sex:[],
        birthday:[],
        is_accreditation:[],
        price:[],
        experience:[],
        teaching_age:[],
        harvest:[],
        teachers_leisure:[],
        appointment_time:[]
      }
    }
  },
  created () {
    this.loadTeachers()
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
      this.loadTeachers()
    },
    //监听页码值改变事件
    handleCurrentChange(newpn) {
      // console.log(newpage);
      this.queryInfo.pn=newpn;
      this.loadTeachers()
    },
    loadTeachers () {
      this.$axios.get('/teachers', {params: this.queryInfo}).then(resp => {
        console.log(resp);
          if(resp.data.code==200){
            this.teacherslist=resp.data.data.list;
            this.total = resp.data.data.total;
          }
      })
    },
    showEditDialog(id){
      console.log(id);
      this.EditdialogVisible=true;
      this.$axios.get('/teachers/'+id).then(resp=>{
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
          this.$axios.put('/teachers',{
           id: this.EditForm.id,
            name:this.EditForm.name,
            password :this.EditForm.password,
            address : this.EditForm.subject,
            birthday : this.EditForm.header,
            school: this.EditForm.tefl,
            lesson: this.EditForm.identity,
            phone: this.EditForm.sex,
            parentsPhone: this.EditForm.birthday,
            qq: this.EditForm.profile,
            profile: this.EditForm.is_accreditation,
            price: this.EditForm.price,
            experience: this.EditForm.experience,
            harvest: this.EditForm.harvest,
            teaching_age: this.EditForm.teaching_age,
            teachers_leisure: this.EditForm.teachers_leisure,
            appointment_time: this.EditForm.appointment_time,
          }).then(resp=>{
            if(resp.data.code!==200){
              this.$message.error('修改用户失败')
            }else{
              this.$message.success('修改用户成功')
              // console.log(this.EditForm.id);
              this.EditdialogVisible = false;
              this.loadTeachers();
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
        this.$axios.delete('/teachers/'+id).then(resp => {
          console.log(resp);
          if(resp.data.code==200){
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.loadTeachers();
          }else {
            this.$message.error('删除用户失败');
            this.loadTeachers();
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
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
