import { takeLatest, put } from 'redux-saga/effects'
import {
  addFacultyInDb,
  deleteDbFaculty,
  deleteDbMessage,
  gettingFacultiesFromDb,
  sendMessageInDb,
} from '../../firebase/firebase.config'
import { gettingUsers } from '../user/users.sagas'
import {
  sendMessageSuccess,
  sendMessageFailed,
  addFacultySuccess,
  gettingFacultiesSuccess,
  addFacultyFailed,
} from './data.actions'

export function* gettingFaculties() {
  try {
    const faculty = yield gettingFacultiesFromDb()
    yield put(gettingFacultiesSuccess(faculty))
  } catch (e) {
    alert(e.message)
  }
}
export function* gettingFacultiesStart() {
  yield takeLatest('GETTING_FACULTY_START', gettingFaculties)
}
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
export function* deleteFaculty({ payload }) {
  try {
    yield deleteDbFaculty(payload)
    yield alert('Deleted')
    yield gettingFaculties()
  } catch (e) {
    alert(e.message)
  }
}
export function* deleteFacultyStart() {
  yield takeLatest('DELETE_FACULTY_START', deleteFaculty)
}
export function* addFaculty({ payload }) {
  try {
    yield addFacultyInDb(payload)
    yield put(addFacultySuccess({ id: payload.id, ...payload.faculty }))
    yield alert('Record Updated Successfully')
  } catch (er) {
    alert(er.message)
    yield put(addFacultyFailed(er.message))
  }
}

export function* addFacultyStart() {
  yield takeLatest('ADD_FACULTY', addFaculty)
}
