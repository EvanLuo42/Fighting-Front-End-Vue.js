<template>
  <div class="normal_count">
    <van-nav-bar title="普通计时" left-text="返回" left-arrow @click-left="onClickLeft()"/>
  </div>
</template>

<script>
export default {
  name: "NormalCount",
  methods: {
    onClickLeft() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>

</style>