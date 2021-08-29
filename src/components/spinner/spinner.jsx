import React from 'react';
import './spinner.scss'

export const SpinnerHOC = WrappedComponent => ({isLoading, ...otherProps}) =>(
    isLoading
    ?
    <div className="SpinnerOverlay">
        <div className="SpinnerContainer"/>
    </div>
    :
    <WrappedComponent {...otherProps}>
    </WrappedComponent>
)

export const Spinner = () =>{
    return (
        <div className="SpinnerOverlay">
            <div className="SpinnerContainer"/>
        </div>
    )
}
