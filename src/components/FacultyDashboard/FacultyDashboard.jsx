import React from 'react'
import FacultyDashboardCSs from './FacultyDashboard.module.scss'
import { MultiStepForm, Step } from 'react-multi-form'
import Form1 from '../Form/Form1'
import Form2 from '../Form/Form2'
import Form3 from '../Form/Form3'
import { useDispatch, useSelector } from 'react-redux'
import { addFaculty } from '../../redux/data/data.actions'
import { facultySelectorByUid } from '../../redux/data/data.selectors'
const FacultyDashboard = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const currentFaculty = useSelector((state) =>
    facultySelectorByUid(currentUser.id)(state)
  )

  const [state, setstate] = React.useState(1)
  const [faculty, setFaculty] = React.useState({})
  const incState = () => {
    setstate(state + 1)
  }
  const decState = () => {
    setstate(state - 1)
  }
  const collectData = (form) => {
    setFaculty({ ...faculty, ...form })
  }
  const submitForm = () => {
    dispatch(addFaculty({ ...faculty, id: currentUser.id }))
  }
  // const getFaculty = useSelector((state) => state.FacultyReducer.faculty)
  return (
    <div className={FacultyDashboardCSs.container}>
      <MultiStepForm activeStep={state} accentColor={'#d82a4e'}>
        <Step label="Personal">
          <Form1
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            currentFaculty={currentFaculty[0].personal}
          />
        </Step>
        <Step label="Qualification">
          <Form2
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            currentFaculty={currentFaculty[0].qualification}
          />
        </Step>
        <Step label="Faculty">
          <Form3
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            submitForm={submitForm}
            currentFaculty={currentFaculty[0].faculty}
          />
        </Step>
      </MultiStepForm>
    </div>
  )
}

export default FacultyDashboard
