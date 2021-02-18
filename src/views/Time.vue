<template>
  <div class="time">
    <van-nav-bar title="时间"></van-nav-bar>
    <div style="height: 20px;background-color: #F9F9F9"></div>
    <van-cell title="普通计时" is-link to="/normalcount" />
    <div style="height: 20px;background-color: #F9F9F9"></div>
    <van-cell title="番茄计时" is-link to="/tomatocount" />
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import axios from "axios";
import {Notify} from "vant";

export default {
  name: "Time",
  components: {
    Tabbar
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