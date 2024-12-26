import {FC, ReactNode} from 'react'

import styles from './Modal.module.scss'

interface Props{
    children?: ReactNode
}

const Modal:FC<Props> = ({children}) => {
  return (
    <div className={styles.modal}>
        {children}
    </div>
  )
}

export default Modal