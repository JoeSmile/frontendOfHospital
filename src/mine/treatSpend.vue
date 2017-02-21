<style lang="scss" scoped>
    #treatSpend{
        font-size:1.7rem;
        .center{
            text-align: center;
        }
        p{
            height: 3rem;
            line-height: 3rem;
            background: white;
        }
       
        .flex2{
            flex:2;
        }
        ul{
            box-sizing: border-box;
        }
        li{
            text-indent: 1rem;
            display:flex;
            background: white;
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
    <div id='treatSpend'>
        <ul v-if='step=="ONE"' class='stepOne'>
            <p class='title center'>常用就诊人</p>
            <li v-for='item in commonPatient' @click='getPatientDetailInfo(item)'>
                {{item.brxm}}
            </li>
        </ul>
        <ul v-else-if='step=="TWO"' class='stepTwo'>
           <p class='title center'>就诊信息</p>
           <li><span>就诊人</span><span>就诊日期</span></li>
           <li v-for='item in patientDetailInfo' @click='getTreatSpend(item)' v-if='item.ylklxbm=="01"'>
               <span>{{item.brxm}}</span><span>{{item.ghxh.substr(0,8)}}</span>
           </li>
        </ul>
        <ul v-else-if='step=="THREE"' class='stepThree'>
            <p class='title center'>门诊费用清单</p>
            <li><span>姓名:{{treatSpend.brxm}}</span><span>年龄:{{treatSpend.brnl}}</span></li>
            <li><span class='flex2'>挂号日期:{{treatSpend.ghrq}}</span><span>金额:{{(+treatSpend.fyzj).toFixed(2)}}</span></li>
            <li><span>家庭住址:{{ treatSpend.jtzz }}</span></li>
            <li><span>项目名称</span><span>数量</span><span>单价</span><span>金额</span></li>
            <li v-for='item in treatSpend.mzfymxBeans'>
                <span>{{item.ypmc}}</span><span>{{item.fysl}}</span><span>{{item.fydj}}</span><span>{{item.fyje}}</span>
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
                treatSpend:{}
            }
        },

        components:{
        },

        methods:{
            getTreatSpend(item){
                api.getTreatSpend(item.ghxh).then((data)=>{
                    this.treatSpend = JSON.parse(data);
                    this.step = 'THREE';
                })
            },
            
            getPatientDetailInfo(item){
                api.getPatientDetailInfo(item.sfzh,item.ylkh).then((data)=>{
                    this.patientDetailInfo = JSON.parse(data);
                    this.step = 'TWO';
                })
            }
        },

        mounted(){
            this.commonPatient = this.$store.getters.commonPatient;
        }
    }   
</script>