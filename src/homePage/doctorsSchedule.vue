<style lang="scss">
    #doctorsSchedule{
        font-size:1.7rem;
        .scheduleItem{
            display: flex;
            height: 7rem;
            background: white;
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
        div.content{
            li{
                border-bottom:none;
            }
        }
        ul.doctorList{
            p{
                text-align:center;
                margin-top: 2rem;
            }
        }
        ul.patientList, div.showAppointInfo{
            font-size: 1.7rem;
            color:black;
            li{
                display:flex;
                span{
                    text-align: left;
                    flex:1;
                }
                span.center{
                    text-align: center;
                }
            }
        }
    }
</style>

<template>
    <div id='doctorsSchedule'>
        <ul class='doctorList'>
            <li v-for='index in amSchedule.length'>
                <scheduleItem title='上午' :schedule='amSchedule[index-1]' v-on:showDetail='showDetailDig'/>
                <scheduleItem title='下午' :schedule='pmSchedule[index-1]' v-on:showDetail='showDetailDig'/>
            </li>
            <p v-if='amSchedule.length==0' class='center'>暂无数据！</p>
        </ul>
        <!--通用-->
        <my-dialog :show='showDialogPatient' :cbClose='closeDialogPatient'>
            <p slot="title" class='title'>选择就诊人</p>
            <div slot='content' class='content'>
                <ul class="patientList">
                    <li v-for='item in patient' @click='choosePatient(item)'><span class='center'>姓名:</span><span>{{item.brxm}}</span></li>
                </ul>
            </div>
        </my-dialog>
        <my-dialog :show='showDialog' :cbClose='closeDialog'>
            <p slot="title" class='title'>挂号提醒</p>
            <div slot='content' class='content showAppointInfo'>
                <li><span>就诊人:</span><span @click='showPaient'>{{selectedPatient.brxm}}</span></li>
                <li><span>就诊科室:</span><span>{{chooseOne.ksmc}}</span></li>
                <li><span>就诊医生:</span><span>{{chooseOne.czyxm}}</span></li>
                <li><span>费用:</span><span>{{chooseOne.ghfy}}</span></li>
                <li><span>就诊日期:</span><span>{{chooseOne.yydjsj&&chooseOne.yydjsj.substr(0,10)}}</span></li>
            </div>
            <div slot='button' class='button'>
                <button @click='closeDialog'>确定</button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import api from '../backend/api';
    import routerManager from '../routerManager';

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
                pmSchedule:[],
                chooseOne:{},
                showDialogPatient:false,
                patient:[],
                selectedPatient:{}
            }
        },
        components:{
            scheduleItem
        },
        methods:{
            showDetailDig(data){
                 this.chooseOne = data;
                 api.getCommonPatient('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                    this.$store.commit('SET_COMMON_PATIENT',JSON.parse(data));
                    this.patient = JSON.parse(data);
                    this.showDialogPatient = true;
                });
            },
            closeDialog(){
                this.showDialog = false;
            },
            closeDialogPatient(){
                this.showDialogPatient = false;
            },
            showPaient(){
                this.showDialogPatient = true;
            },
            closeDialogPatient(){
                this.showDialogPatient = false;
            },
            choosePatient(item){
                this.selectedPatient = item;
                this.closeDialogPatient();
                this.showDialog = true;
            }
        },
        mounted(){
           this.amSchedule = this.$store.getters.doctorSchedule.swpb;
           this.pmSchedule = this.$store.getters.doctorSchedule.xwpb;
        }
    }   
</script>