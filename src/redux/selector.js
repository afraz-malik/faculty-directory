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
const universities = []
export const getUniversities = createSelector(
  [facultySelectorList],
  (faculty) => {
    faculty.map((f) => universities.push(f.faculty.fm_university))
    return universities
  }
)

const departments = []
export const getDepartments = createSelector(
  [facultySelectorList],
  (faculty) => {
    faculty.map((f) => departments.push(f.faculty.fm_department))
    return departments
  }
)

var courses = []
export const getCourses = createSelector([facultySelectorList], (faculty) => {
  faculty.map((f) => (courses = [...courses, ...f.faculty.fm_courses]))
  return courses
})

var experties = []
export const getExperties = createSelector([facultySelectorList], (faculty) => {
  faculty.map((f) => (experties = [...experties, ...f.faculty.fm_experties]))
  return experties
})
