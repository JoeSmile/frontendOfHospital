<style lang="scss" scoped>
    @import '../css/onepx';
    .vote-item {
        position: relative;  @include onepxBottom(#ddd); @include onepxTop(#d4d5d6); background: #f5f6f7;
        .title {position: relative; color: #333; line-height: 2.4rem; font-size: 1.6rem; padding: 1.3rem 1.25rem 0.7rem 1.25rem;  @include onepxBottom(#ddd);}
        .content {
            position: relative; padding: 1rem 1.25rem 1rem 1.25rem;
            p {color: #999; font-size: 1.4rem; line-height: 2.2rem; }
            .to-vote {position: absolute; width: 8.3rem; line-height: 2.5rem; color: #0061b3; border: 1px solid #0061b3; border-radius: 1.5rem; 
                right: 1.25rem; top: 2.15rem; padding-left: 2.6rem; box-sizing: border-box; font-size: 1.2rem; background: url('../img/to-vote.png'); 
                background-repeat: no-repeat; background-size: 1.4rem 1.1rem; background-position: 8px 7px; }
        } 
    }
</style>

<template>
    <div v-if="voteInfo=='loading'">
        <p>{{voteInfo}}</p>
    </div>
    <div v-else class='vote-item'>
        <h5 class='title'>{{voteInfo.meeting_name}}</h5>
        <div class='content'>
            <p>公司名称：{{voteInfo.company_name}}</p>
            <p>公司代码：{{voteInfo.company_code}}</p>
            <div v-if='type=="unvote"' class='to-vote'>进入投票</div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    var voteItem =  {
            data: function () {
                return {
                    name: '我要投票／查看已经投票子页面'
                }
            },
            props: {
                voteInfo: {
                    type: [Array,String,Object]
                },
                type: {
                    type: String
                }
            },
            methods:{
            }
        };
    export default voteItem;
</script>