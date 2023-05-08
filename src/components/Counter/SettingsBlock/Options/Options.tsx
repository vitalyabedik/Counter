import React from 'react';

import s from './Options.module.css'

import {Input} from '../../../UI';

type PropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    isCorrectStartValue: boolean
    isCorrectMaxAndStartValues: boolean
}



export const Options: React.FC<PropsType> = (props) => {
    const {
        startValue,
        maxValue,
        changeMaxValue,
        changeStartValue,
        isCorrectStartValue,
        isCorrectMaxAndStartValues
    } = props

    const maxInputValue = String(maxValue)
    const startInputValue = String(startValue)

    const onChangeMaxValueHandler = (newMaxValue: string) => {
        changeMaxValue(Number(newMaxValue))
    }
    const onChangeStartValueHandler = (newStartValue: string) => {
        changeStartValue(Number(newStartValue))
    }



    const startValueInputClasses = !isCorrectMaxAndStartValues || isCorrectStartValue ? s.errorInput : ''
    const maxValueInputClasses = !isCorrectMaxAndStartValues ? s.errorInput : ''

    return (
        <div className={s.root}>
            <div className={s.items}>
                <div className={s.item}>
                    <div className={s.item__text}>max value:</div>
                    <Input className={maxValueInputClasses} value={maxInputValue} callBack={(e) => onChangeMaxValueHandler(e)}/>
                </div>
                <div className={s.item}>
                    <div className={s.item__text}>start value:</div>
                    <Input className={startValueInputClasses} value={startInputValue} callBack={(e) => onChangeStartValueHandler(e)}/>
                </div>
            </div>
        </div>
    )
}