import React from 'react'
import FacultyCardCss from './FacultyCard.module.scss'

const FactultyCard = () => {
  const dept = [
    {
      name: 'Computer Scient',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '500',
      image: '1.jpg',
    },
    {
      name: 'Education',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '102',
      image: '2.jpg',
    },
    {
      name: 'Arts',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '500',
      image: '3.jpg',
    },
    {
      name: 'Management',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '200',
      image: '4.jpg',
    },
    {
      name: 'Science & tech',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '60',
      image: '5.jpg',
    },
    {
      name: 'Cryptocurrencies',
      des: 'Lorem ipsum dolor sit amet, consectetur',
      member: '24',
      image: '6.jpg',
    },
  ]
  return (
    <div className={FacultyCardCss.cards}>
      {dept.map((el) => (
        <div key={el.name} className={FacultyCardCss.card}>
          <div
            className={FacultyCardCss.img}
            style={{ backgroundImage: `url(images/${el.image})` }}
          ></div>
          <div className={FacultyCardCss.cardtext}>
            <div className={FacultyCardCss.details}>
              <h6>{el.name}</h6>
              <p>{el.des}</p>
              <span>{el.member} Members</span>
            </div>
            <div className={FacultyCardCss.author}>
              <img src="images/anime.png" alt="" />
              <h5>
                William Parker <span>Developer</span>
              </h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FactultyCard
