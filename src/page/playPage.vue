<template>
  <div class="play-main">
    <x-header class="play-header">
      {{mlist[0].songs}}&nbsp&nbsp{{mlist[0].singer}}
    </x-header>

    <div class="play-img">
        呀～图片找不到哦
    </div>
    <div class="play-ctrl">
      <x-progress class="p-bar" :percent="prog" :show-cancel="false"></x-progress>
      <x-icon type="ios-arrow-back" size="30"></x-icon>
      <x-icon @click.native="ctrlMusic(false)" v-show="mctrl" type="ios-circle-filled" size="30"></x-icon>
      <x-icon @click.native="ctrlMusic(true)" v-show="!mctrl" type="ios-circle-outline" size="30"></x-icon>
      <x-icon type="ios-arrow-forward" size="30"></x-icon>
    </div>
  </div>
</template>

<script>
import { XHeader, XProgress } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
  data(){
    return{
      prog: 60
    }
  },
  created(){

  },
  mounted(){

  },
  components:{
    XHeader,
    XProgress
  },
  methods:{
    ...mapMutations([
      'ctrlMusic'
    ])
  },
  watch:{

  },
  computed:{
    ...mapState([
      'mctrl', 'mlist'
    ])
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
