import React from 'react';

import s from './ActiveBlock.module.css'

import {Display, typeOfDisplay} from './Display';
import {ControlPanelContainer} from '../ControlPanelContainer';
import {Button} from '../../UI/Button';

type PropsType = {
    count: number
    increaseCounter: () => void
    resetCounter: () => void
    isDisabledIncrease: boolean
    isDisabledReset: boolean
    typeDisplay: typeOfDisplay,
}

export const ActiveBlock: React.FC<PropsType> = (props) => {
    const {
        count,
        increaseCounter,
        resetCounter,
        isDisabledIncrease,
        isDisabledReset,
        typeDisplay,
    } = props

    return (
        <div className={s.root}>
            <Display count={count}
                     isDisabledIncrease={isDisabledIncrease}
                     typeDisplay={typeDisplay}
            />
            <ControlPanelContainer>
                <Button disabled={isDisabledIncrease} name={'inc'} callBack={increaseCounter}/>
                <Button disabled={isDisabledReset} name={'reset'} callBack={resetCounter}/>
            </ControlPanelContainer>
        </div>
    )
}