import React from 'react';

export default function Actions({ handlerRemove, icon, show = false }) {

  return (
    <div className='actions'>
      <span className="material-icons" onClick={() => show ? handlerRemove(true) : null}>
        {icon}
      </span>
    </div >
  );
}
