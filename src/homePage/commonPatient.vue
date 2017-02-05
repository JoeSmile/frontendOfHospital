<style lang="scss" scoped>
    #commonPatient{

    }
</style>

<template>
    <div id='commonPatient'>
        <ul>
            <li v-for='item in commonPatient'>
                {{ '姓名：'+ item.brxm}}
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
                commonPatient:[]
            }
        },
        components:{
            chipItem
        },
        methods:{
        },
        mounted(){
           this.commonPatient = this.$store.getters.commonPatient;
        }
    }   
</script>