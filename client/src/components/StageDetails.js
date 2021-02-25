import React from 'react';

export default function StageDetails(props) {
  const stage = props.data;
  return (
    <li className='step'>
      <div className='step-content'>
        {/* Main Stage Container */}
        <span className='step-circle'>
          {/* Icon */}
          <div className='stepImg'>
            <img className='stageIcon' src={stage.imgSrc} />
          </div>
          {/* Process stage/step number */}
          <div className='stepNumber'>
            <p className='stageNum'>{stage.id}</p>
          </div>
        </span>
        <span>
          {/* Stage/step description */}
          <div className='stepInfo'>
            <p>{stage.description}</p>
          </div>
        </span>
      </div>
    </li>
  );
}
