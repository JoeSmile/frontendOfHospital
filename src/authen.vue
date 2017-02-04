<style lang="scss">

</style>

<template>
    <div id='authen'>
        <button @click="agreeAuthen">认证</button>
    </div>
</template>

<script>
// 这里模仿认证，写入个人信息到 VueX中
    import api from './backend/api';
    export default {
        data: function () {
            return {

            }
        },
        methods:{
            agreeAuthen(){
               api.login().then((data)=>{
                    this.$store.commit('SIGNIN',data); 
                    this.$store.emitEvent('LOGIN');
                })
            }
        },
        mounted(){
        }
    }
</script>