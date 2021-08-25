export const addFaculty = (payload) => {
  return { type: 'ADD_FACULTY', payload }
}
export const isAdmin = (payload) => ({
  type: 'IS_ADMIN',
  payload,
})
