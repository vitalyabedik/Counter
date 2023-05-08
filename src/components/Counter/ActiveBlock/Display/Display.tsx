import React from 'react';

import s from './Display.module.css'

type PropsType = {
    count: number
    isDisabledIncrease : boolean
    isDefaultOptionValues: boolean
    isCorrectStartValue: boolean
    isCorrectMaxAndStartValues: boolean
}

export const Display: React.FC<PropsType> = (props) => {
    const {
        count,
        isDisabledIncrease,
        isDefaultOptionValues,
        isCorrectStartValue,
        isCorrectMaxAndStartValues
    } = props

    const renderErrorText = !isCorrectMaxAndStartValues || isCorrectStartValue
    const renderInfoText = !renderErrorText && isDefaultOptionValues
    const renderCountValue = !renderErrorText && !renderInfoText

    const errorCountClasses = isDisabledIncrease ? s.redTextCounter : ''
    const errorCorrectValueClasses = renderErrorText ? s.redTextSpan : ''

    return (
        <div className={s.root}>
            {renderCountValue &&  <div className={errorCountClasses}>{count}</div>}
            {renderInfoText && <span className={s.span}>enter values and press set</span>}
            {renderErrorText &&  <span className={errorCorrectValueClasses}>Incorrect value</span>}
        </div>
    )
}