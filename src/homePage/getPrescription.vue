<style lang="scss" scoped>
    #prescription{
        .center{
            text-align: center;
        }
        .left{
            text-align: left;
        }
        .right{
            text-align: right;
        }
          
        li{
            display:flex;
            text-indent: 1rem;
            span{
                flex:1;
            }
        }
        .page{
            border-bottom: 1px solid #838383;
            box-sizing: border-box;
        }
        span.double{
            display: flex;
            flex-direction: column;
            text-indent: 1rem;
            span{
                flex:1;
            }
        }
        .pageContent{
            font-size: 1.5rem;
        }
        ul.stepTwo,ul.stepOne{
            li{
                background:white;
                height: 4rem;
                line-height: 4rem;
                font-size: 1.7rem;
                border-top:1px solid #838383;
            }
        }
        ul.page{
            li{
            }
        }
        div.header{
            overflow-y: auto;
            font-size: 1.6rem;
            span{
                min-height: 3rem;
                line-height: 3rem;
                box-sizing: content-box;
                margin: 1px;
                background:white;
            }
        }
    }
</style>

<template>
    <div id='prescription'>
        <ul v-if='step=="ONE"' class='stepOne'>
            <p class='title center'>常用就诊人</p>
            <li v-for='item in commonPatient' @click='getPatientDetailInfo(item)'>
                {{item.brxm}}
            </li>
        </ul>
        <ul v-else-if='step=="TWO"' class='stepTwo'>
            <p class='title center'>就诊信息</p>
            <li><span>就诊人</span><span>就诊日期</span></li>
            <li v-for='item in patientInfo' @click='getPrescription(item)' v-if='item.ylklxbm=="01"'>
                <span >{{item.brxm}}</span><span >{{item.ghxh.substr(0,8)}}</span>
            </li>
        </ul>
        <div v-else-if='step=="THREE"' class="pageContent">
            <div class='empty' v-if='prescription.length==0'>
                暂无记录
            </div> 
            <div v-else>
                <p class='title center'>西药处方</p>
                <div class="header">
                    <ul v-for='script in prescription' class='page'>
                        <li><span>临床诊断:{{script.mzzd}}</span></li>
                        <li class='left'><span>姓名:{{script.brxm}}</span><span>处方金额:  {{script.cfje}}元</span></li>
                        <li v-for="bean in script.yppfmxBeans">
                            <span>{{bean.ypmc}}</span>
                            <span class='double'>
                                <span>{{bean.ypgg}}</span>
                                <span>{{bean.fyjl+' '+bean.jldwmc}}</span>
                            </span>
                            <span class='double'>
                                <span>{{bean.zl+' '+bean.yfdwmc}}</span>
                                <span>{{bean.yyffmc+' '+bean.pcmc}}</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import api from '../backend/api';
    import routerManager from '../routerManager';
    export default {
        data: function () {
            return {
                step:"ONE",
                commonPatient:[],
                patientInfo:{},
                prescription:[]
            }
        },
        components:{
        },
        methods:{
            getPatientDetailInfo(item){
                 api.getPatientDetailInfo(item.sfzh,item.ylkh).then((data)=>{
                    this.patientInfo = JSON.parse(data);
                    this.step = 'TWO';
                })
            },
            getPrescription(item){
                api.getPrescription(item.ghxh).then((data)=>{
                    this.prescription = JSON.parse(data);
                    this.$nextTick(function(item){});
                    this.step = 'THREE';
                })
            }
        },
        mounted(){
            this.commonPatient = this.$store.getters.commonPatient;
        }
    }   
</script>