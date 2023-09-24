<template>
  <div class="user-page">
    <div class="user">
      <img :src="avatar" alt="">
      <h3>{{ username }}</h3>
    </div>
    <van-grid :column-num="3">
      <van-grid-item icon="clock-o" text="历史记录"/>
      <van-grid-item icon="bookmark-o" text="我的收藏" to="/collect"/>
      <van-grid-item icon="thumb-circle-o" text="我的点赞" to="/like"/>
    </van-grid>
    <van-cell-group>
      <van-cell is-link title="我的收藏" to="/collect"/>
      <van-cell is-link title="我的点赞" to="/like"/>
      <van-cell is-link title="历史记录"/>
      <van-cell is-link title="退出登录" @click="logout()"/>
    </van-cell-group>
  </div>

</template>

<script>
import { getUserInfo } from '@/api/user'
import { delToken } from '@/utils/localStorage'

export default {
  name: 'UserCenter',
  created () {
    this.getUserInfo()
  },
  data () {
    return {
      username: '',
      avatar: ''
    }
  },
  methods: {
    async getUserInfo () {
      const res = await getUserInfo()
      console.log(res)
      this.username = res.data.data.username
      this.avatar = res.data.data.avatar
    },
    logout () {
      delToken()
      this.$toast('退出登录成功')
      this.$router.push('/login')
    }
  }

}
</script>

<style lang="less" scoped>
.user {
  text-align: center;
  padding: 20px 0;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  h3 {
    margin-top: 10px;
  }
}
</style>
