<template>
  <div class="tomato_count">
    <van-nav-bar title="番茄计时" left-text="返回" left-arrow @click-left="onClickLeft()"/>
  </div>
</template>

<script>
import axios from "axios";
import {Notify} from "vant";

export default {
  name: "TomatoCount",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  },
  mounted() {
    if(!this.$cookies.isKey('user_session')) {
      axios.get('/api', {
        params: {
          username: this.$cookies.get('user_name'),
          password: this.$cookies.get('pass_word')
        }
      }).then(response => {
        response = JSON.parse(response.data);
        if(response.data.status) {
          this.$cookies.set('user_session', response.data.user_session, '30d')
          this.$cookies.set('user_access', response.data.user_access, '30d')
          this.$router.go(-1)
        }
      })
          .catch(error => {
            Notify({ type: 'warning', message: error.toString() });
          });
    }
  }
}
</script>

<style scoped>

</style>