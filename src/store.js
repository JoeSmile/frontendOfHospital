import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'underscore';
import {EventEmitter} from 'events';
Vue.use(Vuex)

function sortList(a,b){
    return a.position_str > b.position_str;
}

var store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        user: {
            state:{
                weChatInfo:{},
                userInfo:{}
            },
            getters:{
                weChatInfo(state){
                    return state.weChatInfo;
                },
                userInfo(state){
                    return state.userInfo
                }
            },
            mutations: {
                /**
                 * 登录成功
                 * @param {Object} state
                 * @param {Object} user
                 */
                SIGNIN(state, user) {
                    state.weChatInfo = user;
                    state.isLogin = true;
                },
                /**
                 * 退出登录
                 * @param {Object} state
                 */
                SIGNOUT(state) {
                    state.weChatInfo = {};
                    state.isLogin = false;
                    // sessionStorage.removeItem('user')
                    // Object.keys(state).forEach(k => Vue.delete(state, k))
                },
                USERINFO(state,info){
                    state.userInfo = info;
                },
                /**
                 * @param {string} account
                 */
                SET_ACTIVE_ACCOUNT(state,account){
                    state.activeAccount = account;
                }
            },
            actions: {
                SIGNIN({commit}, user) {
                    commit('SIGNIN', user)
                },
                USERINFO({commit},info){
                    commit('USERINFO',info);
                },
                SIGNOUT({commit}) {
                    commit('SIGNOUT')
                }
            }
        }  // user over
    }   // modules
})

module.exports =  _.extend({},store,EventEmitter.prototype,{
    addChangeListener(type,cbk){
        this.on(type,cbk)
    },
    
    removeChangeListener(type,cbk){
        this.removeListener(type,cbk);
    },

    emitEvent(type,data){
        this.emit(type,data);
    }
})