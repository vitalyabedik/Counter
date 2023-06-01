import React from 'react';

import s from './SettingsBlock.module.css'

import {ControlPanelContainer} from '../ControlPanelContainer';
import {Button} from '../../UI/Button';
import {Options} from './Options';
import {useDispatch, useSelector} from 'react-redux';
import {
    counterMaxValueSelector,
    counterStartValueSelector,
} from '../../../redux/selectors/counter-selector';
import {
    setCounterMaxValueAC,
    setCounterStartValueAC,
    setCounterValueAC,
    setDisplayViewAC
} from '../../../redux/actions/counter-action';
import {initialMaxValue, initialStartValue} from '../../../redux/reducers/counter-reducer';
import {setValueToLocalStorage} from '../../../utils';

export const SettingsBlock: React.FC = () => {
    const startValue = useSelector(counterStartValueSelector)
    const maxValue = useSelector(counterMaxValueSelector)

    const dispatch = useDispatch()

    const changeStartValue = (newStartValue: number) => {
        if (newStartValue < 0 || newStartValue > maxValue) {
            dispatch(setDisplayViewAC('error'))
            dispatch(setCounterStartValueAC(newStartValue))
        } else {
            dispatch(setCounterStartValueAC(newStartValue))
            dispatch(setDisplayViewAC('info'))
        }
    }

    const changeMaxValue = (newMaxValue: number) => {
        if (newMaxValue < 0 || newMaxValue <= startValue) {
            dispatch(setDisplayViewAC('error'))
            dispatch(setCounterMaxValueAC(newMaxValue))
        } else {
            dispatch(setCounterMaxValueAC(newMaxValue))
            dispatch(setDisplayViewAC('info'))
        }
    }

    const onClickSetSettingsHandler = () => {
        dispatch(setCounterValueAC(startValue))
        changeStartValue(startValue)
        changeMaxValue(maxValue)
        setValueToLocalStorage('startCounterValue', startValue)
        setValueToLocalStorage('maxCounterValue', maxValue)
        dispatch(setDisplayViewAC('counter'))
    }

    const isDefaultOptionValues = initialStartValue !== startValue || initialMaxValue !== maxValue
    const isCorrectStartValue = startValue < 0
    const isCorrectMaxAndStartValues = startValue < maxValue
    const isDisabledSet = !isDefaultOptionValues || !isCorrectMaxAndStartValues || isCorrectStartValue

    return (
        <div className={s.root}>
            <Options changeStartValue={changeStartValue}
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