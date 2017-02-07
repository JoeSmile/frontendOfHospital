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
                //微信信息
                weChatInfo:{},
                //个人信息
                userInfo:{},
                //医疗记录
                medicalRecord:[],
                //医生排班
                doctorSchedule:{},
                //科室序号
                departmentNO:[],
                //住院费明细
                hospitalizationFee:{},
                //常用病人记录
                commonPatient:[],
                // 彩超，B超，CT，核磁等的结果查询
                risreport:[],
                //其它检查结果
                lisreport:[],
                // 病人预约信息
                patientAppointmentInfo:[]
            },
            getters:{
                weChatInfo(state){
                    return state.weChatInfo;
                },
                userInfo(state){
                    return state.userInfo;
                },
                medicalRecord(state){
                    return state.medicalRecord;
                },
                doctorSchedule(state){
                    return state.doctorSchedule;
                },
                departmentNO(state){
                    return state.departmentNO;
                },
                hospitalizationFee(state){
                    return state.hospitalizationFee;
                },
                commonPatient(state){
                    return state.commonPatient;
                },
                lisreport(state){
                    return state.lisreport;
                },
                risreport(state){
                    return state.risreport;
                },
                patientAppointmentInfo(state){
                    return state.patientAppointmentInfo;
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
                },
                MEDICALRECORD(state,data){
                    state.medicalRecord = data;
                },
                SET_DOCTORS_SCHEDULE(state,data){
                    state.doctorSchedule = data;
                },
                SET_DEPARTMENT_NO(state,data){
                    state.departmentNO = data;
                },
                SET_HOSPITALIZATION_FEE(state,data){
                    state.hospitalizationFee = data;
                },
                SET_COMMON_PATIENT(state,data){
                    state.commonPatient = data;
                },
                SET_LISREPORT(state,data){
                    state.lisreport = data;
                },
                SET_RISREPORT(state,data){
                    state.risreport = data;
                },
                SET_PATIENTAPPOINTMENTINFO(state, data){
                    state.patientAppointmentInfo = data;
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
                    commit('SIGNOUT');
                },
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