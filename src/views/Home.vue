<template>
  <div class="home">
    <van-nav-bar title="首页"></van-nav-bar>

    <van-cell style="background-color: #F9F9F9">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </van-cell>

    <div style="height: 20px;background-color: #F9F9F9"></div>

    <van-grid>
      <van-grid-item icon="photo-o" text="文字" to="/"/>
      <van-grid-item icon="photo-o" text="文字" to="/"/>
      <van-grid-item icon="photo-o" text="文字" to="/"/>
      <van-grid-item icon="photo-o" text="文字" to="/"/>
    </van-grid>

    <div style="height: 20px;background-color: #F9F9F9"></div>

    <van-cell-group>
      <van-cell>
        <h3>动态</h3>
        <div class="notice" v-for="item in status" :key="item.title">
          <van-divider/>
          <van-cell :title="item.title" :value="item.date" :label="item.content" size="large" />
        </div>
      </van-cell>
    </van-cell-group>

    <van-divider>我是有底线的哦</van-divider>

    <div style="height: 50px;background-color: #F9F9F9"></div>

    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import axios from 'axios'
import {Notify} from 'vant';

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
      status: [
        { title: 'v0.0.1 版本', content: '测试版本发布', date: '2020.2.17'},
        { title: 'v0.0.2 版本', content: '测试版本发布', date: '2020.2.17'},
        { title: 'v0.0.3 版本', content: '测试版本发布', date: '2020.2.17'},
        { title: 'v0.0.4 版本', content: '测试版本发布', date: '2020.2.17'},
        { title: 'v0.0.5 版本', content: '测试版本发布', date: '2020.2.17'},
      ]
    }
  },
  mounted() {
    axios.get('/api') //TODO 上线时跨域请求
        .then(response => {
          response = JSON.parse(response.data);
          if(response.data.status) {
            for (let data in response.data.status) {
              this.status.push(data)
            }
          } else if(!this.$cookies.isKey('user_session')) {
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
        })
        .catch(error => {
          Notify({ type: 'warning', message: error.toString() });
        });
  }
}
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 200px;
    text-align: center;
    background-color: #39a9ed;
  }
  h3 {
    margin-left: 20px;
  }
</style>
