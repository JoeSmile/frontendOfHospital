<style lang="scss" scoped>
    #hospitalizationFee{

    }
</style>

<template>
    <div id='hospitalizationFee'>
        <p>{{hospitalizationFee.brxm}}</p>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';
    export default {
        data: function () {
            return {
                hospitalizationFee:{}
            }
        },
        components:{
            chipItem
        },
        methods:{
        },
        mounted(){
            // 医疗明细        
            this.hospitalizationFee = this.$store.getters.hospitalizationFee;
        }
    }   
</script>