<template>
  <div>
    UserCenter
    <hr>
    <router-link to="/login">
      <van-button type="primary">登录</van-button>
    </router-link>
    <hr>
    <router-link to="/register">
      <van-button type="primary">注册</van-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserCenter'
}
</script>

<style lang="less" scoped>

</style>
