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

    <h3>公告</h3>

    <div class="notice" v-for="item in status" :key="item">
      <van-cell :title="item.title" :value="item.date" :label="item.content" size="large" />
    </div>

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
        { title: 'v0.0.2 版本', content: '测试版本发布', date: '2020.2.17'},
      ]
    }
  },
  mounted() {
    axios.get('/api')
        .then(response => {
          response = JSON.parse(response.data);
          for (var a in response.data.status) {
            this.status.push(a)
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
