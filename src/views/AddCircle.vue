<template>
  <div class="add_circle">
    <form action="/">
      <van-search
          v-model="value"
          show-action
          placeholder="请输入圈子名或圈子号"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCircle',
  data() {
    return {
    value: '',
  };
},
methods: {
  onSearch(val) {
    console.log(val)
  },
  onCancel() {
    this.$router.go(-1)
  },
},
}
</script>

<style scoped>

</style>