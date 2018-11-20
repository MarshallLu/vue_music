<template>
  <div class="topTab-main">
    <div class="topTab">
      <tab
        bar-active-color="#E10201"
        :line-width="1"
        active-color="#E10201">
        <tab-item @on-item-click="goDiscovery()">发现</tab-item>
        <tab-item @on-item-click="goMyPage()" selected>我的</tab-item>
        <tab-item @on-item-click="goRadio()">电台</tab-item>
      </tab>
    </div>
    <div class="topTab-other">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'

export default {
  data(){
    return{

    }
  },
  components:{
    Tab,
    TabItem
  },
  methods:{
    goDiscovery(){
      this.$router.push('/musicBar/topMenu/topTab/discovery')
    },
    goMyPage(){
      this.$router.push('/musicBar/topMenu/topTab/myPage')
    },
    goRadio(){
      this.$router.push('/musicBar/topMenu/topTab/radio')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

.topTab-main{
  @include wh(100%,100%);
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  .topTab{
    @include wh(100%,45px);
  }
  .topTab-other{
    flex: 1;
    overflow: hidden;
  }
}

</style>
