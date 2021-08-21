import React from 'react'
import FacultyDashboardCSs from './FacultyDashboard.module.scss'
import { MultiStepForm, Step } from 'react-multi-form'
import Form1 from '../Form/Form1'
import Form2 from '../Form/Form2'
import Form3 from '../Form/Form3'
const FacultyDashboard = () => {
  const [state, setstate] = React.useState(1)
  const incState = () => {
    setstate(state + 1)
  }
  const decState = () => {
    setstate(state - 1)
  }
  return (
    <div className={FacultyDashboardCSs.container}>
      <MultiStepForm activeStep={state} accentColor={'#d82a4e'}>
        <Step label="Personal">
          <Form1 incState={incState} decState={decState} state={state} />
        </Step>
        <Step label="Qualification">
          <Form2 incState={incState} decState={decState} state={state} />
        </Step>
        <Step label="Faculty">
          <Form3 incState={incState} decState={decState} state={state} />
        </Step>
      </MultiStepForm>
    </div>
  )
}

export default FacultyDashboard
