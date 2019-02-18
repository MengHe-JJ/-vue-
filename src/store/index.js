import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    user_name:'',
    bookarr:[],
    girlarr:[],
    boyarr:[],
    lookarr:[],
    searchVal:"",
    itemVal:'',
  },
  mutations:{
    setname(state,user_name){
        state.user_name=user_name
    },
    setbook(state,bookarr){
        state.bookarr=bookarr
    },
    setgirl(state,girlarr){
        state.girlarr=girlarr
    },
    setboy(state,boyarr){
        state.boyarr=boyarr
    },
    setLook(state,look){
        state.lookarr=look;
    },
    setVal(state,searchVal){
        state.searchVal=searchVal;
       // window.localStorage.setItem('search', searchVal)
    },
    setItem(state,val){
        state.itemVal=val;
    }
  },
  getters:{
    getname(state){
        return state.user_name
    },
    getbook(state){
        return state.bookarr
    },
    getgirl(state){
        return state.girlarr
    },
    getboy(state){
        return state.boyarr
    },
    getVal(state){
        return state.searchVal
    }
  },
  actions:{
    setname(context){
        context.commit("setname")
    },
    setbook(context){
        context.commit("setbook")
    },
    setgirl(context){
        context.commit("setgirl")
    },
    setboy(context){
        context.commit("setboy")
    },
    setLook(context){
        context.commit("setLook")
    },
    setVal(context){
        context.commit("setVal")
    },
    setItem(context){
        context.commit("setItem")
    }
  }
})

export default store
