<template>
  <div class="normal_count">
    <van-nav-bar title="普通计时" left-text="返回" left-arrow @click-left="onClickLeft()"/>
    <van-picker v-show="set_time" ref="picker" title="选择时长(hh/mm/ss)" show-toolbar="false" :columns="columns" cancel-button-text=" " confirm-button-text=" "/>
    <div style="height: 20px;background-color: #F9F9F9"></div>
    <van-button type="primary" @click="onClickButton()" v-show="set_time" style="margin-left: 155px">开始计时</van-button>
    <van-circle v-show="progress_show"></van-circle>
    <van-count-down :time="time" v-show="progress_show" ref="countdown"/>
  </div>
</template>

<script>
export default {
  name: "NormalCount",
  components: {
  },
  data() {
    return {
      percentage: 20,
      progress_show: false,
      set_time: true,
      time: 0,
      progress: 0,
      columns: [
        {
          values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
          defaultIndex: 0,
        },
        // 第二列
        {
          values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
          defaultIndex: 3,
        },
        {
          values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
          defaultIndex: 0,
        },
      ],
    }
  },
  methods: {
    onClickLeft() {
      window.history.go(-1)
    },
    onClickButton() {
      this.progress_show = true
      this.set_time = false
      this.time = (this.$refs.picker.getColumnValue(0) * 3600000) + (this.$refs.picker.getColumnValue(1) * 60000) + (this.$refs.picker.getColumnValue(2) * 1000)
    }
  },
}
</script>

<style scoped>

</style>