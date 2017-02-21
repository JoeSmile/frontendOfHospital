<style lang="scss" scoped>
    #departmentNO{
        li{
            height: 3rem;
            line-height: 3rem;
            font-size: 1.7rem;
            text-indent: 3rem;
            border-bottom: 1px solid #838383;
            background-color: white;
        }
    }
</style>

<template>
    <div id='departmentNO'>
        <ul>
            <li>科室名称</li>
            <li v-for='item in departmentInfo' :ksbm='item.ksbm' @click='getDoctorSchedule(item.ksbm)'>
                {{item.ksmc}}
            </li>
        </ul>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';
    import routerManager from '../routerManager';
    export default {
        data: function () {
            return {
                departmentInfo:[]
            }
        },
        components:{
            chipItem
        },
        methods:{
            getDoctorSchedule(ksbm){
               api.getDoctorSchedule(ksbm).then((data)=>{
                    this.$store.commit('SET_DOCTORS_SCHEDULE',JSON.parse(data));
                    routerManager.routerTo('singel/doctorsSchedule');
               })
            }
        },
        mounted(){
           this.departmentInfo = this.$store.getters.departmentNO;
        }
    }   
</script>