import React from 'react'
import DepartmentsCss from './Departments.module.scss'
const Departments = () => {
  const dept = [
    {
      name: 'Computer Scient',
      des: 'hello from cs dept',
      member: '500',
      image: '1.jpg',
    },
    {
      name: 'Education',
      des: 'I learn with sana',
      member: '102',
      image: '2.jpg',
    },
    {
      name: 'Arts',
      des: 'Nalaik bche',
      member: '500',
      image: '3.jpg',
    },
    {
      name: 'Management',
      des: 'Ayisha b cycle',
      member: '200',
      image: '4.jpg',
    },
    {
      name: 'Science & tech',
      des: 'To b loru',
      member: '60',
      image: '5.jpg',
    },
    {
      name: 'Cryptocurrencies',
      des: 'Afraz zindabad',
      member: '24',
      image: '6.jpg',
    },
  ]

  return (
    <div className={DepartmentsCss.container}>
      <div className={DepartmentsCss.title}>
        <h4>Our Faculty Departments</h4>
        <p>
          This template is designed by Bc180404438 for University purpose on
          JustinMind. The quick brown fox jums over the lazy dog. This template
          is designed by Bc180404438 for University purpose on JustinMind.
        </p>
      </div>
      <div className={DepartmentsCss.cards}>
        {dept.map((el) => (
          <div className={DepartmentsCss.card}>
            <img alt="" src={`images/${el.image}`} />
            <div className={DepartmentsCss.cardtext}>
              <h6>{el.name}</h6>
              <p>{el.des}</p>
              <span>{el.member} member</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Departments
