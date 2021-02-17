<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="Home" icon="home-o"><router-link to="/" style="color: black">Fighting</router-link></van-tabbar-item>
    <van-tabbar-item name="Time" icon="underway-o"><router-link to="/time" style="color: black">时间</router-link></van-tabbar-item>
    <van-tabbar-item name="StudyCircle" icon="comment-o"><router-link to="/studying" style="color: black">学习圈</router-link></van-tabbar-item>
    <van-tabbar-item name="My" icon="user-o"><router-link to="/my" style="color: black">我的</router-link></van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      active: this.$route.name,
    }
  },
}
</script>

<style scoped>

</style>