<style lang="scss" scoped>
    #patientAppointmentInfo{
        font-size:1.7rem;
        p.empty{
            margin-top:1rem;
            text-align:center;
        }
        ul li{
            border-bottom: 1px solid #838383;
            padding: 1rem;
            div{
                display:flex;
                box-sizing: border-box;
                span{
                    flex:1;
                }
            }
        }
    }
</style>

<template>
    <div id='patientAppointmentInfo'>
        <ul>
            <li v-for='info in infos'>
                <div><span>姓名: {{info.brxm}}</span><span>科室: {{info.ksmc}}</span></div>
                <div><span>预约医生: {{info.czyxm}}</span><span>地址: {{info.mzsbdd}}</span></div>
                <div><span>预约日期: {{info.yyrq}}</span></div>
                <div><span>手机号: {{info.sj}}</span></div>
                <div><span>预约号码: {{info.brid.trim()}}</span></div>
            </li>
            <p v-if='infos.length==0' class="empty">暂无数据!</li>
        </ul>
    </div>
</template>

<script>
    import api from '../backend/api';
    export default {
        data: function () {
            return {
                infos:[]
            }
        },
        components:{
        },
        methods:{
        },
        mounted(){
            this.infos = this.$store.getters.patientAppointmentInfo;
        }
    }   
</script>