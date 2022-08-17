<template>
    <div :class="[userType === 'Admin' ? 'chat chat-left' : 'chat' ]">
        <div class="chat-user">
            <a class="avatar m-0">
            <img src="@/assets/images/user/01.jpg" alt="avatar" class="avatar-35 ">
            </a>
            <span class="chat-time mt-1">{{getTimeFormat(timestamp)}}</span>
        </div>
        <div class="chat-detail">
            <div class="chat-message" v-if="text">
                <p>{{text}}</p>
            </div>
            <div class="chatimage" v-else @click="showImageBlock()">
                <img :src="imageUrl" class="imgMessage" alt="">
            </div>
        </div>
    </div>
    <ModelShowImage :imageUrl="imageUrl" v-if="isShowImageBlock" @showImageBlock="showImageBlock"></ModelShowImage>
</template>
<script>
import ModelShowImage from '@/components/Chat/ModelShowImage.vue'
export default {
  name: 'MessageVue',
  props: ['imageUrl', 'text', 'storgeUrl', 'timestamp', 'userType'],
  components: {
    ModelShowImage
  },
  data () {
    return {
      isSender: false,
      isShowImageBlock: false
    }
  },
  methods: {
    miniSidebar () {
      this.$emit('toggle')
    },
    getTimeFormat: function (dateTimestamp) {
      const dateObject = new Date(dateTimestamp)
      const hours = dateObject.getHours()
      const minutes = dateObject.getMinutes()
      return hours + ':' + minutes
    },
    showImageBlock: function () {
      console.log('showImageBlockModel')
      this.isShowImageBlock = !this.isShowImageBlock
    }
  }
}
</script>
<style scoped>
.chat-left .chatimage{
  background-color: #50b6ff4a;
  margin: 10px;
  border-radius: 7px;
  width: 70%;
  float: left;
}
.chatimage{
  background-color: #50b6ff4a;
  margin: 10px;
  border-radius: 7px;
  width: 70%;
  float: right;
}
.imgMessage{
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 300px;
  max-height: 200px;
}
</style>
