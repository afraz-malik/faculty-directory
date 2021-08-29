export const sendMessage = (payload) => ({
  type: 'SEND_MESSAGE_START',
  payload,
})
export const deleteMessage = (payload) => ({
  type: 'DELETE_MESSAGE_START',
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
