<style lang="scss" scrope>
    #medicalRecordList{
        
    }
</style>

<template>
    <div id='medicalRecord'>
        <ul>
            <li v-for='item in info'>
                {{item.ghxh}}
            </li>
        </ul>
    </div>
</template>

<script>
    
    export default {
        data(){
            return{
                info:[],
            }
        },
        components:{

        },
        mounted(){
            this.info = this.$store.getters.medicalRecordInfo;
        }
    }
</script>
