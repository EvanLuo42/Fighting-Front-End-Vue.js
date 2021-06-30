<template>
  <div class="home">
    <van-nav-bar title="首页"></van-nav-bar>

    <van-cell style="background-color: #F9F9F9">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="banner in banners" :key="banner">
          <van-image :show-error="showError" :src="banner.url"/>
        </van-swipe-item>
      </van-swipe>
    </van-cell>

    <div style="height: 20px;background-color: #F9F9F9"></div>

    <van-grid>
      <van-grid-item icon="photo-o" text="计时器" to="/time"/>
      <van-grid-item icon="photo-o" text="学习圈" to="/studycircle"/>
      <van-grid-item icon="photo-o" text="装扮" to="/"/>
      <van-grid-item icon="photo-o" text="实验室" to="/"/>
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
import { Notify } from 'vant';

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
      status: [
        { title: 'v0.0.1 版本', content: '测试版本发布', date: '2020.2.17'},
      ],
      banners: [
        { url: 'https://img01.yzcdn.cn/vant/cat.jpeg' }
      ],
      showError: false
    }
  },
  mounted() {
    if(!this.$cookies.isKey('user_session') || !this.$cookies.isKey('user_access')) {
      if(!this.$cookies.isKey('user_name') || !this.$cookies.isKey('user_pass')) {
        //this.$router.push({ path: '/login' })
      } else {
        axios
            .post('/api/login')
            .then(response => {
              if(response.data.status === 'ok') {
                this.$cookies.set('user_session', response.data.user_session, '30min')
                this.$cookies.set('user_access', response.data.user_access, '30min')
              } else if(response.data.status === 'error') {
                //this.$router.push({ path: '/login' })
              }
            })
            .catch(function (error) {
              Notify({ type: 'warning', message: error.toString() })
              //this.$router.push({ path: '/login' })
            })
      }
    }
    axios
        .get('/api/banner')
        .then(response => {
          if(response.data.status === 'ok') {
            for (const banner in response.data.banners) {
              this.banners.push(banner)
            }
          } else {
            this.showError = true
          }
        })
        .catch(function (error) {
          Notify({ type: 'warning', message: error.toString() })
          this.showError = true
        })
  }
}
</script>

<style>
  h3 {
    margin-left: 20px;
  }
</style>
