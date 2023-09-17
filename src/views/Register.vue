<template>
  <div>

    <!--    头部-->
    <van-nav-bar
      left-arrow
      left-text="返回"
      title="注册"
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
        <van-button block native-type="submit" round type="primary">提交</van-button>
      </div>
    </van-form>
    <router-link class="link" to="/login">有账号，去登录</router-link>
  </div>
</template>

<script>
// import request from '@/utils/request'
import { register } from '@/api/user'

export default {
  name: 'UserRegister',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit (values) {
      // const res = await register(values)
      // console.log('submit', values)
      // console.log(res)
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        loadingType: 'spinner'
      })
      await register(values)
      this.$toast.success('注册成功')
      this.$router.push('/login')
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
  color: #ffa500;
}

</style>
