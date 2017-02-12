<style lang="scss" scoped>
    #risreport{
        font-size: 1.7rem;
        li{
            height: 4rem;
            font-size: 1.7rem;
            border-bottom: 1px solid #838383;
            box-sizing: border-box;
            padding-left:1rem;
            line-height: 4rem;
            display:flex;
        }
        li span{
            flex:1;
            text-align: left;

        }
        ul{
            p{
                text-align: left;
            }
            section p{
                text-indent: 2rem;
            }
        }
        div.dic{
            box-sizing: border-box;
            padding-left: 1rem;
            max-height: 20rem;
            overflow: scroll;
        }
       
    }
</style>

<template>
    <div id='risreport'>
        <ul>
            <li v-for='item in risreport' @click="showDetail(item)">
                <span class='name'>姓名: {{item.nAME}}</span> 
                <span class='date'>采样日期: {{item.lODGEDATE.substr(0,10)}}</span> 
            </li>
        </ul>
        <!--通用-->
        <my-dialog :show='showDialog' :cbClose='closeDialog'>
            <p slot="title" class='title'>彩超检查报告</p>
            <ul slot='content' v-if='showItem'>
                <li><span>姓名: {{showItem.nAME}}</span><span>性别: {{showItem.sEX}}</span><span class='age'>年龄: {{showItem.aGE}}岁</span></li>
                <li><span>项目: {{showItem.cLASSNAME}}</span><span>科室: {{showItem.lODGESECTION}}</span></li>
                <li><span>医生: {{showItem.lODGEDOCTOR}}</span><span>状态: {{showItem.sTATUS}}</span></li>
                <li><span>检查部位:{{showItem.pARTOFCHECK}}</span></li>
                <div class="dic">
                    <p>描述:</p>
                    <section><p>{{showItem.laybe1}}彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告</p></section>
                    <p>提示:</p>
                    <section><p>{{showItem.laybe2}}彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告彩超检查报告</p></section>
                <div>
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
                showItem:'',
                showDialog:false,
                risreport:{}
            }
        },
        components:{
        },
        methods:{
            closeDialog(){
                this.showDialog = false;
            },
            showDetail(item){
                this.showItem = item;
                this.$nextTick(function(item){
                })
                this.showDialog = true;
            }
        },
        mounted(){
            this.risreport = this.$store.getters.risreport;
        }
    }   
</script>