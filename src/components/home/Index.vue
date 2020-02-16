<template>
    <el-container>
        <el-main>
    <div class="aa">
        <FullCalendar defaultView="timeGridWeek" locale="zh-cn"
                      :button-text="{
                      prev: '上周', // ‹
                      next: '下周', // ›
                      prevYear: '前一年', // «
                       nextYear: '下一年', // »
                        today: '今天',
                           week:'周'
                                   }"
                      :slot-label-format="{
                                        minute: '2-digit',
                                         hour: '2-digit',
                                  hour12: false,
                                    meridiem:false
                      }"
                      :slot-event-overlap="false"
                      select-mirror="true"
                      slot-duration="00:30"
                      scrollTime='10:00:00'
                      min-time='08:00:00'
                      max-time='23:00:00'
                      :all-day-slot="false"
                      firstDay="1"
                      :unselect-auto="false"
                      :select-overlap="false"
                      height="auto"
                      :select-allow="handlerSeelctAllow"
                      weekNumberCalculation="ISO"
                      :eventTimeFormat="evnetTime"
                      :header="header"
                      selectable="true"
                      @dateClick="handleDateClick"
                      :plugins="calendarPlugins"
                      :events="calendarEvents"
                      @eventClick="handleEventClick"
                      @select="handleSelect"

        />

    </div>
        </el-main>
    </el-container>
</template>

<script>
import {days, times, meeting} from '../../assets/js/xssz'
import * as moment from 'moment';
import '@fullcalendar/core/locales/zh-cn'
import '../../assets/bootstrap/bootstrap-3.3.7-dist/css/bootstrap.css'
import timeGridPlugin from "@fullcalendar/timegrid";
import "@fullcalendar/timegrid/main.css";
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'Index',
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [
        dayGridPlugin,
        interactionPlugin, // needed for dateClick,
        timeGridPlugin
      ],
      // defaultView:"timeGridWeek",
      header: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        // right: 'dayGridMonth,timeGridWeek,timeGridDay'
        right:'timeGridWeek'
      },
      evnetTime: {
        // hour: 'numeric',
        minute: '2-digit',
        hour: '2-digit',
        hour12: false,
        meridiem:false
      },
      calendarEvents: [ // initial event data
        {
          title: '计算机学院小组会议',
          start: '2020-02-15 10:00:00',
          end: '2020-02-15 16:00:00',
          color:'orange'

        },
        { title: '部门会议', start: new Date() }
      ],
      handlerSeelctAllow: info => {
        const currentDate = new Date()
        const start = info.start
        const end = info.end
        const date1=moment(start);
        const date2=moment(end);
        const s  =date2.diff(date1, 'minute')
        console.log(s)
        return (start <= end && start >= currentDate&&s==120)
      }
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {
    handleDateClick(arg) {
      // if (confirm('您是否要在' + arg.dateStr + '添加一个新的事件?')) {
      //   this.calendarEvents.push({ // add new event data
      //     title: '新的事件',
      //     start: arg.date,
      //     allDay: arg.allDay
      //   })
      // }
    },
    handleEventClick(info) {
      alert('Event: ' + info.event.title);
      //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
      //alert('View: ' + info.view.type);
      // change the border color just for fun
      info.el.style.borderColor = 'red';
    },
    // 当选择结束的时候获取开始和结束时间
    handleSelect(info) {
      console.log('form' + info.startStr + ' to ' + info.endStr)
      if (confirm('您是要把' + info.dateStr +'和'+info.endStr +'时间段之间设置为空闲时间?')) {
          // this.calendarEvents.push({ // add new event data
          //   title: '新的事件',
          //   start: arg.date,
          //   allDay: arg.allDay
          // })
        }

    }

  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    tbody * {
        padding: 0;
    }
    .el-main{
        margin-right: 140px;
        margin-left: 140px;
        background-color: white;
        margin-top:20px;
        /*color: #fff;*/
    }
    .FullCalendar{
        height: auto !important;
    }
    aa{
        margin: 0 auto;
    }


</style>
