<template>
  <div class="topMenu-main">
    <div class="topMenu">
      <div class="menu-left">
        <x-icon type="ios-plus-outline" size="30"></x-icon>
      </div>
      <div class="menu-center">
        <x-icon type="ios-checkmark-outline" size="30" @click.native="goVideo()"></x-icon>
        <x-icon type="ios-heart-outline" size="30" @click.native="goTopTab()"></x-icon>
        <x-icon type="ios-star-outline" size="30" @click.native="goMsg()"></x-icon>
      </div>
      <div class="menu-right">
        <x-icon type="ios-search" size="30"></x-icon>
      </div>
    </div>
    <div class="topMenu-other">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    goVideo(){
      this.$router.push('/musicBar/topMenu/videoUpdate')
    },
    goTopTab(){
      this.$router.push('/musicBar/topMenu/topTab/myPage')
    },
    goMsg(){
      this.$router.push('/musicBar/topMenu/msgUpdate')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

.vux-x-icon {
  fill: #fff;
}

.topMenu-main{
  @include wh(100%,100%);
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .topMenu{
    @include wh(100%,50px);
    background-color: $color163;
    .menu-left{
      float: left;
      @include wh(30.5%,100%);
      padding-top: 10px;
      padding-left: 10px;
    }
    .menu-center{
      float: left;
      @include wh(39%,100%);
      padding-top: 10px;
      svg{
        margin-left: 12px;
      }
    }
    .menu-right{
      float: right;
      @include wh(30.5%,100%);
      padding-top: 10px;
      padding-right: 10px;
      svg{
        float: right;
      }
    }
  }
  .topMenu-other{
    flex: 1;
  }
}

</style>
