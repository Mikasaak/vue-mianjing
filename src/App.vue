<template>
  <div id="app">
    <router-view>
    </router-view>
    <van-tabbar route>
      <van-tabbar-item icon="fire-o" to="/article">面经</van-tabbar-item>
      <van-tabbar-item icon="like-o" to="/like">喜欢</van-tabbar-item>
      <van-tabbar-item icon="star-o" to="/collect">收藏</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isDisabled: true,
      value: 3
    }
  }
}
</script>
<style lang="less">
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

</style>
