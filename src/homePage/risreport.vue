<style lang="scss" scoped>
    #risreport{

    }
</style>

<template>
    <div id='risreport'>
        <ul>
            <li v-for='item in risreport'>
                {{item.nAME}}
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../backend/api';
    export default {
        data: function () {
            return {
                risreport:{}
            }
        },
        components:{
        },
        methods:{
        },
        mounted(){
            this.risreport = this.$store.getters.risreport;
        }
    }   
</script>