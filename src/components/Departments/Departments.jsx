import React from 'react'
import { Link } from 'react-router-dom'
import DepartmentsCss from './Departments.module.scss'
const Departments = () => {
  const dept = [
    {
      name: 'Computer Science',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '500',
      image: '1.jpg',
      authorName: 'Afraz Malik',
      authorDesignation: 'Developer',
      authorImage: '1.jpg',
    },
    {
      name: 'Education',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '102',
      image: '2.jpg',
      authorName: 'William David',
      authorDesignation: 'Scholar',
      authorImage: '2.jpg',
    },
    {
      name: 'Arts',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '500',
      image: '3.jpg',
      authorName: 'Nina Anthew',
      authorDesignation: 'Designer',
      authorImage: '3.jpg',
    },
    {
      name: 'Management',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '200',
      image: '4.jpg',
      authorName: 'Paul Phenix',
      authorDesignation: 'Accountant',
      authorImage: '4.jpg',
    },
    {
      name: 'Science & tech',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '60',
      image: '5.jpg',
      authorName: 'Eddy Sherof',
      authorDesignation: 'Philospher',
      authorImage: '5.jpg',
    },
    {
      name: 'Cryptocurrencies',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '24',
      image: '6.jpg',
      authorName: 'Mathew Malik',
      authorDesignation: 'ACCA',
      authorImage: '6.jpg',
    },
  ]

  return (
    <div className={DepartmentsCss.container} id="faculty">
      <div className={DepartmentsCss.title}>
        <h4>Our Top Faculty Departments</h4>
        <p>
          This template is designed by Bc180404438 for University purpose on
          JustinMind. The quick brown fox jums over the lazy dog. This template
          is designed by Bc180404438 for University purpose on JustinMind.
        </p>
      </div>
      <div className={DepartmentsCss.cards}>
        {dept.map((el) => (
          <Link
            key={el.name}
            className={DepartmentsCss.card}
            to={{
              pathname: `/faculty`,
              department: el.name,
            }}
          >
            <div
              className={DepartmentsCss.img}
              style={{ backgroundImage: `url(images/categories/${el.image})` }}
            ></div>
            <div className={DepartmentsCss.cardtext}>
              <div className={DepartmentsCss.details}>
                <h6>{el.name}</h6>
                <p>{el.des}</p>
                <span>{el.member} Members</span>
              </div>
              <div className={DepartmentsCss.author}>
                <img src={`images/authors/${el.authorImage}`} alt="" />
                <h5>
                  {el.authorName},&nbsp;
                  <span>{el.authorDesignation}</span>
                </h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Departments
