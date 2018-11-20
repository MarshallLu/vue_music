<template>
  <div class="play-main">
    <x-header class="play-header">我不能忘记你-林忆莲</x-header>

    <audio ref="audio" src="/static/xufei.mp3">
    </audio>

    <div class="play-img">
        呀～图片找不到哦
    </div>
    <div class="play-ctrl">
      <x-progress class="p-bar" :percent="prog" :show-cancel="false"></x-progress>
      <x-icon type="ios-arrow-back" size="30"></x-icon>
      <x-icon @click.native="ppause()" v-show="playBtn" type="ios-circle-filled" size="30"></x-icon>
      <x-icon @click.native="pplay()" v-show="pauseBtn" type="ios-circle-outline" size="30"></x-icon>
      <x-icon type="ios-arrow-forward" size="30"></x-icon>
    </div>
  </div>
</template>

<script>
import { XHeader, XProgress } from 'vux'

export default {
  data(){
    return{
      playBtn: false,
      pauseBtn: true,
      // nowtime: audio.currentTime,
      // alltime: audio.duration,
      prog: 60
    }
  },
  created(){
    // var audio = document.getElementById("audio")
  },
  mounted(){
    // alert(audio)
  },
  components:{
    XHeader,
    XProgress
  },
  methods:{
    pplay(){
      this.playBtn = true;
      this.pauseBtn = false;
      this.$refs.audio.play();
      // this.alltime = audio.duration;
      // this.nowtime = audio.currentTime;
      // console.log("打印当前时间"+this.alltime)
    },
    ppause(){
      this.pauseBtn = true;
      this.playBtn = false;
      this.$refs.audio.pause();
      // this.alltime = audio.duration;
      // this.nowtime = audio.currentTime;
    }
  },
  watch:{
    // nowtime(val){
    //   console.log("当前时间是"+val)
    // },
    // alltime(a){
    //   console.log("总时间是"+a)
    // },
    // progs(a){
    //   console.log("进度条"+a)
    // }
  },
  computed:{
    progs(){
      // return parseInt(this.nowtime/this.alltime)
      //进度条做到事件监听这步就先暂停，参考博客：
      //https://blog.csdn.net/qwezxc24680/article/details/78227728
      // return parseInt(this.nowtime/this.alltime)
      //进度条做到事件监听这步就先暂停，参考博客：
      //https://blog.csdn.net/qwezxc24680/article/details/78227728
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/mixin.scss';

html,body{
  height: 100%;
  width: 100%;
}

// 网易云音乐的红色
$color163: #E10201;

.play-main{
  @include wh(100%,100%);
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  .play-header{
    @include wh(100%,46px);
  }
  .play-img{
    flex:4;
    background-color: #F5F4F4;
    @include hc(500px);
  }
  .play-ctrl{
    flex:1;
    svg{
      margin-left: 18.5%;
      margin-top: 10%;
    }
  }
}

</style>
