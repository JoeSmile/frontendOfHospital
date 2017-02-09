<style lang="scss" scoped>
    #myselfInfo{
        ul{
            font-size: 1.7rem;
        }
        li.avter{
            height: 6rem;
            line-height:6rem;
        }
        li.bg_white{
             background-color: white;
        }
        li{
            margin: 1rem 0;
            height: 4rem;
            line-height: 4rem;
            span{
                padding-top:0;
                display:inline-block;
            }
            span.title{
                padding-left:1rem;
                width:40%;
            }
            span.value{
                text-align: right;
                width: 50%;
                color: #838383;
            }
        }
    }
</style>

<template>
    <div id='myselfInfo'>
        <ul>
           <li class="avter bg_white"><span class="title">头像</span><span class='value'></span></li>
           <li class="bg_white"><span class="title">姓名</span><span class='value'>{{userInfo.username}}</span></li>
           <li class=""><span class="title">家庭住址</span><span class='value'>{{userInfo.jtzz}}</span></li>
           <li class="bg_white"><span class="title">省份</span><span class='value'>{{userInfo.province}}</span></li>
           <li class=""><span class="title">性别</span><span class='value'>{{userInfo.sex=='1'?"男":"女"}}</span></li>
        </ul>
        <button @click='saveInfo'>保存</button>
    </div>
</template>

<script>
    import api from '../backend/api';
    import routerManager from '../routerManager';
    export default {
        data: function () {
            return {
                userInfo:{}
            }
        },
        components:{
        },
        methods:{
            saveInfo(){
                routerManager.goBack();
            }
        },
        mounted(){
            // 个人信息00
            this.userInfo = this.$store.getters.userInfo;
        }
    }   
</script>