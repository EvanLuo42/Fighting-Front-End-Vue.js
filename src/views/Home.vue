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

    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";

export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data() {
    return {
    }
  },
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
</style>
