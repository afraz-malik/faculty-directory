import React from 'react'
import { useSelector } from 'react-redux'
import FacultyCard from './FacultyCard'
import FacultyCardCss from './FacultyCard.module.scss'
export const FacultyCards = () => {
  const faculty = useSelector((state) => state.FacultyReducer.faculty)
  return (
    <div className={FacultyCardCss.cards}>
      {faculty.map((el, i) => (
        <FacultyCard key={i} el={el} />
      ))}
    </div>
  )
}

export default FacultyCards
