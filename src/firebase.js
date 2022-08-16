import { onUnmounted, ref } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyADOdypHnoG3QOtGmbKvaPeZmcsGkhhuy4',
  authDomain: 'medico-chat-79970.firebaseapp.com',
  projectId: 'medico-chat-79970',
  storageBucket: 'medico-chat-79970.appspot.com',
  messagingSenderId: '219983654768',
  appId: '1:219983654768:web:882668163d6c87f01e69b5',
  measurementId: 'G-RZTHBQ158H'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const DB = getFirestore(app)
const messagesCollection = collection(DB, 'messages')
export function useChat () {
  // Get all the messages inside the chat :
  const getMessagesOLD = async () => {
    const messagesSnapshot = await getDocs(messagesCollection)
    const messagesList = messagesSnapshot.docs.map(doc => (doc.data()))
    return messagesList
  }
  // get messages with snaopshoot :
  const getMessages = async () => {
    const q = query(messagesCollection, orderBy('sentAt'))
    var messagesList = []
    onSnapshot(q, (snapshot) => {
      messagesList = snapshot.docs.map(doc => (doc.data()))
    })
    console.log(messagesList)
    return messagesList
  }
  const messages = ref([])
  const q = query(messagesCollection, orderBy('sentAt'))
  const unsubscribe = onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map(doc => (doc.data()))
  })
  onUnmounted(unsubscribe)
  // Send a messaage :
  const sendMessage = text => {
    const Data = {
      userName: 'Houssam',
      userId: 'id',
      userPhotoURL: '@/assets/images/user/01.jpg',
      sentAt: new Date(),
      sentBy: 'Houssam',
      messageText: text
    }
    addDoc(messagesCollection, Data)
      .then(messagesCollection => {
        console.log('Document has been added successfully')
      })
      .catch(error => {
        console.log(error)
      })
  }
  return { getMessages, sendMessage, getMessagesOLD, messages }
}
// const getChannels = () => {
//   const q = query(messagesCollection)
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     snapshot.docs.map((doc) => { doc.data()})
//   })
//   return unsubscribe
// }
// console.log('GET SNAP SHOOT')
// getChannels()
