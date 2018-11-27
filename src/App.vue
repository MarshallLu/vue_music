<template>
  <div id="app">
    <router-view></router-view>
    <audio ref="audios" :src="'/static/'+ mlist[0].msrc"></audio>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return{

    }
  },
  watch:{
    mctrl(n,o){      //要是出错，考虑下换成ES5的写法
      // debugger
      if(!n){
        this.$refs.audios.pause();
      }else{
        this.$refs.audios.play();
      }
    }
  },
  computed:{
    ...mapState([
      'mctrl', 'mlist'
    ])
  }
}
</script>

<style lang="scss">
@import './style/common.scss';

#app{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  font-weight: normal;
  font-family: "Microsoft Yahei";
  box-sizing: border-box;
  -webkit-tap-highlight-color:transparent;
  -webkit-font-smoothing: antialiased;
  &:hover{
      outline: none;
  }
}
</style>
