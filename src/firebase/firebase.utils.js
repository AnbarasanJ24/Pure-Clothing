import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBfR7dNilGrfYnsOueCXoGGJtxbjA4cry8",
    authDomain: "pure-clothing-8db14.firebaseapp.com",
    databaseURL: "https://pure-clothing-8db14.firebaseio.com",
    projectId: "pure-clothing-8db14",
    storageBucket: "pure-clothing-8db14.appspot.com",
    messagingSenderId: "861170572042",
    appId: "1:861170572042:web:440a8cd6c5039c410db8f3",
    measurementId: "G-TBGSXBNC6C"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/ ${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName : displayName || additionalData,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error creating user', error)
        }
    }
    return userRef

}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase