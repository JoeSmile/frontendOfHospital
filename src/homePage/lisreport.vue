<style lang="scss" scoped>
    #lisreport{

    }
</style>

<template>
    <div id='lisreport'>
        <ul>
            <li v-for='item in lisreport'>
                {{item.brxm}}
            </li>
        </ul>
    </div>
</template>

<script>
    import api from '../backend/api';
    export default {
        data: function () {
            return {
                lisreport:{}
            }
        },
        components:{
        },
        methods:{
        },
        mounted(){
            this.lisreport = this.$store.getters.lisreport;
        }
    }   
</script>