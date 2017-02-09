<style lang="scss" scoped>
    #commonPatient{
        height: 100%;
    }
</style>

<template>
    <div id='commonPatient'>
       <mt-cell-swipe v-for="(item,index) in commonPatient"  
            :title='item'
            :right="[
            {
                content: 'Delete',
                style: { background: 'red', color: '#fff' },
                handler: () => deleteItem(index)
            }
        ]"></mt-cell-swipe>
    </div>
</template>

<script>
    import chipItem from '../component/chipItem';
    import api from '../backend/api';

    export default {
        data: function () {
            return {
                commonPatient:['Mike','Mary','Joe','Huni','Faker'],
            }
        },
        components:{
            chipItem
        },
        methods:{
           deleteItem(index){
               var tmp = this.commonPatient.splice(index,1);
               console.dir(this.commonPatient);
               var openid = this.$store.getters.usrInfo.openid;
               var sfzh = tmp.sfzh;
               var ylkh = tmp.ylkh; 
               api.deleteCommonPatient(openid,sfzh,ylkh).then((data)=>{
                   // 提示删除成功
               })
           }
        },
        mounted(){
        //    this.commonPatient = this.$store.getters.commonPatient;
        }
    }   
</script>