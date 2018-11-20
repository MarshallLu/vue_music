<template>
  <div class="myPage">
    <group :title="$t('个人中心')">
      <cell :title="$t('我的云音乐')" link="/musicBar/localMusic" inline-desc='(425)'></cell>
      <cell :title="$t('最近播放')" link="/musicBar/playRecently" inline-desc='(100)'></cell>
      <cell :title="$t('下载管理')" link="" inline-desc='(378)'></cell>
      <cell :title="$t('我的电台')" link="" inline-desc='(7)'></cell>
      <cell :title="$t('我的收藏')" link="" inline-desc='(97)'></cell>
    </group>

    <group :title="$t('创建的歌单')">
      <cell :title="$t('大小说家')" link="" inline-desc='2012.6.22 歌曲15'></cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'

export default {
  data(){
    return{

    }
  },
  components:{
    Cell,
    Group
  },
  mounted(){

  },
  methods:{

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

.myPage{
  overflow: scroll;
}

</style>
