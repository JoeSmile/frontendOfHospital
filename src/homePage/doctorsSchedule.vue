<style lang="scss" scoped>
    #doctorsSchedule{

    }
</style>

<template>
    <div id='doctorsSchedule'>
        <p>上午</p>
        <ul>
            <li v-for='item in amSchedule'>
                {{item.czyxm}}
            </li>
        </ul>
        <p>下午</p>
        <ul>
            <li v-for='item in pmSchedule'>
                {{item.czyxm}}
            </li>
        </ul>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';
    export default {
        data: function () {
            return {
                amSchedule:[],
                pmSchedule:[]
            }
        },
        components:{
            chipItem
        },
        methods:{
        },
        mounted(){
           this.amSchedule = this.$store.getters.doctorSchedule.swpb;
           this.pmSchedule = this.$store.getters.doctorSchedule.xwpb;
        }
    }   
</script>