<template>
  <div class="personal_page">
    <van-nav-bar title="个人主页" left-text="返回" left-arrow @click-left="onClickLeft()"/>
    <user-info
        sex="1"
        back_img="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        head_img="https://s3.ax1x.com/2021/02/18/yWFC1U.jpg"
        follow_num="10"
        fans_num="1"
        user_name="EvanLuo42"
    ></user-info>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
export default {
  name: "PersonalPage",
  components: {
    'user-info': UserInfo
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>