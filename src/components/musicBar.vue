<template>
  <div class="music-main">
    <div class="music-other">
      <router-view></router-view>
    </div>
    <div class="music-bar">
      <div class="bar-tit" @click="barClick()">
        {{mlist[0].songs}}&nbsp&nbsp{{mlist[0].singer}}
      </div>
      <div class="bar-icon">
        <x-icon v-show="mctrl" type="ios-circle-filled" size="30" @click.native="ctrlMusic(false)"></x-icon>
        <x-icon v-show="!mctrl" type="ios-circle-outline" size="30" @click.native="ctrlMusic(true)"></x-icon>
      </div>
      <div class="bar-icon">
        <x-icon type="ios-arrow-up" size="30" ></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data(){
    return{

    }
  },
  mounted(){
    // alert("marshall")
  },
  computed:{
    ...mapState([
      'mctrl', 'mlist'
    ])
  },
  methods:{
    ...mapMutations([
      'ctrlMusic'
    ]),
    barClick(){
      this.$router.push('/playPage')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

.music-main{
  @include wh(100%,100%);
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .music-other{
    flex: 1;
  }
  .music-bar{
    @include wh(100%,50px);
    background-color: #F5F4F4;
    border-top: 1px solid #DEDEDE;
    .bar-tit{
      @include wh(70%,100%);
      line-height: 50px;
      float: left;
      padding-left: 10px;
    }
    .bar-icon{
      @include wh(15%,100%);
      float: left;
      padding-top: 10px;
    }
  }
}




</style>
