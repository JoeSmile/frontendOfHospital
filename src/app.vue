<style lang="scss" scrope>
    @import './css/main';
    .mint-tab-container-wrap{
        height: 100%;
    }
    .content{
        padding: 0;
        height: calc(100% - 4rem);
    }
    .mint-tab-container.content{
        padding:0rem;
        box-sizing: border-box;
    }
    .footer{
        height:4rem;
        line-height: 4rem;
        font-size:1.8rem;
        .mint-tab-item-label{
            height: 3rem;
            line-height: 3rem;
            font-size: 1.5rem;
        }
    }
</style>

<template>
    <div id='app'>
        <mt-tab-container v-model="selected" class='content'>
            <mt-tab-container-item id="homePage">
               <homePage/>
            </mt-tab-container-item>
            <mt-tab-container-item id="askOnline">
               <askOnline/>
            </mt-tab-container-item>
            <mt-tab-container-item id="mine">
                <mine/>
            </mt-tab-container-item>
        </mt-tab-container>
        <mt-tabbar v-model="selected" fixed class='footer'>
            <mt-tab-item id="homePage">
                <span>首页</span>
            </mt-tab-item>
            <mt-tab-item id="askOnline">
                在线问诊
            </mt-tab-item>
            <mt-tab-item id="mine">
                我的
            </mt-tab-item>
        </mt-tabbar>
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
