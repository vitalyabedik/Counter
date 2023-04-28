import React from 'react';

import s from './Display.module.css'

type PropsType = {
    count: number
    isDisabledIncrease: boolean
}

export const Display: React.FC<PropsType> = (props) => {
    const {count, isDisabledIncrease} = props

    const spanClasses = isDisabledIncrease ? s.redText : ''

    return (
        <div className={s.root}>
            <div className={spanClasses}>{count}</div>
        </div>
    )
}