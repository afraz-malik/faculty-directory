import { all, call } from 'redux-saga/effects'

import {
  signInWithGoogleStart,
  signInWithEmailStart,
  settingUserPersistenceStart,
  signOut,
  signUp,
  gettingUsersStart,
  approveUserStart,
} from './user/users.sagas'

export default function* rootSaga() {
  yield all([
    call(settingUserPersistenceStart),
    call(signInWithGoogleStart),
    call(signInWithEmailStart),
    call(signOut),
    call(signUp),
    call(gettingUsersStart),
    call(approveUserStart),
  ])
}
