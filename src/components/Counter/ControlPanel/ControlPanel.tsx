import React from 'react';

import s from './ControlPanel.module.css';

import {SuperButton} from '../../SuperButton';

type PropsType = {
    increaseCallback: () => void
    resetCallback: () => void
    isDisabledIncrease: boolean
    isDisabledReset: boolean
}

export const ControlPanel: React.FC<PropsType> = (props) => {
    const {increaseCallback, resetCallback, isDisabledIncrease, isDisabledReset} = props

    const onClickIncreaseHandler = () => {
        increaseCallback()
    }

    const onClickResetHandler = () => {
        resetCallback()
    }

    return (
        <div className={s.root}>
            <div className={s.elements}>
                <div className={s.element}>
                    <SuperButton disabled={isDisabledIncrease} name={'inc'} callBack={onClickIncreaseHandler}/>
                </div>
                <div className={s.element}>
                    <SuperButton disabled={isDisabledReset} name={'reset'} callBack={onClickResetHandler}/>
                </div>
            </div>
        </div>
    )
}