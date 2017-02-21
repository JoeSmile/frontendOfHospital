<style lang="scss" scoped>
    #hasAppointedList{
        font-size:1.7rem;
        .center{
            text-align: center;
        }
        .flex2{
            flex:2;
        }
        p{
            background: white;
            height: 4rem;
            line-height: 4rem;
            font-size:1.8rem;
        }
        .doPay{
            background-color: #598ede;
            width: 5rem;
            margin: 0.5rem 2rem 0 0;
        }
        ul{
            box-sizing: border-box;
        }
        ul.detail:nth-child(odd){
            li{
                background-color:white;
            }
        }
        ul.detail:nth-child(even){
            li{
                background-color:#d3d3d3;
            }
        }
        li{
            background: white;
            text-indent: 1rem;
            display:flex;
            height:4rem;
            line-height: 4rem;    
            border-bottom: 1px solid #838383;        
            span{
                font-size:1.6rem;
                flex:1;
            }
        }
    }
</style>

<template>
    <div id='hasAppointedList'>
        <ul v-if='step=="ONE"' class='stepOne'>
            <p class='title center'>常用就诊人</p>
            <li v-for='item in commonPatient' @click='getPatientDetailInfo(item)'>
                {{item.brxm}}
            </li>
        </ul>
        <div v-else-if='step=="TWO"' class='stepTwo'>
           <p class='title center'>已约信息</p>
           <ul v-for='item in hasAppointedList' class='detail'>
               <li><span>姓名:{{item.brxm}}</span><span>科室名称:{{item.ksmc}}</span></li>
               <li><span>预约就诊日期:{{item.yyyxrq}}</span></li>
               <li><span>医生姓名:{{item.czyxm}}</span></li>
               <li><span>上班时间:{{item.mzsbdd}}</span><span>下班时间:{{item.sbsj}}</span></li>
               <li><span>手机:{{item.sj}}</span></li>
               <li><span>身份证号:{{item.sfzh}}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import api from '../backend/api';

    export default {
        data: function () {
            return {
                step:'ONE',
                commonPatient:[],
                hasAppointedList:[],
            }
        },

        components:{
        },

        methods:{
            getPatientDetailInfo(item){
                api.getPatientDetailInfo(item.sfzh,item.sfzh||item.sfzh,item.ylkh).then((data)=>{
                    this.hasAppointedList = JSON.parse(data);
                    this.step = 'TWO';
                })
            }
        },

        mounted(){
            this.commonPatient = this.$store.getters.commonPatient;
        }
    }   
</script>
