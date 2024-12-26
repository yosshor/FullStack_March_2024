import {FC} from 'react'
import './Popup.scss';

interface Props{

    openFn: () => void
}

export const Popup:FC<Props> = ({ openFn}) => {
  return (
    <div className='popup'>
        <button onClick={openFn}>Close</button>
    </div>
  )
}
