<style lang="scss" scoped>
    #medicalRecord{
        font-size: 1.7rem;
        p.empty{
            text-align:center;
            margin-top:1rem;
        }
        li{
            height: 4rem;
            line-height:4rem;
            span{
                display: inline-block;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: clip;
                vertical-align: bottom;
            }
            span:frist-child{
                padding-left: 1rem;
            }
            border-bottom: 1px solid #838383;
        }
        li:first-child {
            padding-left: 1rem;
        }
        span:first-child{
            width: 25%;
        }
        span:nth-child(2){
            text-align: center;
            width: 30%;

        }
        span:nth-child(3){
            width: 20%;
        }
        span.label{
            text-align: center;
        }
       
        span.name{
            width: calc(25% - 1rem);    
        }
    }
</style>

<template>
    <div id='medicalRecord'>
        <ul>
            <li v-for='info in infos'>
               <span class='label'>挂号日期：</span><span class='date'>{{info.ghrq}}</span>
               <span class='label'>姓名：</span><span class='name'>{{info.brxm}}</span>
            </li>
            <p class='empty'>暂无数据！</p>
        </ul>
        <button @click='goBack'>返  回</button>
    </div>
</template>

<script>
    import routerManager from '../routerManager';
    export default {
        data(){
            return{
                infos:[],
            }
        },
        components:{

        },
        methods:{
            goBack(){
                routerManager.goBack();
            }
        },
        mounted(){
            this.infos = this.$store.getters.medicalRecord;
            // 就诊记录
        }
    }
</script>
