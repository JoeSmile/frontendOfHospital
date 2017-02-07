<style lang="scss" scoped>
    #patientAppointmentInfo{

    }
</style>

<template>
    <div id='patientAppointmentInfo'>
        <ul>
            <li v-for='info in infos'>
                {{info.brxm}}
            </li>
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