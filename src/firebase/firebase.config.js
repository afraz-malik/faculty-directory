import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updatePassword,
} from 'firebase/auth'
import {
  doc,
  getFirestore,
  collection,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBOJUy4VK4wCMvDZvUgepgKNcZcrljUIEo',
  authDomain: 'faculty-directory-620ea.firebaseapp.com',
  projectId: 'faculty-directory-620ea',
  storageBucket: 'faculty-directory-620ea.appspot.com',
  messagingSenderId: '320029853756',
  appId: '1:320029853756:web:25f4040a4b1dab5abf5b39',
  measurementId: 'G-8LHGD55FQL',
}
// Initialize Firebase
const firebase = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore(firebase)
export const googleProvider = new GoogleAuthProvider()
export const getdoc = getDoc

export const googleSignIn = async () =>
  await signInWithPopup(auth, googleProvider)
export const emailSignUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
export const emailSignIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
export const logout = signOut(auth)

export const isUserAuthenticated = () => {
  return new Promise((res, rej) => {
    const unsub = onAuthStateChanged(
      auth,
      (user) => {
        unsub()
        res(user)
      },
      rej
    )
  })
}
export const createUserInFirestore = async (user, additionalData) => {
  if (!user) {
    console.log('No user found')
    return
  }
  const { displayName, email } = user
  const createdAt = new Date()
  const docRef = doc(db, 'users', `${user.uid}`)
  const docSnap = await getDoc(docRef)

  try {
    if (docSnap.exists()) {
      console.log('Already Exists - Not Overwrited')
    } else {
      // doc.data() will be undefined in this case
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        isAdmin: false,
        approve: true,
        id: user.uid,
        ...additionalData,
      })
      // return dbUser
    }
  } catch (error) {
    console.log('eoorr', error.message)
  }
  return docRef
}
export const fetchingUsers = async () => {
  const dataRef = await getDocs(collection(db, 'users'))
  let users = []
  dataRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    users.push(doc.data())
  })
  return users
}
export const fetchingMessages = async () => {
  const dataRef = await getDocs(collection(db, 'visitors'))
  let messsages = []
  dataRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    messsages.push(doc.data())
  })
  return messsages
}
export const approveDbUser = async ({ payload }) => {
  const userRef = await doc(db, 'users', `${payload.id}`)
  if (payload.manage) {
    await updateDoc(userRef, {
      approve: true,
    })
  } else {
    await deleteDoc(doc(db, 'users', `${payload.id}`))
  }
}
export const passwordForget = async ({ payload }) => {
  sendPasswordResetEmail(auth, payload)
    .then(() => {
      alert('Password Reset Email Sent Check your mail')
    })
    .catch((error) => {
      // ..
    })
}
export const passwordChange = async ({ payload }) => {
  const user = auth.currentUser
  if (user) {
    updatePassword(user, payload)
      .then(() => {
        alert('Password Changed Successfully')
      })
      .catch((error) => {
        // An error ocurred
        alert('error')
        // ...
      })
  } else {
    alert('Sign in again to change password')
  }
}
export const sendMessageInDb = async (payload) => {
  // doc.data() will be undefined in this case
  const rand = Math.floor(Math.random() * 2.5 * 10)
  const docRef = doc(db, 'visitors', `${rand}`)
  await setDoc(docRef, { id: rand, ...payload })
}
export const deleteDbMessage = async (id) => {
  await deleteDoc(doc(db, 'visitors', `${id}`))
}
export const deleteDbFaculty = async (id) => {
  await deleteDoc(doc(db, 'faculty', `${id}`))
}
// Firebase User till up

const storage = getStorage()

export const addFacultyInDb = async (payload) => {
  // function makeid() {
  //   var result = ''
  //   var characters =
  //     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  //   var charactersLength = characters.length
  //   for (var i = 0; i < 5; i++) {
  //     result += characters.charAt(Math.floor(Math.random() * charactersLength))
  //   }
  //   return result
  // }
  // if (payload.id === 'ZLWIetGPINaOqWNuJoO6wFwMnYB2') {
  //   const rand = makeid()
  //   const docRef = doc(db, 'faculty', `${rand}`)
  //   await setDoc(docRef, { id: rand, ...payload.faculty })
  //   if (!Array.isArray(payload.images)) {
  //     console.log('image found')
  //     const storageRef = ref(storage, `${rand}.jpg`)
  //     uploadBytes(storageRef, payload.images).then((snapshot) => {
  //       getDownloadURL(snapshot.ref).then(async (downloadURL) => {
  //         await updateDoc(docRef, {
  //           'personal.imgurl': downloadURL,
  //         })
  //       })
  //     })
  //   } else {
  //     console.log('No image found')
  //   }
  // } else {
  // }
  const docRef = doc(db, 'faculty', `${payload.id}`)
  await setDoc(docRef, { id: payload.id, ...payload.faculty })
  if (!Array.isArray(payload.images)) {
    console.log('image found')

    const storageRef = ref(storage, `${payload.id}.jpg`)
    uploadBytes(storageRef, payload.images).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        await updateDoc(docRef, {
          'personal.imgurl': downloadURL,
        })
      })
    })
  } else {
    console.log('No image found')
  }
}
export const gettingFacultiesFromDb = async () => {
  const dataRef = await getDocs(collection(db, 'faculty'))
  let faculty = []
  dataRef.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    faculty.push(doc.data())
  })
  return faculty
}
