<style lang="scss" scoped>
    #mine{
        overflow: auto;
        height: 100%;
        padding:0;

        .header{
            /*height: 18rem;*/
            margin-bottom: 1rem;
            
            .userInfo{
                height: 10rem;
                span{
                    display: inline-block;
                }
                .photo{
                    height: 7rem;
                    width: 7rem;
                    position: relative;
                    top: 1.5rem;
                    left: 1.5rem;
                    background-size: cover;
                    background: url('../img/photo.png') no-repeat center center;
                }
                .name{
                    position: relative;
                    top: 3rem;
                    left: 3rem;
                    vertical-align: top;
                    font-size: 2rem;
                }
            }
            ul{
                height: 8rem;
            }
            li{
                float:left;
                box-sizing: border-box;
                display:inline-block;
                width:25%;
                height:5rem;
                border: 1px solid;
            }
        }
        .content{
            li{
                height: 3rem;
                border: 1px solid;
            }
        }
        .funcItem{
            background: white;
            border-bottom: 1px solid #EEE;
            span{
                display: inline-block;
            }
            .bindCard_icon{
                margin-left: 2rem;
            }
            .name{
                vertical-align: top;
                margin-top: 1rem;
                font-size: 2rem;
                margin-left: 2rem;
            }
        }

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
        .funcGroup{
            background: white;
         }
        .bindCard_icon{
            height: 4rem;
            width: 4rem;
            margin: 0 auto;
            background-size: cover !important;
            margin-bottom: 0.5rem;
            background: url('../img/bindCard.png') no-repeat center center;
        }
    }
</style>

<template>
    <div id='mine'>
       <div class="header">
           <div class='userInfo' @click='showUserInfo'>
              <span class='photo'></span>
              <span class='name'>{{userInfo.username}}</span>
            </div>
       </div>
       <div clas='content'> 
            <ul>
                <li class='funcItem' @click='getTreatSpend'>
                    <span class='bindCard_icon'></span><span class='name'>门诊费用清单</span>
                </li>
                <li class='funcItem' @click='medicalRecord'>
                    <span class='bindCard_icon'></span><span class='name'>问诊纪录</span>
                </li>
                <li class='funcItem' @click='shouldPay'>
                    <span class='bindCard_icon'></span><span class='name'>应缴费用</span>
                </li>
                <li class='funcItem' @click='editCommonPatient'>
                    <span class='bindCard_icon'></span><span class='name'>管理就诊人</span>
                </li>
                <li class='funcItem' @click='gethasAppointedList'>
                    <span class='bindCard_icon'></span><span class='name'>已挂号信息</span>
                </li>
           </ul>
        </div>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';
    import routerManager from '../routerManager';
    export default {
        components:{
            chipItem,
        },
        data: function (){
            return {
                name:'AAA',
                userInfo:{}
            }
        },
        methods:{
            medicalRecord(){
                api.getPatientRecord().then((data)=>{
                    this.$store.commit('SET_MEDICALRECORD',JSON.parse(data));
                    // 问诊记录
                    routerManager.routerTo('singel/medicalRecord');
                })
            },
            getTreatSpend(){
                api.getCommonPatient('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                    this.$store.commit('SET_COMMON_PATIENT',JSON.parse(data));
                    routerManager.routerTo('singel/getTreatSpend');
                });
            },
            updateUserInfo(info){
                this.userInfo = info;
            },
            getUserInfo(){
                this.userInfo = this.$store.getters.userInfo;
            },
            showUserInfo(){
                 routerManager.routerTo('singel/userInfo');
            },
            shouldPay(){
                api.getCommonPatient('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                    this.$store.commit('SET_COMMON_PATIENT',JSON.parse(data));
                    routerManager.routerTo('singel/shouldPay');
                });
            },
            editCommonPatient(){
                api.getCommonPatient('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                    this.$store.commit('SET_COMMON_PATIENT',JSON.parse(data));
                    routerManager.routerTo('singel/commonPatient');
                });
            },
            gethasAppointedList(){
                 api.getCommonPatient('owEWzwQKO7G_uy4C0X_Wn2boPVI4').then((data)=>{
                    this.$store.commit('SET_COMMON_PATIENT',JSON.parse(data));
                    routerManager.routerTo('singel/hasAppointedList');
                });
            }
        },

        created(){
            this.$store.addChangeListener('UPDATEUSERINFO',this.updateUserInfo);
            window.back = function () { // 定义左上角回退键的函数，否则退出webview
                window.back = null;
                return true;    // 如有自定义回退函数，必须返回true
            };
        },
        
        destory(){
            this.$store.removeChangeListener('UPDATEUSERINFO',this.updateUserInfo);
        },
        mounted(){
            this.getUserInfo();
        }
    }
</script>