<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'LayOut',
  activated () {
    console.log('页面被激活了')
  },
  deactivated () {
    console.log('页面被隐藏了')
  }
}
</script>

<style lang="less" scoped>

</style>
