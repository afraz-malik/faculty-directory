import { takeLatest, put } from 'redux-saga/effects'
import {
  deleteDbMessage,
  sendMessageInDb,
} from '../../firebase/firebase.config'
import { gettingUsers } from '../user/users.sagas'
import { sendMessageSuccess, sendMessageFailed } from './data.actions'

export function* sendingMessage({ payload }) {
  try {
    yield sendMessageInDb(payload)
    yield put(sendMessageSuccess())
    alert('Message send successfully, We will contact you soon!')
  } catch (e) {
    alert(e.message)
    yield put(sendMessageFailed())
  }
}

export function* sendingMessageStart() {
  yield takeLatest('SEND_MESSAGE_START', sendingMessage)
}

export function* deleteMessage({ payload }) {
  try {
    yield deleteDbMessage(payload)
    yield alert('Deleted')
    yield gettingUsers()
  } catch (e) {
    alert(e.message)
  }
}
export function* deleteMessageStart() {
  yield takeLatest('DELETE_MESSAGE_START', deleteMessage)
}
