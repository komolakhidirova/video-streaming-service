import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyCtrRSlEOUmLuxdwUXY3teLGowMFs85NGQ',
	authDomain: 'video-streaming-service-53ac2.firebaseapp.com',
	projectId: 'video-streaming-service-53ac2',
	storageBucket: 'video-streaming-service-53ac2.firebasestorage.app',
	messagingSenderId: '361930067744',
	appId: '1:361930067744:web:b5b98460d4103021425145',
	measurementId: 'G-BSC36LE08P',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
