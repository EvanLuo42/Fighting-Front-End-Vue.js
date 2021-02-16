<template>
  <div class="home">
    <van-nav-bar title="首页"></van-nav-bar>

    <van-cell>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </van-cell>

    <van-cell>
      <van-grid>
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </van-cell>

    <van-tabbar v-model="active">
      <van-tabbar-item name="home" icon="home-o"><router-link to="/">Fighting</router-link></van-tabbar-item>
      <van-tabbar-item name="count" icon="underway-o"><router-link to="/">时间</router-link></van-tabbar-item>
      <van-tabbar-item name="study-circle" icon="comment-o"><router-link to="/">学习圈</router-link></van-tabbar-item>
      <van-tabbar-item name="my" icon="user-o"><router-link to="/">我的</router-link></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      active: 'home',
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
