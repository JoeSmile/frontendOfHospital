<style lang="scss" scoped>
    #shouldPay{
        font-size:1.7rem;
        .center{
            text-align: center;
        }
        .flex2{
            flex:2;
        }
        ul{
            padding: 1rem;
            box-sizing: border-box;
        }
        li{
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
    <div id='shouldPay'>
        <ul v-if='step=="ONE"' class='stepOne'>
            <p class='title center'>常用就诊人</p>
            <li v-for='item in commonPatient' @click='getPatientDetailInfo(item)'>
                {{item.brxm}}
            </li>
        </ul>
        <ul v-else-if='step=="TWO"' class='stepTwo'>
           <p class='title center'>就诊信息</p>
           <li><span>就诊人</span><span>就诊日期</span></li>
           <li v-for='item in patientDetailInfo' @click='getShouldPay(item)' v-if='item.ylklxbm=="01"'>
               <span>{{item.brxm}}</span><span>{{item.ghxh.substr(0,8)}}</span>
           </li>
        </ul>
        <ul v-else-if='step=="THREE"' class='stepThree'>
            <p class='title center'>门诊费用应缴清单</p>
            <li><span>姓名:{{total.patName}}</span><span>门诊医生:{{total.docName}}</span></li>
            <li><span>总费用:{{total.pay}}</span></li>
            <li><span class='flex2'>项目名称</span><span>数量</span><span>单价</span><span>金额</span></li>
            <li v-for='item in paylist'>
                <span class='flex2'>{{item.mxfyxmmc}}</span>
                <span>{{item.fysl}}</span>
                <span>{{(+item.fydj).toFixed(2)}}</span>
                <span>{{(+item.fyje).toFixed(2)}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../backend/api';

    export default {
        data: function () {
            return {
                step:'ONE',
                commonPatient:[],
                patientDetailInfo:[],
                paylist:{},
                total:{
                    pay:0
                }
            }
        },

        components:{
        },

        methods:{
            getPatientDetailInfo(item){
                api.getPatientDetailInfo(item.sfzh,item.ylkh).then((data)=>{
                    this.patientDetailInfo = JSON.parse(data);
                    this.step = 'TWO';
                })
            },
            getShouldPay(item){
                api.getShouldPay('20170216004865').then((data)=>{
                    this.paylist = JSON.parse(data);
                    if(this.paylist.length>0){
                        this.total.patName = this.paylist[0].brxm;
                        this.total.docName = this.paylist[0].mzysxm;
                        this.total.pay = (+this.paylist[0].fyhj).toFixed(2);
                    }
                    this.step = 'THREE';
                })
            },
            
        },

        mounted(){
            this.commonPatient = this.$store.getters.commonPatient;
        }
    }   
</script>