import React from 'react';

import s from './SettingsBlock.module.css'

import {ControlPanelContainer} from '../ControlPanelContainer';
import {Button} from '../../UI/Button';
import {Options} from './Options';

type PropsType = {
    startValue: number
    maxValue: number
    changeStartValue: (value: number) => void
    changeMaxValue: (value: number) => void
    setSettings: (newStartValue: number, newMaxValue: number) => void
    isDisabledSet: boolean
    isCorrectStartValue: boolean
    isCorrectMaxAndStartValues: boolean
}

export const SettingsBlock: React.FC<PropsType> = (props) => {
    const {
        startValue,
        maxValue,
        changeMaxValue,
        changeStartValue,
        setSettings,
        isDisabledSet,
        isCorrectStartValue,
        isCorrectMaxAndStartValues
    } = props

    const onClickSetSettingsHandler = () => {
        setSettings(startValue, maxValue)
    }

    return (
        <div className={s.root}>
            <Options startValue={startValue}
                     maxValue={maxValue}
                     changeStartValue={changeStartValue}
                     changeMaxValue={changeMaxValue}
                     isCorrectStartValue={isCorrectStartValue}
                     isCorrectMaxAndStartValues={isCorrectMaxAndStartValues}
            />
            <ControlPanelContainer>
                <Button disabled={isDisabledSet} name={'set'} callBack={onClickSetSettingsHandler}/>
            </ControlPanelContainer>
        </div>
    )
}