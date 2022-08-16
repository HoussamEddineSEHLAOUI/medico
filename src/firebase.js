import { ref as refVue, onUnmounted } from 'vue'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getStorage, uploadBytesResumable, getDownloadURL, ref } from 'firebase/storage'
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
var LOADING_IMAGE_URL = ''
export function useChat () {
  const messages = refVue([])
  const q = query(messagesCollection, orderBy('timestamp'))
  const unsub = onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map(doc => (doc.data()))
  })
  onUnmounted(unsub)
  // Send a messaage :
  const sendMessage = text => {
    const Data = {
      name: 'Houssam',
      imageUrl: LOADING_IMAGE_URL,
      text: text,
      profilePicUrl: 'getProfilePicUrl()',
      timestamp: serverTimestamp()
    }
    addDoc(messagesCollection, Data)
      .then(messagesCollection => {
        console.log('Document has been added successfully')
      })
      .catch(error => {
        console.log(error)
      })
  }
  const saveImageMessage = async (file) => {
    try {
      const messageRef = await addDoc(collection(getFirestore(), 'messages'), {
        name: '',
        imageUrl: LOADING_IMAGE_URL,
        profilePicUrl: 'getProfilePicUrl()',
        timestamp: serverTimestamp()
      })
      const filePath = `/${file.name}`
      const newImageRef = ref(getStorage(), filePath)
      const fileSnapshot = await uploadBytesResumable(newImageRef, file)
      const publicImageUrl = await getDownloadURL(newImageRef)
      await updateDoc(messageRef, {
        imageUrl: publicImageUrl,
        storageUri: fileSnapshot.metadata.fullPath
      })
    } catch (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error)
    }
  }
  return { sendMessage, messages, saveImageMessage }
}
