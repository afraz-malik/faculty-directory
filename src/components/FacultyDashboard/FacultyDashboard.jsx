import React from 'react'
import FacultyDashboardCSs from './FacultyDashboard.module.scss'
import { MultiStepForm, Step } from 'react-multi-form'
import Form1 from '../Form/Form1'
import Form2 from '../Form/Form2'
import Form3 from '../Form/Form3'
import { useDispatch, useSelector } from 'react-redux'
import { addFaculty } from '../../redux/action'
const FacultyDashboard = () => {
  const dispatch = useDispatch()
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
    dispatch(addFaculty(faculty))
  }
  const getFaculty = useSelector((state) => state.FacultyReducer.faculty)
  console.log(getFaculty)
  return (
    <div className={FacultyDashboardCSs.container}>
      <MultiStepForm activeStep={state} accentColor={'#d82a4e'}>
        <Step label="Personal">
          <Form1
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
          />
        </Step>
        <Step label="Qualification">
          <Form2
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
          />
        </Step>
        <Step label="Faculty">
          <Form3
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            submitForm={submitForm}
          />
        </Step>
      </MultiStepForm>
    </div>
  )
}

export default FacultyDashboard
