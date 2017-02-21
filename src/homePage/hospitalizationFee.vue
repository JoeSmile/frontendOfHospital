<style lang="scss" scoped>
    #hospitalizationFee{
        background-color: white;
        box-sizing: border-box;
        font-size:1.7rem;
        li{
            min-height:3rem;
            display:flex;
            border-bottom:1px solid #838383;
            line-height: 3rem;
            text-indent: 1rem;
            background-color: white;
            span{
                flex:2;
            }
            
            span.gg{
                text-align: center;
            }
        }
       
        div.header{
            div{
                height:3rem;
                width:100%;
                display:flex;
                span{
                    flex:2;
                }
                span:first-child{
                    text-indent: 1rem;
                }
            }
        }
    }
</style>

<template>
    <div id='hospitalizationFee'>
        <ul v-if='step=="ONE"'>
            <p class='title'>常用就诊人信息</p>
            <li v-for='item in commonPatient' @click='getDetailInfo(item)'>
                {{item.brxm}}
            </li>
        </ul>
        <ul v-else-if='step=="TWO"'>
            <p class='title'>就诊信息</p>
            <li v-for='item in patientInfo' @click='getHospitalizationFee(item)' v-if='item.ylklxbm=="02"'>
                <span>{{item.brxm}}</span><span>{{item.ghxh.substr(0,8)}}</span>
            </li>
        </ul>
        <div v-else-if='step=="THREE"'>
            <p class="title">住院费清单</p>
            <div class="header">
                <div><span>住院号:{{fee.zyh}}</span><span>姓名:{{fee.brxm}}</span></div>
                <div><span>科室:{{fee.ksmc}}</span></div>
                <div><span>入院日期:{{fee.ryrq.substr(0,10)}}</span><span>出院日期:{{fee.cyrq.substr(0,10)}}</span></div>
                <div><span>费用合计:{{(+fee.fyje).toFixed(3)}}</span><span>预交费用:{{(+fee.yjje).toFixed(3)}}</span></div>
                <div><span>费别:{{fee.fbmc}}</span><span>家庭住址:{{fee.jtzz}}</span></div>
                <ul>
                    <li>
                        <span class='item'>项目名称</span>
                        <span class='gg flex1'>规格</span>
                        <span class='sl'>数量</span>
                        <span class='dj'>单价</span>
                        <span class='je'>金额</span>
                    </li>
                    <li v-for='item in fee.userfymx'>
                        <span class='item'>{{item.ypmc}}</span>
                        <span class='gg flex1'>{{item.fygg}}</span>
                        <span class='sl'>{{item.fysl}}</span>
                        <span class='dj'>{{(+item.fydj).toFixed(3)}}</span>
                        <span class='je'>{{(+item.fyje).toFixed(3)}}</span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';
    export default {
        data: function () {
            return {
                step:'ONE',
                patientInfo:{},
                commonPatient:[],
                fee:{},
            }
        },
        components:{
            chipItem
        },
        methods:{
            getDetailInfo(item){
                api.getPatientDetailInfo(item.sfzh,item.ylkh).then((data)=>{
                    this.patientInfo = JSON.parse(data);
                    this.step = 'TWO';
                })
            },
        
            getHospitalizationFee(item){
                // if(item.ylklxbm=='02'){
                api.getHospitalizationFee('2016003850').then((data)=>{
                    this.fee = JSON.parse(data);
                    this.$nextTick(function(item){
                    })
                    this.step = 'THREE';
                })
                // }
            }
        },
        mounted(){
             this.commonPatient = this.$store.getters.commonPatient;
            // 医疗明细        
            // this.hospitalizationFee = this.$store.getters.hospitalizationFee;
        }
    }   
</script>