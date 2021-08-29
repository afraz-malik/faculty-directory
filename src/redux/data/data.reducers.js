const initialState = {
  message: '',
  sending: false,
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE_START':
      return { ...state, sending: true }
    case 'SEND_MESSAGE_SUCCESS':
      return { ...state, sending: false }
    case 'SEND_MESSAGE_FAILED':
      return { ...state, sending: false }
    case 'COMMING_MESSAGES':
      return { ...state, messages: action.payload }
    default:
      return state
  }
}
