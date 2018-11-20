import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  mlist: []
}

const mutations = {
  gtMusic(state,mclist){

    let list = {
      mid: mclist.mid,
      songs: mclist.songs,
      singer: mclist.singer,
      album: mclist.album
    };

    state.mlist.unshift(list);

    for(let i=1;i<state.mlist.length;i++){
      if(state.mlist[i].mid == mclist.mid){
        state.mlist.splice(i,1);
      }
    }
  }
}

export default new Vuex.Store({
  state,
  mutations
})










// store.js
