import React from 'react'
import TopFacultyCss from './TopFaculty.module.scss'
import FactultyCard from '../FacultyCard/FactultyCard'
import { Link } from 'react-router-dom'
const TopFaculty = () => {
  const faculty = [
    {
      name: 'AFRAZ MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '1.jpg',
    },
    {
      name: 'MATHEW PAUREN',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '2.jpg',
    },
    {
      name: 'PAUL PHENIX',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '3.jpg',
    },
    {
      name: 'NAHAL MALIK',
      designation: 'Software Engineer',
      subject: 'Computer Science',
      university: 'Virutal University of Pakistan',
      image: '4.jpg',
    },
  ]
  return (
    <div className={TopFacultyCss.container}>
      <div className={TopFacultyCss.title}>
        <h4>Top Faculty</h4>
        <p>
          This template is designed by Bc180404438 for University purpose on
          JustinMind. The quick brown fox jums over the lazy dog. This template
          is designed by Bc180404438 for University purpose on JustinMind.
        </p>
      </div>
      <div className={TopFacultyCss.faculty}>
        <FactultyCard faculty={faculty} />
      </div>
      <Link to="/faculty" className={TopFacultyCss.more}>
        <span>See All &#x2192;</span>
      </Link>
    </div>
  )
}

export default TopFaculty
