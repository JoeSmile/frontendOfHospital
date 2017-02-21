<style lang="scss">
    @import './css/main';
    $boderGray: #838383;
    $fontBlack: #000000;

    #app{
        div.showView{
            height: calc(100% - 3rem);
            overflow-x: hidden;
        }

        div.nav{
            color: #000000;
            width: 100%;
            display: flex;
            position: relative;
            bottom: 0;
            height: 3rem;
            border-top: 1px solid $boderGray;
            box-sizing: border-box;
            .homePageLink,
            .askOnlineLink{
                border-right:1px solid $boderGray; 
            }
            a{
                flex: 1;
                text-align: center;
                line-height: 3rem;
                font-size: 1.7rem;
            }
            a:focus,a:visited,a:hover,a:active{
                color:#000000;
            }
        }
    }
    button{
        font-size: 1.7rem;
        margin: 1rem auto;
        /*height: 3rem;*/
        width: 24rem;
        display:block;
        border-radius: 4px;
    }
    p.title{
        text-align: center;
        font-size: 2rem;
        height: 5rem;
        line-height: 5rem;
        background: white;
        border-bottom: 1px solid #838383;
    }
</style>

<template>
    <div id='app'>
      <router-view  v-if='isLogin'></router-view>      
      <div v-else>
        <authen />
      </div>
    </div>
</template>

<script>
    import authen from './authen';
    import api from './backend/api';
    export default {
         data(){
             return{
                 isLogin:false
             }
         },
         methods:{
             login(){
                 this.isLogin = true;
                 this.doGetUserInfo();
             },
             doGetUserInfo(){
                api.getUserInfo(this.$store.getters.weChatInfo).then((data)=>{
                    var info = JSON.parse(data);
                    this.$store.commit('USERINFO',info[0]);
                    this.$store.emitEvent('UPDATEUSERINFO');
                })
             }
         },
         components:{
             authen
         },
         created(){
            this.isLogin = true;
            var store = this.$store;
            if(store.getters.userInfo && store.getters.userInfo.userid){
                this.isLogin = true;
            }
            store.addChangeListener('LOGIN',this.login);
         },
         destroy(){
            this.$store.removeChangeListener('LOGIN',this.login);
         },
         mounted(){
            if(this.$store.state && this.$store.state.weChatInfo){
                this.isLogin = true;
                this.doGetUserInfo();
            } 
         }
    }
</script>
