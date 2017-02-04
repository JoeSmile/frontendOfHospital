<style lang="scss" scrope>
    @import './css/main';
    #default{
        height: 100%;
    }
</style>

<template>
    <div id='default'>
        <div class="showView">
            <router-view></router-view>
        </div>
        <div class='nav'>
            <router-link class='homePageLink' to='/homePage'>首页</router-link>
            <router-link class='askOnlineLink' to='/askOnline'>在线问诊</router-link>
            <router-link class='mineLink' to='/mine'>我的</router-link>
        </div>
    </div>
</template>
<script>
    import homePage from './homePage/homePage';
    import askOnline from './askOnline/askOnline';
    import mine from './mine/mine';
    
    export default {
         data(){
             return{
                 selected:'homePage',
             }
         },
         components:{
             homePage,
             askOnline,
             mine
         }
    }
</script>
