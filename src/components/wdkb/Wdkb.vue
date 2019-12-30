<template>
    <el-container>
        <el-main>
            <el-calendar v-model="value" id="calendar">
                <template
            slot="dateCell"
            slot-scope="{date, data}">
            <!--自定义内容-->
            <div>
                <div class="calendar-day">{{ data.day.split('-').slice(2).join('-') }}</div>
                <div v-for="item in calendarData">
                    <div v-if="(item.months).indexOf(data.day.split('-').slice(1)[0])!=-1">
                        <div v-if="(item.days).indexOf(data.day.split('-').slice(2).join('-'))!=-1">
                            <el-tooltip class="item" effect="dark" :content="item.things" placement="right">
                                <div class="is-selected">{{item.things}}</div>
                            </el-tooltip>
                        </div>
                        <div v-else></div>
                    </div>
                    <div v-else></div>
                </div>
            </div></template>
            </el-calendar>
        </el-main>
    </el-container>
</template>

<script>

export default {
  name: 'Wdkb',
  data () {
    return {
      calendarData: [
        {months: ['09', '11'], days: ['15'], things: '看电影'},
        {months: ['10', '11'], days: ['02'], things: '去公园野炊'},
        {months: ['11'], days: ['02'], things: '看星星'},
        {months: ['11'], days: ['02'], things: '看月亮'}
      ],
      value: new Date()
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-main{
        margin-right: 140px;
        margin-left: 140px;
    }
    .calendar-day {
        text-align: center;
        color: #202535;
        line-height: 30px;
        font-size: 12px;
    }
    .is-selected {
        color: #F8A535;
        font-size: 10px;
        margin-top: 5px;
    }
    #calendar .el-button-group > .el-button:not(:first-child):not(:last-child):after {
        content: '当月';
    }

</style>
