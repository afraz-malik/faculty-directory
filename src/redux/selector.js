import { createSelector } from 'reselect'
const facultySelector = (state) => state.FacultyReducer
export const facultySelectorList = createSelector(
  [facultySelector],
  (FacultyReducer) => FacultyReducer.faculty
)
export const facultySelectorByParam = (urlParams) =>
  createSelector([facultySelectorList], (faculty) => {
    return faculty.filter((el) => {
      return el.personal.fm_name.toLowerCase().includes(urlParams.toLowerCase())
    })
  })

export const topFacultySelector = createSelector(
  [facultySelectorList],
  (faculty) => faculty.slice(0, 4)
)
