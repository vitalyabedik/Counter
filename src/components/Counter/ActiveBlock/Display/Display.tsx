import React from 'react';

import s from './Display.module.css'

export type typeOfDisplay = 'counter' | 'info' | 'error'
type PropsType = {
    count: number
    typeDisplay: typeOfDisplay,
    isDisabledIncrease : boolean
}

export const Display: React.FC<PropsType> = (props) => {
    const {
        count,
        isDisabledIncrease,
        typeDisplay,
    } = props


    const errorCountClasses = isDisabledIncrease ? s.redTextCounter : ''

    const displayElements = {
        'info' : <span className={s.span}>enter values and press set</span> ,
        'error':  <span className={ s.redTextSpan }>Incorrect value</span>,
        'counter' : <div className={errorCountClasses}>{count}</div> ,
    }

    return (
        <div className={s.root}>
            {
                displayElements[typeDisplay]
            }
        </div>
    )
}