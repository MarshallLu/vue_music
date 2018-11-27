<template>
  <div>
    <div class="m-cell"  v-for="(item,index) in musiclist" @click="getIdx(index)">
      <div class="cell-top">
        {{item.songs}}
      </div>
      <div class="cell-bottom">
        {{item.singer}}  -  {{item.album}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data(){
    return{

    }
  },
  props:['musiclist']
  ,
  methods:{
    ...mapMutations([
      'gtMusic', 'ctrlMusic'
    ]),
    getIdx(index){
      let mclist = {
          mid: this.musiclist[index].mid,
          songs: this.musiclist[index].songs,
          singer: this.musiclist[index].singer,
          album: this.musiclist[index].album,
          msrc: this.musiclist[index].msrc
      }
      this.gtMusic(mclist)
      this.ctrlMusic(true);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/common.scss';

.m-cell{
  @include wh(100%,50px);
  border-bottom: 1px solid $bordercl;
  padding: 5px;
  .cell-top{
    @include wh(100%,50%);
    line-height: 25px;
    padding-left: 10px;
    font-size: 18px;
    color: black;
  }
  .cell-bottom{
    @include wh(100%,50%);
    line-height: 25px;
    padding-left: 10px;
    font-size: 12px;
    color: gray ;
  }
}

</style>
