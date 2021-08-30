import React from 'react'
import FacultyDashboardCSs from './FacultyDashboard.module.scss'
import { MultiStepForm, Step } from 'react-multi-form'
import Form1 from '../Form/Form1'
import Form2 from '../Form/Form2'
import Form3 from '../Form/Form3'
import { useDispatch, useSelector } from 'react-redux'
import { addFaculty, clearSuccess } from '../../redux/data/data.actions'
import {
  facultySelectorByUid,
  Loading,
  Success,
} from '../../redux/data/data.selectors'
import { Spinner } from '../spinner/spinner'
import { useHistory } from 'react-router-dom'
const FacultyDashboard = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentUser = useSelector((state) => state.userReducer.currentUser)
  const cF = useSelector((state) => facultySelectorByUid(currentUser.id)(state))
  const loading = useSelector((state) => Loading(state))
  const success = useSelector((state) => Success(state))
  let currentFaculty
  if (cF) {
    currentFaculty = cF
  } else {
    currentFaculty = []
  }
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
    dispatch(
      addFaculty({
        faculty: {
          personal: faculty.personal,
          qualification: faculty.qualification,
          faculty: faculty.faculty,
        },
        id: currentUser.id,
        images: faculty.images,
      })
    )
  }
  // const getFaculty = useSelector((state) => state.FacultyReducer.faculty)
  if (success) {
    history.push('/faculty')
    dispatch(clearSuccess())
  }
  return (
    <div className={FacultyDashboardCSs.container}>
      <MultiStepForm activeStep={state} accentColor={'#d82a4e'}>
        <Step label="Personal">
          <Form1
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            currentFaculty={currentFaculty[0]}
          />
        </Step>
        <Step label="Qualification">
          <Form2
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            currentFaculty={currentFaculty[0]}
          />
        </Step>
        <Step label="Faculty">
          <Form3
            incState={incState}
            decState={decState}
            state={state}
            collectData={collectData}
            submitForm={submitForm}
            currentFaculty={currentFaculty[0]}
          />
        </Step>
      </MultiStepForm>
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default FacultyDashboard
