<style lang="scss" scrope>
    #medicalRecordList{
        
    }
</style>

<template>
    <div id='medicalRecord'>
        <ul>
            <li v-for='info in infos'>
                {{info.brxm}}
            </li>
        </ul>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                infos:[],
            }
        },
        components:{

        },
        mounted(){
            this.infos = this.$store.getters.medicalRecord;
            // 就诊记录
        }
    }
</script>
