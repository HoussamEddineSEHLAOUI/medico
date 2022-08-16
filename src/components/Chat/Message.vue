<template>
    <div :class="{ 'chat chat-left' : isSender }">
        <div class="chat-user">
            <a class="avatar m-0">
            <img src="@/assets/images/user/01.jpg" alt="avatar" class="avatar-35 ">
            </a>
            <span class="chat-time mt-1">6:48</span>
        </div>
        <div class="chat-detail">
            <div class="chat-message">
                <p>{{messageText}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'MessageVue',
  props: ['name', 'sender', 'messageText'],
  data () {
    return {
      isSender: false
    }
  }
}
</script>
