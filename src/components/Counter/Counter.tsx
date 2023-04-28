import React from 'react';

import s from './Counter.module.css'

import {Display} from './Display';
import {ControlPanel} from './ControlPanel';

type PropsType = {
    count: number
    increaseCallback: () => void
    resetCallback: () => void
    isDisabledIncrease: boolean
    isDisabledReset: boolean
}

export const Counter: React.FC<PropsType> = (props) => {
    const {count, increaseCallback, resetCallback, isDisabledIncrease, isDisabledReset} = props

    return (
        <div className={s.root}>
            <Display count={count} isDisabledIncrease={isDisabledIncrease}/>
            <ControlPanel
                increaseCallback={increaseCallback}
                resetCallback={resetCallback}
                isDisabledIncrease={isDisabledIncrease}
                isDisabledReset={isDisabledReset}
            />
        </div>
    )
}