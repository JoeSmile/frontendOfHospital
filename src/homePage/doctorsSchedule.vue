<style lang="scss">
    #doctorsSchedule{
        font-size:1.6rem;
        .scheduleItem{
            display: flex;
            height: 7rem;
            div{
                padding-left: 1rem;
                padding-top: 2rem;
            }
        }
        li{
            border-bottom: 1px solid;    
        }
        li .scheduleItem:first-child{
            border-bottom: 1px solid #838383;
        }
        
    }
</style>

<template>
    <div id='doctorsSchedule'>
        <ul>
            <li v-for='index in amSchedule.length'>
                <scheduleItem title='上午' :schedule='amSchedule[index-1]' v-on:showDetail='showDetailDig'/>
                <scheduleItem title='下午' :schedule='pmSchedule[index-1]' v-on:showDetail='showDetailDig'/>
            </li>
        </ul>
        <!--通用-->
        <my-dialog :show='showDialog' :cbClose='closeDialog'>
            <p slot="title" class='title'>挂号提醒</p>
            <div slot='content' class='content'>
                <p>就诊人:{{}}</p>
                <p>就诊科室:</p>
                <p>就诊医生:</p>
                <p>费用:</p>
                <p>就诊日期:</p>
                <p>就诊时间段:</p>
            </div>
            <div slot='button' class='button'>
                <button @click='closeDialog'>确定</button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';

    var scheduleItem = {
        props:['schedule','title'],
        template: `<div class='scheduleItem' v-on:click='doShowDetail'>
                        <div class='left' style='flex:1'>
                            <p class='date'>{{schedule.yydjsj.substr(0,10)}}</p>
                            <p class='time'>{{title}}</p>
                        </div>
                        <div class='middle' style='flex:1'>
                            <p class='name'>医生:{{schedule.czyxm}}</p>
                            <p class='apartment'>科室:{{schedule.ksmc}}</p>
                        </div>
                        <div class='right' style='flex:1'>
                            <p class='remain'>余:{{schedule.xhzs}}</p>
                            <p class='price'>单价:{{schedule.fydj}}</p>
                        </div>
                    </div>`,
        methods:{
           doShowDetail(){
               this.$emit('showDetail',this.schedule);
           }
        }
    }

    export default {
        data: function () {
            return {
                showDialog:false,
                amSchedule:[],
                pmSchedule:[]
            }
        },
        components:{
            chipItem,
            scheduleItem
        },
        methods:{
             showDetailDig(data){
                 this.showDialog = true;
                 console.dir(data);
            },
            closeDialog(){

            },

        },
        mounted(){
           this.amSchedule = this.$store.getters.doctorSchedule.swpb;
           this.pmSchedule = this.$store.getters.doctorSchedule.xwpb;
        }
    }   
</script>