<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="scss">
@import './style/common.scss';

#app{
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  font-style: normal;
  text-decoration: none;
  border: none;
  font-weight: normal;
  font-family: "Microsoft Yahei";
  box-sizing: border-box;
  -webkit-tap-highlight-color:transparent;
  -webkit-font-smoothing: antialiased;
  &:hover{
      outline: none;
  }
}
</style>
