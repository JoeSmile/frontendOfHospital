<style lang="scss">
    #homePage{
        background: white;
        height: 100%;
        display: flex;
        flex-direction: column;
        #header{
            height: 15rem;
        }

        #footer,#content{
            flex:1;
        }

        #header{
            display: flex;
            .mainFunc{
                border-right: 1px solid #CCC;
                width: 10rem;
                .register{
                    height: 100%;
                    text-align: center;
                    .chipItem{
                        position: relative;
                        top: 1.5rem;
                        .name{
                            margin-top:0; 
                            font-size: 1.8rem;
                        }
                        .dic{
                            color: #838383;
                            margin-top: 0.5rem;
                            span{
                                display:block;
                            }
                        }
                    }
                }
             }

            .secondlyFunc{
                flex:1;
                .pay{
                    height: 50%;
                    border-bottom: 1px solid #CCC;
                    box-sizing: border-box;
                    .name{
                        top: 2rem;
                        left: 1rem;
                        font-size: 1.8rem;
                        position: relative;
                    }
                    .dic{
                        left: 1rem;
                        top: 2rem;
                        position: relative;
                        color: #838383;
                    }
                }
                .bindCard{
                    border-right:1px solid #CCC;
                }
                .bindCard,.checkAppointment{
                    padding-top: 1rem;
                    box-sizing:border-box;
                    text-align: center;
                    height: 50%;
                    width: 50%;
                    float: left;
                    display: inline-block;
                    .name{
                        margin-top: 0.5rem;
                    }
                }
            }
        }
        .carousel{
            padding: 1rem 0;
            background: #EEE;
            box-sizing: border-box;
            .one{
                background-size:cover !important; 
                background: url('../img/one.png') no-repeat center center;
            }
            .two{
                background-size:cover !important; 
                background: url('../img/two.png') no-repeat center center;
            }
            .three{
                background-size:cover !important; 
                background: url('../img/three.png') no-repeat center center;
            }
        }
        ul{
            height: 100%;
        }
        li.funcItem{
            width: 25%;
            display: inline-block;
            float: left;
            box-sizing: border-box;
            border: 1px solid;
            height: 50%;
            text-align: center;
        }
        /* 挂号 */
        .register_icon{
            margin: 0 auto;
            height: 6rem;
            width: 6rem;
            display: block;
            background-size: cover !important;
            background: url('../img/resigter.png') no-repeat center center;
        }
        .pay_icon{
            float: right;
            position: relative;
            top: 1.2rem;
            right: 2rem;
            height: 4rem;
            width : 4rem;
            background-size: cover !important;
            background: url('../img/pay.png') no-repeat center center;
        }
        .bindCard_icon,.checkAppointment_icon{
            height: 4rem;
            width: 4rem;
            margin: 0 auto;
            background-size: cover !important;
        }
        .bindCard_icon{
            margin-bottom: 0.5rem;
            background: url('../img/bindCard.png') no-repeat center center;
        }
        .checkAppointment_icon{
            background: url('../img/checkAppointment.png') no-repeat center center;
        }

        /* funcGroup */
        .funcGroup{
            .chipItem{
                width: 25%;
                float:left;
                height:8rem;
                display:inline-block;
                text-align: center;
                padding-top: 1rem;
                box-sizing: border-box;
                color: black;
            }
        }
    }
</style>

<template>
    <div id='homePage'>
        <section id='header'>
            <div class="mainFunc">
                <div class='register'>
                    <chipItem iconName='register_icon' name='挂号'>
                        <div class='dic' slot='dic'>
                            <span>足不出户快速挂</span>
                            <span>当日号和预约号</span>
                        </div>
                    </chipItem>
                </div>
            </div>
            <div class='secondlyFunc'>
                <div class="pay">
                    <chipItem iconName='pay_icon' name='缴费'>
                        <div class='dic' slot='dic'>
                            快速缴纳门诊费用
                        </div>
                    </chipItem>
                </div>
                <div class='bindCard'>
                    <chipItem iconName='bindCard_icon' name='绑卡' v-bind:doClick="doBindCard"/>
                </div>
                <div class='checkAppointment'>
                    <chipItem iconName='checkAppointment_icon' name='检查预约'/>
                </div>
            </div>
        </section>
        <section id='content'>
            <mt-swipe :auto="0" class='carousel'>
                <mt-swipe-item class='one'></mt-swipe-item>
                <mt-swipe-item class='two'></mt-swipe-item>
                <mt-swipe-item class='three'></mt-swipe-item>
            </mt-swipe>
        </section>
        <section id='footer'>
            <div class="funcGroup">
                 <chipItem iconName='bindCard_icon' v-bind:doClick='getLisreport' name='检查查询1'/>
                 <chipItem iconName='bindCard_icon' v-bind:doClick='getRisReport' name='彩超报告查询'/>
                 <chipItem iconName='bindCard_icon' v-bind:doClick="getDepartmentNO" name='医生排班'/>
                 <chipItem iconName='bindCard_icon' v-bind:doClick="getHospitalFee" name='住院费用'/>
                 <chipItem iconName='bindCard_icon' v-bind:doClick="getDepartmentNO" name='科室信息'/>
                 <chipItem iconName='bindCard_icon' v-bind:doClick="getCommonPatient" name='常用病人记录'/>
                 <chipItem iconName='bindCard_icon' v-bind:doClick="getPatientAppointmentInfo" name='查询病人预约信息'/>
                 <chipItem iconName='bindCard_icon' name='XXXXXX'/>
            </div>
        </section>
        <!--通用-->
        <my-dialog :show='showDialog' :cbClose='closeDialog'>
            <p slot="title" class='title'>系统提示</p>
            <p slot='content' class='content'>{{showResult}}</p>
            <div slot='button' class='button'>
                <button @click='closeDialog'>确定</button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import authen from '../authen';
    import api from '../backend/api';
    import routerManager from '../routerManager';

    export default {
        data: function () {
            return {
                showDialog:false,
                showResult:''
            }
        },
        components:{
            chipItem
        },
        methods:{
            unitCommit(type,data){
                this.$store.commit(type,JSON.parse(data));
            },

            doBindCard(){
                routerManager.routerTo('singel/bindCard');
            },
            closeDialog(){
                this.showDialog = false;
            },
           
            getDoctorSchedule(){
                api.getDoctorSchedule('0004').then((data)=>{
                    this.unitCommit('SET_DOCTORS_SCHEDULE',data);
                    routerManager.routerTo('singel/doctorsSchedule');
                })
            },
            getDepartmentNO(){
                api.getDepartmentNO().then((data)=>{
                    this.unitCommit('SET_DEPARTMENT_NO',data);
                    routerManager.routerTo('singel/departmentNO');
                })
            },
            getHospitalFee(){
                api.getHospitalizationFee('2016003423').then((data)=>{
                    this.unitCommit('SET_HOSPITALIZATION_FEE',data);
                    routerManager.routerTo('singel/hospitalizationFee');
                })
            },
            getCommonPatient(){
                routerManager.routerTo('singel/commonPatient');
                // api.getCommonPatient('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                //     this.unitCommit('SET_COMMON_PATIENT',data);
                //     routerManager.routerTo('singel/commonPatient');
                // });
            },
            getLisreport(){
                api.getLisreport('2016003850').then((data)=>{
                    this.unitCommit('SET_LISREPORT',data);
                    routerManager.routerTo('singel/lisreport');
                })
            },
            getRisReport(){
                api.getRisReport('2016003857').then((data)=>{
                    this.unitCommit('SET_RISREPORT',data);
                    routerManager.routerTo('singel/risreport');
                })
            },
            getPatientAppointmentInfo(){
                api.getPatientAppointmentInfo('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                    this.unitCommit('SET_PATIENTAPPOINTMENTINFO',data);
                    routerManager.routerTo('singel/patientAppointmentInfo');
                })
            }
        },
    }   
</script>