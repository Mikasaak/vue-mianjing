<template>
  <div>

    <!--    头部-->
    <van-nav-bar
      left-arrow
      left-text="返回"
      title="登录"
      @click-left="onClickLeft"
    />
    <!--    表单-->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        :rules="[{ required: true, message: '请填写用户名' }]"
        label="用户名"
        name="username"
        placeholder="用户名"
      />
      <van-field
        v-model="password"
        :rules="[
          { required: true, message: '请填写密码' },
          { pattern: /^[a-z0-9]{8,12}$/i, message: '密码格式不正确'}
        ]"
        label="密码"
        name="password"
        placeholder="密码"
        type="password"
      />
      <div style="margin: 16px;">
        <van-button block native-type="submit" round type="info">提交</van-button>
      </div>
    </van-form>
    <router-link class="link" to="/register">没账号，去注册</router-link>
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'UserLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      const res = await login(values)
      this.$toast.success('登录成功')
      this.$router.push('/')
      console.log(res)
    },
    onClickLeft () {
      // this.$router.go(-1)
      this.$router.push('/user')
      console.log(1111)
    }
  }
}
</script>

<style lang="less" scoped>
.link {
  display: block;
  text-align: right;
  margin-top: 10px;
  margin-right: 20px;
  color: #07c160;
}
</style>
