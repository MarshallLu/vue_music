<template>
  <div>
    <x-header class="localMusic-header">本地音乐</x-header>
    
    <!-- <group :title="$t('播放全部')">
      <cell :title="$t('我不能忘记你')" link="" inline-desc='林忆莲-我不能忘记你'></cell>
      <cell :title="$t('诱')" link="" inline-desc='林宥嘉-大小说家'></cell>
    </group> -->

    <m-cell :musiclist="musiclist"></m-cell>
  </div>
</template>

<script>
import { XHeader, Cell, Group } from 'vux'
import mCell from '../components/mCell.vue'

export default {
  data(){
    return{
      musiclist: []
    }
  },
  components:{
    XHeader,
    Cell,
    Group,
    'm-cell': mCell
  },
  mounted(){
    this.getMusicList()
  },
  methods:{
    getMusicList(){
      this.axios.get('/musicData').then((response)=>{
        // debugger
        console.log(response)
        this.musiclist = response.data.song
        console.log(this.musiclist)
      },(err)=>{
        console.log(err)
      })
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

.localMusic-header{
  background-color: $color163;
}

</style>
