<template>
  <div class="studying">
    <van-nav-bar title="学习圈">
      <template #right>
        <van-icon name="plus" size="18" @click="show = true"/>
      </template>
    </van-nav-bar>
    <van-cell style="background-color: #F9F9F9">
      <h3>我的圈子</h3>
      <van-grid :gutter="10" column-num="3" v-if="hasCircle">
        <van-grid-item v-for="value in my_circle" :key="value" :icon="value.icon" :text="value.title" :to="value.url" style="border-radius: 30px"/>
      </van-grid>
      <van-divider v-else>你还没有订阅圈子，可以去推荐圈子逛逛</van-divider>
    </van-cell>

    <div style="height: 20px;background-color: #F9F9F9"></div>
    <van-cell style="background-color: #F9F9F9">
      <h3>推荐圈子</h3>
      <van-grid :gutter="10" column-num="3" v-if="hasSuggestCircles">
        <van-grid-item v-for="value in suggest_circle" :key="value" :icon="value.icon" :text="value.title" :to="value.url"/>
      </van-grid>
      <van-divider v-else>没有推荐的圈子哦~</van-divider>
    </van-cell>

    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />

    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from "@/components/Tabbar";
import axios from "axios";
import {Notify} from "vant";

export default {
  name: "StudyCircle",
  components: {
    Tabbar
  },
  data() {
    return {
      my_circle: [
        { title: 'A', icon: 'https://b.yzcdn.cn/vant/icon-demo-1126.png', url: '/'},
        { title: 'A', icon: 'https://s3.ax1x.com/2021/02/18/yWFC1U.jpg', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
      ],
      suggest_circle: [
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
        { title: 'A', icon: 'photo-o', url: '/'},
      ],
      hasSuggestCircles: false,
      hasCircle:false,
      show: false,
      actions: [
        { name: '加入圈子' },
        { name: '加好友' },
      ],
    }
  },
  methods: {
    onSelect(item) {
      this.show = false
      switch (item.name) {
        case '加入圈子':
          this.$router.push('AddCircle')
          break
        case '加好友':
          this.$router.push('AddFriend')
          break
      }
    }
  },
  mounted() {
    if(!this.$cookies.isKey('user_session')) {
      axios.get('/api', {
        params: {
          username: this.$cookies.get('user_name'),
          password: this.$cookies.get('pass_word')
        }
      }).then(response => {
        response = JSON.parse(response.data);
        if(response.data.status) {
          this.$cookies.set('user_session', response.data.user_session, '30d')
          this.$cookies.set('user_access', response.data.user_access, '30d')
          this.$router.go(-1)
        }
      })
          .catch(error => {
            Notify({ type: 'warning', message: error.toString() });
          });
    }
  }
}
</script>

<style scoped>

</style>