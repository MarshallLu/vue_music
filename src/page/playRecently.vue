<template>
  <div>
    <x-header class="localMusic-header">最近播放</x-header>

    <!-- <group :title="$t('播放全部')">
      <cell :title="$t('我不能忘记你')" link="" inline-desc='林忆莲-我不能忘记你'></cell>
      <cell :title="$t('诱')" link="" inline-desc='林宥嘉-大小说家'></cell>
    </group> -->

    <m-cell :musiclist="mlist"></m-cell>
  </div>
</template>

<script>
import { XHeader, Cell, Group } from 'vux'
import { mapState } from 'vuex'
import mCell from '../components/mCell.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    XHeader,
    Cell,
    Group,
    'm-cell': mCell
  },
  computed:{
    ...mapState([
      'mlist'
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

.localMusic-header{
  background-color: $color163;
}

</style>
