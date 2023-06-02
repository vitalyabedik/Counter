import React from 'react';

import s from './Options.module.css'

import {Input} from '../../../UI';

import {useSelector} from 'react-redux';
import {
    counterMaxValueSelector,
    counterStartValueSelector,
} from '../../../../redux/selectors/counter-selector';

type PropsType = {
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    isCorrectStartValue: boolean
    isCorrectMaxAndStartValues: boolean
}

export const Options: React.FC<PropsType> = (props) => {
    const {
        changeStartValue,
        changeMaxValue,
        isCorrectStartValue,
        isCorrectMaxAndStartValues
    } = props

    const startValue = useSelector(counterStartValueSelector)
    const maxValue = useSelector(counterMaxValueSelector)

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
                    <Input className={maxValueInputClasses} value={maxValue} callBack={(e) => onChangeMaxValueHandler(e)}/>
                </div>
                <div className={s.item}>
                    <div className={s.item__text}>start value:</div>
                    <Input className={startValueInputClasses} value={startValue} callBack={(e) => onChangeStartValueHandler(e)}/>
                </div>
            </div>
        </div>
    )
}