import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
        approve: false,
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

// Firebase User till up

// export const addCollAndDocToFirebase = async (collectionName, objectToAdd) =>{
//   const collectionRef = firestore.collection(collectionName);
//   const batch = firestore.batch();
//   objectToAdd.forEach(obj => {
//     const docRef = collectionRef.doc(`${obj.id}`);
//     batch.set(docRef, obj)
//     console.log(obj.id)
//   });
//   return await batch.commit().then(resp => console.log(resp))
// }
// export const getShopDataFromFirestore = async () => {
//   const collRef = collection(`shopData`)
//   const snapShot = await collRef.get()
//   const convertedColl = snapShot.docs.map((doc) => {
//     const { title, items, imgUrl } = doc.data()
//     return {
//       routeName: encodeURI(title.toLowerCase()),
//       id: doc.id,
//       title,
//       items,
//       imgUrl,
//     }
//   })
//   const convertedCollToObj = convertedColl.reduce((acc, coll) => {
//     acc[coll.title.toLowerCase()] = coll
//     return acc
//   }, {})
//   return convertedCollToObj
// }

// export const addItemInFirestore = async (ref, collectionToAdd, itemToAdd) => {
//   const dbRef = collection('shopData').doc(ref.toString())
//   if (collectionToAdd) {
//     await dbRef
//       .set({
//         title: collectionToAdd.collectionName,
//         imgUrl: collectionToAdd.collectionImageUrl,
//         items: [
//           {
//             id: 1,
//             name: itemToAdd.name,
//             imageUrl: itemToAdd.imageUrl,
//             price: itemToAdd.price,
//           },
//         ],
//       })
//       .then(() => {
//         console.log('Document successfully written!')
//       })
//       .catch((error) => {
//         console.error('Error writing document: ', error)
//       })
//   } else {
//     await dbRef
//       .update({
//         items: firebase.firestore.FieldValue.arrayUnion(itemToAdd),
//       })
//       .then(() => {
//         console.log('data saved successfully')
//       })
//       .catch((error) => {
//         console.error('data saved failed', error)
//       })
//   }
// }

export default firebase
