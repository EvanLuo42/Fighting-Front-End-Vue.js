<template>
  <div class="tomato_count">
    <van-nav-bar title="番茄计时" left-text="返回" left-arrow @click-left="onClickLeft()"/>
  </div>
</template>

<script>
export default {
  name: "TomatoCount",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>

</style>