import React from 'react'
import LoaderCss from './Loader.module.scss'
const Loader = () => {
    return (
        <div class={LoaderCss.preloader} >
            <div class={LoaderCss.loader} ></div>
        </div>
    )
}

export default Loader
