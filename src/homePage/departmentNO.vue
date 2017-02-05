<style lang="scss" scoped>
    #departmentNO{

    }
</style>

<template>
    <div id='departmentNO'>
        <ul>
            <li v-for='item in departmentInfo'>
                {{'科室名称：'+item.ksmc+'    科室编码：' + item.ksbm}}
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
                departmentInfo:[]
            }
        },
        components:{
            chipItem
        },
        methods:{
        },
        mounted(){
           this.departmentInfo = this.$store.getters.departmentNO;
        }
    }   
</script>