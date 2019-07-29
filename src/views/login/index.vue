<template>
  <div id="login_content">
    <van-nav-bar title="欢迎" />
    <form action="/" method="post">
      <van-cell-group>
        <van-field v-model="user.mobile" label="手机号" placeholder="请输入手机号" required/>

        <van-field v-model="user.code" label="密码" placeholder="请输入密码" required type="password"/>
      </van-cell-group>
      <van-button type="info" block @click.prevent="handleLogin()">登录</van-button>
    </form>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    async handleLogin () {
      try {
        const data = await login(this.user)
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
    background-color: #0096fa;
    .van-nav-bar__title{
        color: #fff;
    }
}
</style>
