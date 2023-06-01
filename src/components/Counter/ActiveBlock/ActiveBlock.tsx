import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import s from './ActiveBlock.module.css'

import {Display} from './Display';
import {ControlPanelContainer} from '../ControlPanelContainer';
import {Button} from '../../UI/Button';
import {
    counterDisplaySelector,
    counterMaxValueSelector, counterStartValueSelector,
    counterValueSelector
} from '../../../redux/selectors/counter-selector';
import {increaseCounterValueAC, setCounterValueAC} from '../../../redux/actions/counter-action';

export const ActiveBlock: React.FC = () => {
    const counterValue = useSelector(counterValueSelector)
    const startValue = useSelector(counterStartValueSelector)
    const maxValue = useSelector(counterMaxValueSelector)
    const display = useSelector(counterDisplaySelector)

    const dispatch = useDispatch()

    const increaseCounter = () => {
        dispatch(increaseCounterValueAC(counterValue))
    }

    const resetCounter = () => {
        dispatch(setCounterValueAC(startValue))
    }

    const isDisabledIncrease = counterValue >= maxValue || display === 'error' || display === 'info'
    const isDisabledReset = counterValue < 1

    return (
        <div className={s.root}>
            <Display isDisabledIncrease={isDisabledIncrease}
            />
            <ControlPanelContainer>
                <Button disabled={isDisabledIncrease} name={'inc'} callBack={increaseCounter}/>
                <Button disabled={isDisabledReset} name={'reset'} callBack={resetCounter}/>
            </ControlPanelContainer>
        </div>
    )
}