<template>
  <div class="login">
    <van-nav-bar title="登录" right-text="还没有账号？立即注册"></van-nav-bar>
    <div style="height: 20px;background-color: #F9F9F9"></div>
    <van-form @submit="onSubmit">
      <van-field v-model="user_name" name="username" label="用户名" placeholder="输入用户名" :rules="[{ required: true, message: '请填写用户名' }]"/>
      <van-field v-model="pass_word" type="password" name="password" label="密码" placeholder="输入密码" :rules="[{ required: true, message: '请填写密码' }]"/>
      <div style="margin: 16px;">
        <van-checkbox v-model="savePassAndUser" style="float: right;margin-bottom: 10px">存储用户名密码</van-checkbox>
        <van-button round block type="info" native-type="submit" style="float: left">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from 'axios'
import { Notify, Toast } from 'vant';

export default {
  name: "Login",
  data() {
    return {
      user_name: '',
      pass_word: '',
      savePassAndUser: false
    }
  },
  methods: {
    onSubmit(values) {
      axios.get('/api', {
        params: {
          username: values.username,
          password: values.password
        }
      }).then(response => {
            response = JSON.parse(response.data);
            if(response.data.status) {
              this.$cookies.set('user_session', response.data.user_session, '30d')
              this.$cookies.set('user_access', response.data.user_access, '30d')
              if(this.savePassAndUser) {
                this.$cookies.set('user_name', values.username)
                this.$cookies.set('pass_word', values.password)
              }
              this.$router.go(-1)
            } else {
              Toast.fail('用户名或密码不正确');
            }
          })
          .catch(error => {
            Notify({ type: 'warning', message: error.toString() });
          });
    },
  },
}
</script>

<style scoped>

</style>