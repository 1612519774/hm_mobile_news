<template>
  <div id="login_content">
    <van-nav-bar title="欢迎" />
    <form action="/" method="post">
      <van-cell-group>
         <van-field v-validate="'required|mobile'" name="phone" :error-message="errors.first('phone')"  v-model="user.mobile" required label="手机号" placeholder="请输入手机号"/>

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
      this.loading = true
      const valid = await this.$validator.validate()
      if (!valid) {
        this.loading = false
        return
      }
      try {
        const data = await login(this.form)
        console.log(data)
        this.$store.commit('saveUser', data)
        this.$router.push({ path: '/' })
      } catch (error) {
        console.log(error)
      }
      this.loading = false
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
