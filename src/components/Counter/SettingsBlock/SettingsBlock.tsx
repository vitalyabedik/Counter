import React from 'react';

import s from './SettingsBlock.module.css'

import {DisplayContainer} from '../DisplayContainer';
import {ControlPanelContainer} from '../ControlPanelContainer';
import {SuperButton} from '../../SuperButton';

type PropsType = {
    count: number
    increaseCounter: () => void
    resetCounter: () => void
    isDisabledIncrease: boolean
    isDisabledReset: boolean
}

export const SettingsBlock: React.FC<PropsType> = (props) => {
    const {count, increaseCounter, resetCounter, isDisabledIncrease, isDisabledReset} = props

    return (
        <div className={s.root}>
            <DisplayContainer isDisabledIncrease={isDisabledIncrease}>
                {count}
            </DisplayContainer>
            <ControlPanelContainer>
                <SuperButton disabled={isDisabledIncrease} name={'inc'} callBack={increaseCounter}/>
                <SuperButton disabled={isDisabledReset} name={'reset'} callBack={resetCounter}/>
            </ControlPanelContainer>
        </div>
    )
}