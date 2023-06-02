import React from 'react';
import {useSelector} from 'react-redux';

import s from './Display.module.css'

import {counterDisplaySelector, counterValueSelector} from '../../../../redux/selectors/counter-selector';

export type typeOfDisplay = 'counter' | 'info' | 'error'
type PropsType = {
    isDisabledIncrease : boolean
}

export const Display: React.FC<PropsType> = ({isDisabledIncrease}) => {
    const counterValue = useSelector(counterValueSelector)
    const display = useSelector(counterDisplaySelector)

    const errorCountClasses = isDisabledIncrease ? s.redTextCounter : ''

    const displayElements = {
        'info' : <span className={s.span}>enter values and press set</span> ,
        'error':  <span className={ s.redTextSpan }>Incorrect value</span>,
        'counter' : <div className={errorCountClasses}>{counterValue}</div> ,
    }

    return (
        <div className={s.root}>
            {
                displayElements[display]
            }
        </div>
    )
}