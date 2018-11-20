<template>
  <div class="music-main">
    <div class="music-other">
      <router-view></router-view>
    </div>
    <div class="music-bar">
      <div class="bar-tit" @click="barClick()">
        我不能忘记你 &nbsp&nbsp 林忆莲
      </div>
      <div class="bar-icon">
        <x-icon type="ios-circle-outline" size="30" @click.native="show()"></x-icon>
      </div>
      <div class="bar-icon">
        <x-icon type="ios-arrow-up" size="30" @click.native="show()"></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    // alert("marshall")
  },
  methods:{
    show(){
      alert("music")
    },
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
