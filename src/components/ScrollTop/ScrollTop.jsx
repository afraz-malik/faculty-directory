import React from 'react'
import ScrollTopCss from './ScrollTop.module.scss'
const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 500) {
      setVisible(true)
    } else if (scrolled <= 500) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    })
  }
  window.addEventListener('scroll', toggleVisible)

  return (
    <div
      className={ScrollTopCss.container}
      style={{ right: visible ? '35px' : '-200px' }}
    >
      <button onClick={scrollToTop}>
        <i className="fas fa-arrow-alt-circle-up"></i>
      </button>
    </div>
  )
}

export default ScrollTop
