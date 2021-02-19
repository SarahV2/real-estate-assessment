import React from 'react'

export default function StageDetails(props) {
    return (
        <div className='singleStep'>
            {/* Step Nmber and icon */}
            <div className='visualData'>
                <div className='connector'></div>
                <div className='stepNumber'>
                    <p className='fancyNum'>{props.data.id}</p>
                </div>

                <div className='stepImg'>
                    <img src={props.data.imgSrc} />
                </div>
                <div className='connector'></div>

            </div>
            {/* Step Info */}
            <div className='stepInfo'>
                <p>{props.data.description}</p>
            </div>
        </div>)
}