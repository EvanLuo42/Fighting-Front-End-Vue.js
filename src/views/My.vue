<template>
  <div class="my">
    <van-nav-bar title="我的"></van-nav-bar>
    <div style="height: 20px;background-color: #F9F9F9"/>
    <van-cell is-link to="/personalpage">
      <template #icon>
        <van-image round :src="user_avatar" width="50px" height="50px"/>
      </template>
      <template #title>
        <h3 style="margin-top: 1%;margin-left: 10%">{{ user_name }}</h3>
      </template>
      <template #label>
        <span style="margin-bottom: 50px;margin-left: 10%">UID: {{ user_id }}</span>
      </template>
    </van-cell>
    <div style="height: 20px;background-color: #F9F9F9"/>
    <van-cell title="设置" is-link to="/settings"></van-cell>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import axios from "axios";
import {Notify} from "vant";

export default {
  name: "My",
  components: {
    Tabbar,
  },
  data() {
    return {
      user_avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg',
      user_name: 'EvanLuo42',
      user_id: '114514',
    }
  },
  mounted() {
    //if(this.$cookies.isKey('user_session')) {
      axios.get('/user') //TODO 上线时跨域请求
          .then(response => {
            response = JSON.parse(response.data);
            this.user_name = response.data.user_name
            this.user_id = response.data.user_id
            this.user_avatar = response.data.user_avatar
          })
          .catch(error => {
            Notify({ type: 'warning', message: error.toString() });
          });
    //} else {
      //this.$router.push({ path: 'login' })
    //}
  }
}
</script>

<style scoped>

</style>