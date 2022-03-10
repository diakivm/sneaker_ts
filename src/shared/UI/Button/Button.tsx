import React, {FC} from 'react'
import './Button.scss' 

interface ButtonProps {
    onClickAction?: any
    text?: string
}

const Button: FC<ButtonProps> = ({onClickAction, text}) => {

      return (
         <div className='button__container'> 
            <button type="button" className="button__body" onClick={onClickAction}>
              <div className="button__txt _icon-arrow">{text}</div>
            </button>       
         </div>
       )
}

export default Button