import React from 'react';

import s from './DisplayContainer.module.css'

type PropsType = {
    children: React.ReactNode
    isDisabledIncrease? : boolean
}



export const DisplayContainer: React.FC<PropsType> = (props) => {
    const {children, isDisabledIncrease} = props

    const displayContainerClasses = isDisabledIncrease ? s.redText : ''

    return (
        <div className={s.root}>
            <div className={displayContainerClasses}>
                {children}
            </div>
        </div>
    )
}