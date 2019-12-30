<template>
    <div>
        <table class="table table-bordered table-striped table-sm" style="height: 100px">
            <thead>
            <tr>
                <th>时间</th>
                <th v-for="i in 7">
                    {{days[i-1]}}
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="i,index in info">
                <th scope="row">{{index}},{{times[index]}}</th>
                <td class="mytd" v-for="j in i" v-if="j" :rowspan="j==1? 1:j['time']"
                    :class=" {cell:j&&j!=1&&j.pass,cell2:j&&j!=1&&!j.pass}">
                    {{j?j.subject:''}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import {days, times, meeting} from '../../assets/js/xssz'
import '../../assets/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.css'

export default {
  name: 'Index',
  mounted () {
    // 根据预约信息数组，处理成表格可以使用的形式
    // 预约信息是该周每天的预约情况，0-6表示星期一到星期天
    let info = []
    for (let i of meeting) {
      for (let j of i) {
        console.log(j)
      }
    }
    for (let i = 0; i < 33; i++) {
      info[i] = []
      for (let j = 0; j < 7; j++) {
        // 1 表示空白
        info[i].push(1)
      }
    }

    for (let i = 0; i < 7; i++) {
      // m 表示第i天所有活动的集合
      // cnt 表示第i天活动数目
      let m = meeting[i]
      for (let k of m) {
        info[k.start][i] = k
        for (let p = 1; p < k.time; p++) {
          info[k.start + p][i] = null
        }
      }
    }
    console.log(info)
    this.info = info
  }
  ,
  computed: {}
  ,
  data () {

    return {
      info: [],
      days: days,
      times: times,
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .cell {
        /*width: 100%;*/
        /*height: 100%;*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        align-items: center;
        vertical-align: middle;
        background: lightskyblue;
        box-sizing: border-box;
    }

    .cell2 {
        background: greenyellow;
        box-sizing: border-box;
    }

    tbody * {
        padding: 0;
    }

    .mytd:hover {
        /*background: red;*/
        border: 2px solid blue;
    }

</style>
