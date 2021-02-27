<template>
  <div class="add_friend">
    <form action="/">
      <van-search
          v-model="value"
          show-action
          placeholder="请输入用户名"
          @search="onSearch"
          @cancel="onCancel"
      />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddFriend',
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