<template>
  <div class="user-info">
    <img :src="back_img" class="blur">
    <!--用户头像-->
    <div class="cover">
      <van-image round width="80px" height="80px" :src="head_img" class="user-image" style="margin-left: 40%"/>
      <br>
      <div class="text-info">
        <!--用户昵称-->
        <span class="user-name" style="margin-left: 39%">
          {{user_name}}
          <img v-if="sex==1" src="https://s3.ax1x.com/2021/02/18/yWFC1U.jpg" style="width: 14px;margin-right: -14px;">
          <img v-if="sex==0" src="https://s3.ax1x.com/2021/02/18/yWFC1U.jpg" style="width: 14px;margin-right: -14px;">
        </span>
        <!--关注信息-->
        <table class="user-follow" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td>{{follow_num}} 关注</td>
            <td>{{fans_num}} 粉丝</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    user_name: {
      default: ''
    },
    follow_num: {
      default: 0
    },
    fans_num: {
      default: 0,
    },
    head_img: {
      default: ''
    },
    sex: {
      default: -1
    },
    back_img: {
      default: ''
    }
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
.user-info{
  position: relative;
  height: 200px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}
.user-image{
  vertical-align: middle;
  border: 2px solid #ffffff;
  z-index: 100;
  margin-top: 30px;
}
.blur{
  position: absolute;
  top:-5%;
  left: -5%;
  right: -5%;
  width:110%;
  height: 110%;
  object-fit:cover;
  -webkit-filter: blur(10px); /* Chrome, Opera */
}
.user-info .text-info{
  position: relative;
  margin-top: 10px;
}
.user-info .user-name{
  color: #ffffff;
  font-size: 16px;
  margin: 5px;
  display: block;
  font-weight: 700;
}
.user-info .user-follow{
  font-size: 14px;
  width: 60%;
  margin-left: 25%;
  height: 30px;
  line-height: 30px;
  color: #f5f5f5;
}
/*半透明黑色蒙版*/
.user-info .cover{
  width:100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
  position: relative;
}
</style>