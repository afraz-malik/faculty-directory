const initialState = {
  message: '',
  sending: false,
  faculties: [],
  fetching: false,
  success: false,
}

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETTING_FACULTY_START':
    case 'DELETE_FACULTY_START':
      return { ...state, fetching: true }
    case 'CLEAR_SUCCESS':
      return { ...state, success: false }
    case 'SEND_MESSAGE_START':
      return { ...state, sending: true }
    case 'SEND_MESSAGE_SUCCESS':
      return { ...state, sending: false }
    case 'SEND_MESSAGE_FAILED':
      return { ...state, sending: false }
    case 'COMMING_MESSAGES':
      return { ...state, messages: action.payload }
    case 'ADD_FACULTY':
      return { ...state, sending: true }
    case 'ADD_FACULTY_SUCCESS':
      return Object.assign({}, state, {
        faculties: [...state.faculties, action.payload],
        sending: false,
        success: true,
      })
    case 'ADD_FACULTY_FAILED':
      return Object.assign({}, state, {
        sending: false,
        success: false,
      })
    case 'GETTING_FACULTY_SUCCESS':
      return Object.assign({}, state, {
        faculties: action.payload,
        fetching: false,
      })
    default:
      return state
  }
}
