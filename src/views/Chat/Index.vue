<template>
<div class="row">
                  <div class="col-sm-12">
                     <div class="iq-card">
                        <div class="iq-card-body chat-page p-0">
                           <div class="chat-data-block">
                              <div class="row">
                                 <div :class="[ 'col-lg-3 chat-data-left scroller' , {  show : showSideChat == true  }]">
                                    <div class="chat-search pt-3 pl-3">
                                       <div class="d-flex align-items-center">
                                          <div class="chat-profile mr-3">
                                             <img src="@/assets/images/user/02.jpg" alt="chat-user" class="avatar-60 ">
                                          </div>
                                          <div class="chat-caption">
                                             <h5 class="mb-0">Bni Jordan</h5>
                                             <p class="m-0">Web Designer</p>
                                          </div>
                                          <button type="submit" class="close-btn-res p-3" @click="showSideBareChat()"><i class="ri-close-fill"></i></button>
                                       </div>
                                       <div id="user-detail-popup" class="scroller">
                                          <div class="user-pro file">
                                             <button type="submit" class="close-popup p-3"><i class="ri-close-fill"></i></button>
                                             <div class="user text-center mb-4">
                                                <a class="avatar m-0">
                                                <img src="@/assets/images/user/04.jpg" alt="avatar">
                                                </a>
                                                <div class="user-name mt-4">
                                                   <h4>Houssam eddine</h4>
                                                </div>
                                                <div class="user-desc">
                                                   <p>Software engineer</p>
                                                </div>
                                             </div>
                                             <hr>
                                          </div>
                                       </div>
                                       <div class="chat-searchbar mt-4">
                                          <div class="form-group chat-search-data m-0">
                                             <input type="text" class="form-control round" id="chat-search" placeholder="Search">
                                             <i class="ri-search-line"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="chat-sidebar-channel  scroller mt-4 pl-3">
                                       <h5 class="">Chats</h5>
                                       <ul class="iq-chat-ui nav flex-column nav-pills">
                                          <li>
                                             <a  data-toggle="pill" @click="showChatContent('default')">
                                                <ChatItem></ChatItem>
                                             </a>
                                          </li>
                                          <li>
                                             <a  data-toggle="pill" @click="showChatContent('chat1')">
                                                <ChatItem></ChatItem>
                                             </a>
                                          </li>
                                          <li>
                                             <a  data-toggle="pill" @click="showChatContent('chat2')">
                                                <ChatItem></ChatItem>
                                             </a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div class="col-lg-9 chat-data p-0 chat-data-right">
                                    <!-- <div class="tab-content">
                                       <div v-if="showChatId == 'default'" id="default-block" role="tabpanel">
                                          <div class="chat-start">
                                             <span class="iq-start-icon text-primary"><i class="ri-message-3-line"></i></span>
                                             <button id="chat-start" class="btn bg-white mt-3" @click="showSideBareChat()">Start
                                             Conversation!</button>
                                          </div>
                                       </div>
                                    </div> -->
                                    <ToggleContent @showSideBareChat="showSideBareChat" :messages="messages"></ToggleContent>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
</template>
<script>
import ChatItem from '@/components/Chat/ChatItem'
import ToggleContent from '@/components/Chat/ToggleContent'
import { useChat } from '@/firebase'
const { messages } = useChat()

export default {
  name: 'IndeX',
  components: {
    ChatItem,
    ToggleContent
  },
  mounted () {
    // socialvue.index()
  },
  computed: {
    filteredList () {
      return this.usersList.filter(item => {
        return item.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    publicList () {
      return this.usersList.filter(item => {
        return !item.isPrivate ? item.name.toLowerCase().includes(this.search.toLowerCase()) : false
      })
    },
    privateList () {
      return this.usersList.filter(item => {
        return item.isPrivate ? item.name.toLowerCase().includes(this.search.toLowerCase()) : false
      })
    }
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
    checkUser (item, type) {
      const user = this.usersList.find(user => user.id === item)
      let final
      if (user !== undefined) {
        switch (type) {
          case 'name':
            final = user.name
            break
          case 'image':
            final = user.image
            break
          case 'role':
            final = user.role
            break
        }
        return final
      }
      return require('@/assets/images/user/user-08.jpg')
    },
    showChatContent: function (id) {
      console.log(id)
      this.showChatId = id
    },
    showSideBareChat: function () {
      this.showSideChat = !this.showSideChat
    }
  }
}
</script>
<style>
  .remove-toggle::after{
    content: unset;
  }
</style>
