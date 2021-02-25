import React, { Fragment } from 'react'
import SpinnerIcon from '../../assets/spinner.gif'
export default function Spinner() {
    return (
        <Fragment>
            <img src={SpinnerIcon}
            alt='loading data'
            style={{width:'200px',margin:'auto',display:'block'}}/>
        </Fragment>
    )
}
