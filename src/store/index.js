import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex);
const state = {//要设置的全局访问的state对象
    answerList: [],
};
const mutations = {
    updatAnswer(state,arr) {
       if(arr.select instanceof Array){
        let has= state.answerList.findIndex((v) => {
            return v.id == arr.id;
        })
        if(has==-1){
            state.answerList.push(arr)
        }else{
            state.answerList.forEach(element => {
                if(element.id == arr.id){
                    element.select=arr.select
                }
            });
        }
       }else{
        let has= state.answerList.findIndex((v) => {
            return v.id == arr.id;
        })
        if(has==-1){
            state.answerList.push(arr)
        }
       }
     
    },
}
const store = new Vuex.Store({
    actions,
    getters,
    mutations,
    state
});

export default store;