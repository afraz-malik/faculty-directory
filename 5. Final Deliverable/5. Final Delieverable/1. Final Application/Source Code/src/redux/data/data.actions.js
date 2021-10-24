export const sendMessage = (payload) => ({
  type: 'SEND_MESSAGE_START',
  payload,
})
export const deleteMessage = (payload) => ({
  type: 'DELETE_MESSAGE_START',
  payload,
})
export const deleteFaculty = (payload) => ({
  type: 'DELETE_FACULTY_START',
  payload,
})
export const sendMessageSuccess = () => ({
  type: 'SEND_MESSAGE_SUCCESS',
})
export const sendMessageFailed = () => ({
  type: 'SEND_MESSAGE_FAILED',
})
export const commingAllMessages = (payload) => ({
  type: 'COMMING_MESSAGES',
  payload,
})
export const addFaculty = (payload) => {
  return { type: 'ADD_FACULTY', payload }
}
export const clearSuccess = () => {
  return { type: 'CLEAR_SUCCESS' }
}

export const addFacultySuccess = (payload) => {
  return { type: 'ADD_FACULTY_SUCCESS', payload }
}
export const addFacultyFailed = (payload) => {
  return { type: 'ADD_FACULTY_FAILED', payload }
}
export const gettingFacultiesStart = () => {
  return {
    type: 'GETTING_FACULTY_START',
  }
}
export const gettingFacultiesSuccess = (payload) => {
  return {
    type: 'GETTING_FACULTY_SUCCESS',
    payload,
  }
}
