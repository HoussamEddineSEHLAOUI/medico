<template>
                              <div class=" " id="chatbox1" role="tabpanel">
                                          <div class="chat-head">
                                             <header class="d-flex justify-content-between align-items-center bg-white pt-3 pr-3 pb-3">
                                                <div class="d-flex align-items-center">
                                                   <div class="sidebar-toggle" @click="showSideBareChat">
                                                      <i class="ri-menu-3-line"></i>
                                                   </div>
                                                   <div class="avatar chat-user-profile m-0 mr-3">
                                                      <img src="@/assets/images/user/01.jpg" alt="avatar" class="avatar-50 ">
                                                      <span class="avatar-status"><i class="ri-checkbox-blank-circle-fill text-success"></i></span>
                                                   </div>
                                                   <h5 class="mb-0">Team Discussions</h5>
                                                </div>
                                                <div class="chat-user-detail-popup scroller">
                                                   <div class="user-profile text-center">
                                                      <button type="submit" class="close-popup p-3"><i class="ri-close-fill"></i></button>
                                                      <div class="user mb-4">
                                                         <a class="avatar m-0">
                                                         <img src="@/assets/images/user/01.jpg" alt="avatar">
                                                         </a>
                                                         <div class="user-name mt-4">
                                                            <h4>Bni Jordan</h4>
                                                         </div>
                                                         <div class="user-desc">
                                                            <p>Cape Town, RSA</p>
                                                         </div>
                                                      </div>
                                                      <hr>
                                                      <div class="chatuser-detail text-left mt-4">
                                                         <div class="row">
                                                            <div class="col-6 col-md-6 title">Bni Name:</div>
                                                            <div class="col-6 col-md-6 text-right">Bni</div>
                                                         </div>
                                                         <hr>
                                                         <div class="row">
                                                            <div class="col-6 col-md-6 title">Tel:</div>
                                                            <div class="col-6 col-md-6 text-right">072 143 9920</div>
                                                         </div>
                                                         <hr>
                                                         <div class="row">
                                                            <div class="col-6 col-md-6 title">Date Of Birth:</div>
                                                            <div class="col-6 col-md-6 text-right">July 12, 1989</div>
                                                         </div>
                                                         <hr>
                                                         <div class="row">
                                                            <div class="col-6 col-md-6 title">Gender:</div>
                                                            <div class="col-6 col-md-6 text-right">Male</div>
                                                         </div>
                                                         <hr>
                                                         <div class="row">
                                                            <div class="col-6 col-md-6 title">Language:</div>
                                                            <div class="col-6 col-md-6 text-right">Engliah</div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div class="chat-header-icons d-flex">
                                                   <a href="javascript:void();" class="chat-icon-phone iq-bg-primary">
                                                   <i class="ri-phone-line"></i>
                                                   </a>
                                                   <a href="javascript:void();" class="chat-icon-video iq-bg-primary">
                                                   <i class="ri-vidicon-line"></i>
                                                   </a>
                                                   <a href="javascript:void();" class="chat-icon-delete iq-bg-primary">
                                                   <i class="ri-delete-bin-line"></i>
                                                   </a>
                                                   <span class="dropdown iq-bg-primary">
                                                   <i class="ri-more-2-line cursor-pointer dropdown-toggle nav-hide-arrow cursor-pointer pr-0" id="dropdownMenuButton02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu"></i>
                                                   <span class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton02">
                                                   <a class="dropdown-item" href="JavaScript:void(0);"><i class="fa fa-thumb-tack" aria-hidden="true"></i> Pin to top</a>
                                                   <a class="dropdown-item" href="JavaScript:void(0);"><i class="fa fa-trash-o" aria-hidden="true"></i> Delete chat</a>
                                                   <a class="dropdown-item" href="JavaScript:void(0);"><i class="fa fa-ban" aria-hidden="true"></i> Block</a>
                                                   </span>
                                                   </span>
                                                </div>
                                             </header>
                                          </div>
                                          <div class="chat-content scroller" id="chatScrol">
                                             <MessageVue v-for="(message , key) in messages"
                                             :key="key"
                                             :messageText="message.messageText"
                                             ></MessageVue>
                                          </div>
                                          <div class="chat-footer p-3 bg-white">
                                             <form class="d-flex align-items-center"  action="javascript:void(0);">
                                                <div class="chat-attagement d-flex">
                                                   <a href="javascript:void();"><i class="fa fa-smile-o pr-3" aria-hidden="true"></i></a>
                                                   <a href="javascript:void();"><i class="fa fa-paperclip pr-3" aria-hidden="true"></i></a>
                                                </div>
                                                <input type="text" class="form-control mr-3" placeholder="Type your message" v-model="message">
                                                <button type="submit" @click="sendMessageChat" class="btn btn-primary d-flex align-items-center p-2"><i class="fa fa-paper-plane-o" aria-hidden="true"></i><span class="d-none d-lg-block ml-1">Send</span></button>
                                             </form>
                                            </div>
                                        </div>
</template>
<script>
import { useChat } from '@/firebase'
import MessageVue from './Message.vue'
const { sendMessage, messages } = useChat()
export default {
  name: 'ToggleContent',
  props: {},
  components: { MessageVue },
  created () {
    this.messages = messages
  },
  mounted () {
    this.ScrollToEndOfChat()
  },
  data () {
    return {
      message: '',
      messages: []
    }
  },
  methods: {
    showSideBareChat: function () {
      this.$emit('showSideBareChat')
    },
    sendMessageChat: function () {
      this.ScrollToEndOfChat()
      if (this.message !== '') {
        sendMessage(this.message)
      }
      this.message = ''
    },
    ScrollToEndOfChat: function () {
      console.log('inside function')
      var container = this.$el.querySelector('#chatScrol')
      console.log(container.scrollTop)
      container.scrollTop = container.scrollHeight + 1000
    }
  }
}
</script>
