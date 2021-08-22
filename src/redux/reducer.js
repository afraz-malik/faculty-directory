const initialState = {
  faculty: [
    {
      personal: {
        fm_name: 'Afraz Malik',
        fm_email: 'afrazmalik321@gmail.com',
        fm_phone: '03248205435',
        fm_gender: 1,
        fm_dob: '2021-08-03',
        imgurl:
          'blob:http://localhost:3000/e2f4052c-ee1a-45a3-8190-8f7616113c41',
        images: {},
      },
      qualification: [
        {
          q_id: '',
          institute_attended: 'Lums School of Computer Science',
          degree_tittle: 'Bachelor of Science in Software Engineering',
          year_of_passing: '2022',
        },
      ],
      faculty: {
        fm_university: 'Virtual University of Pakistan',
        fm_designation: 'Software Engineer',
        fm_department: 'Computer Science',
        fm_courses: 'Data Structures, DataBase, Algorithms',
        fm_experties: 'Programming, Development',
        fm_interests: 'Gaming, Hacking',
        fm_country: 'Pakistan',
        fm_city: 'Lahore',
      },
    },
  ],
}
export const FacultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FACULTY':
      return Object.assign({}, state, {
        faculty: [...state.faculty, action.payload],
      })

    default:
      return state
  }
}
