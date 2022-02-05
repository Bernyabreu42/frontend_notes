import React, { useState } from 'react';

export default function ActionEdit({ handlerColor, handlerEdit, handlerCancel, handlerUpdate }) {

  const [color, setColor] = useState(false)

  if (color) {
    return (
      <div className='inputColor'>
        <input type="text" placeholder='#AED6F1 or red' onChange={(e) => handlerColor(e.target.value)} />
        <span className="material-icons" onClick={() => setColor(false)}>
          cancel
        </span>
      </div>
    )
  } else {
    return (
      <div className='actions'>
        <span className="material-icons" onClick={() => { handlerUpdate(true), handlerEdit(false) }}>
          done
        </span>
        <span className="material-icons" onClick={() => setColor(true)} >
          color_lens
        </span>
        <span className="material-icons" onClick={() => { handlerEdit(false), handlerCancel(true) }}>
          cancel
        </span>
      </div >
    );
  }


}
