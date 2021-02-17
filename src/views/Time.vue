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

export default {
  name: "Time",
  components: {
    Tabbar
  }
}
</script>

<style scoped>

</style>