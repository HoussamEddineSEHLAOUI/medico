<template>
    <div :class="{ 'chat chat-left' : isSender }">
        <div class="chat-user">
            <a class="avatar m-0">
            <img src="@/assets/images/user/01.jpg" alt="avatar" class="avatar-35 ">
            </a>
            <span class="chat-time mt-1">6:48</span>
        </div>
        <div class="chat-detail">
            <div class="chat-message" v-if="text">
                <p>{{text}}</p>
            </div>
            <div class="chatimage" v-else>
                <img :src="imageUrl" class="imgMessage ">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MessageVue',
  props: ['imageUrl', 'text', 'storgeUrl'],
  data () {
    return {
      isSender: true
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
}
</style>
