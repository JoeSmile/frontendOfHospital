import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

function sortList(a,b){
    return a.position_str > b.position_str;
}

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        user: {
            state:{
                userInfo:{},
               
            },
            getters:{
                userInfo(state){
                    return state.userInfo;
                },
            },
            mutations: {
                /**
                 * 登录成功
                 * @param {Object} state
                 * @param {Object} user
                 */
                SIGNIN(state, user) {
                    state.userInfo = user;
                    state.isLogin = true;
                },
                /**
                 * 退出登录
                 * @param {Object} state
                 */
                SIGNOUT(state) {
                    state.userInfo = {};
                    state.isLogin = false;
                    // sessionStorage.removeItem('user')
                    // Object.keys(state).forEach(k => Vue.delete(state, k))
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
                SIGNOUT({commit}) {
                    commit('SIGNOUT')
                }
            }
        }  // user over
    }   // modules
})