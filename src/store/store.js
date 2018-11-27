import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  mlist: [{
    mid: '',
    songs: '',
    singer: '',
    album: '',
    msrc: ''
  }],
  mctrl: false //记录播放暂停，以及按钮显示隐藏
}

const mutations = {
  gtMusic(state,mclist){

    let list = {
      mid: mclist.mid,
      songs: mclist.songs,
      singer: mclist.singer,
      album: mclist.album,
      msrc: mclist.msrc
    };

    state.mlist.unshift(list);

    for(let i=1;i<state.mlist.length;i++){
      if(state.mlist[i].mid == mclist.mid){
        state.mlist.splice(i,1);
      }
      if(state.mlist[i].mid == ''){
        state.mlist.splice(i,1);
      }
    }
  },
  ctrlMusic(state,bol){
    state.mctrl = bol;
  }
}

export default new Vuex.Store({
  state,
  mutations
})










// store.js
