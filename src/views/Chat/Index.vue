<template>
<div class="row">
   <div class="col-sm-12">
      <div class="iq-card">
         <div class="iq-card-body chat-page p-0">
            <div class="chat-data-block">
               <div class="row">
                  <div class="col-lg-12 chat-data p-0 chat-data-right">
                                    <!-- <div class="tab-content">
                                       <div v-if="showChatId == 'default'" id="default-block" role="tabpanel">
                                          <div class="chat-start">
                                             <span class="iq-start-icon text-primary"><i class="ri-message-3-line"></i></span>
                                             <button id="chat-start" class="btn bg-white mt-3" @click="showSideBareChat()">Start
                                             Conversation!</button>
                                          </div>
                                       </div>
                                    </div> -->
                                    <ChatContent @showSideBareChat="showSideBareChat" :messages="messages"></ChatContent>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</template>
<script>
// import ChatItem from '@/components/Chat/ChatItem'
import ChatContent from '@/components/Chat/ChatContent'
import { useChat } from '@/firebase'
const { messages } = useChat()

export default {
  name: 'IndeX',
  components: {
    ChatContent
  },
  updated () {
    this.ScrollToEndOfChat()
  },
  data () {
    return {
      search: '',
      showChatId: 'default',
      showSideChat: false,
      messages: messages
    }
  },
  methods: {
    showChatContent: function (id) {
      console.log(id)
      this.showChatId = id
    },
    showSideBareChat: function () {
      this.showSideChat = !this.showSideChat
    },
    ScrollToEndOfChat: function () {
      var container = this.$el.querySelector('#chatScrol')
      container.scrollTop = container.scrollHeight
    }
  }
}
</script>
<style>
  .remove-toggle::after{
    content: unset;
  }
</style>
