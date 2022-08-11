<template>
  <div class="d-flex align-items-center">
    <div class="avatar mr-2">
        <img src="@/assets/images/user/01.jpg" alt="chatuserimage" class="avatar-50 ">
        <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
      </div>
      <div class="chat-sidebar-name">
        <h6 class="mb-0">Team Discussions</h6>
        <span>Lorem Ipsum is</span>
      </div>
      <div class="chat-meta float-right text-center mt-2 mr-1">
      <div class="chat-msg-counter bg-primary text-white">20</div>
      <span class="text-nowrap">05 min</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ChatItem',
  props: {
    item: { type: Object }
  }
}
</script>
