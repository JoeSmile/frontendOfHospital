<style lang="scss" scoped>
    #lisreport{
        height: 100%;
        li{
            height: 4rem;
            font-size: 1.7rem;
            border-bottom: 1px solid #838383;
            box-sizing: border-box;
            padding-left:1rem;
            line-height: 4rem;
        }
        ul.showArea{
            max-height: 30rem;
            overflow: scroll;
            box-sizing: border-box;
        }
        ul.reportList{
            li{
                height: 4rem;
                font-size: 1.7rem;
            }
        }
        ul.detailList:nth-child(odd){
            background-color:aquamarine 
        }
        ul.detailList:nth-child(even){
            background-color:beige; 
        }
        .empty{
            border: none;
            span{
              text-align: center;
            }
        }
        
        div.dialog{
            
            li{
                display:flex;
                box-sizing: border-box;
                justify-content:center;
                span{
                    flex:1;
                    justify-content:center;
                    display:inline-block;
                    overflow: hidden;
                    text-align: left;
                    word-break: break-all;
                    align-items:center;
                    line-height: 4rem;
                }
                span.name{
                    flex:3;
                }
                span.age,span.sex{
                    flex:2;
                }
                span.jg_zt{
                    width: 6rem;
                    display: inline-block;
                    flex: inherit;
                }
                span.jg_zwmc{
                    flex:2;
                }
            }
        }
    }
</style>

<template>
    <div id='lisreport'>
        <ul class="reportList">
            <li v-for='item in lisreport' @click="showDetail(item)">
                <span class='name'>姓名: {{item.brxm}}</span> 
                <span class='date'>采样日期: {{item.cyrq.substr(0,10)}}</span> 
            </li>
            <li v-if='risreport.length == 0' class='empty'><span>暂无数据！</span></li>
        </ul>
        <!--通用-->
        <my-dialog :show='showDialog' :cbClose='closeDialog'>
            <p slot="title" class='title'>检查报告</p>
            <ul slot='content' v-if='showItem' class='showArea'>
                <li class='oneRow'><span class='name'>姓名: {{showItem.brxm}}</span><span class='sex'>性别: {{showItem.brxb=='1'?'男':'女'}}</span><span class='age'>年龄: {{showItem.brnl}}岁</span></li>
                <li><span class=''>病案号: {{showItem.bah}}</span></li>
                <li><span class='label'>住院号: {{showItem.cwh}}</span><span class='label'>科室: {{showItem.ksmc}}</span></li>
                <li><span class='label'>项目: {{showItem.mc}}</span><span class='label'>执行医生: {{showItem.zxys}}</span></li>
                <li><span class='label'>仪器: {{showItem.sbmc}}</span></li>
                    <ul v-for='jg in showItem.jyjg' class='detailList'>
                        <li><span class='jg_label'>检查序号: {{jg.jyxh}}</span></li>
                        <li><span class='jg_label jg_zwmc'>项目: {{jg.zwmc}}</span><span class='jg_label jg_ywmc'>简称:{{jg.ywmc}}</span></li>
                        <li><span class='jg_label'>结果: {{jg.jg}}</span><span class='jg_label'>单位: {{jg.dw}}</span></li>
                        <li><span class='jg_label'>value_N: {{jg.value_N}}</span><span class='jg_label'>value_N_1: {{jg.value_N_1}}</span></li>
                        <li><span class='jg_label'>参考范围: {{jg.ckz_t}}</span><span class='jg_label jg_zt'>状态: {{jg.zt}}</span></li>
                    </ul>
                <li><span class='label'>样本编码: {{showItem.ybbm}}</span><span class='label'>审核人员: {{showItem.shry}}</span></li>
                <li><span class='label'>审核日期: {{showItem.shrq&&showItem.shrq.substr(0,10)}}</span></li>
            </ul>
            <div slot='button' class='button'>
                <button @click='closeDialog'>确定</button>
            </div>
        </my-dialog>
    </div>
</template>

<script>
    import api from '../backend/api';

    export default {
        data: function () {
            return {
                showDialog:false,
                showItem:{},
                lisreport:{}
            }
        },
        components:{
        },
        methods:{
            closeDialog(){
                this.showDialog = false;
            },
            showDetail(item){
                var self=this;
                this.showItem = item;
                this.$nextTick(function(item){
                   
                })
                this.showDialog = true;
            }
        },
        mounted(){
            this.lisreport = this.$store.getters.lisreport;
        }
    }   
</script>