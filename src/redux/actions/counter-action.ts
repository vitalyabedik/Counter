import {
    COUNTER_SET_VALUE,
    COUNTER_SET_DISPLAY_VIEW,
    COUNTER_INCREASE_VALUE,
    COUNTER_SET_START_VALUE,
    COUNTER_SET_MAX_VALUE
} from './action-types';
import {typeOfDisplay} from '../../components/Counter/ActiveBlock/Display';

export type CounterActionsType = SetCounterValueTypeAC
    | SetDisplayViewTypeAC
    | IncreaseCounterValueAC
    | setCounterStartValueTypeAC
    | setCounterMaxValueTypeAC

type SetCounterValueTypeAC = ReturnType<typeof setCounterValueAC>
export const setCounterValueAC = (counterValue: number) => {
    return {
        type: COUNTER_SET_VALUE,
        payload: {
            counterValue
        }
    } as const
}

type SetDisplayViewTypeAC = ReturnType<typeof setDisplayViewAC>
export const setDisplayViewAC = (displayView: typeOfDisplay) => {
    return {
        type: COUNTER_SET_DISPLAY_VIEW,
        payload: {
            displayView
        }
    } as const
}

type IncreaseCounterValueAC = ReturnType<typeof increaseCounterValueAC>
export const increaseCounterValueAC = (value: number) => {
    return {
        type: COUNTER_INCREASE_VALUE,
        payload: {
            value
        }
    } as const
}

type setCounterStartValueTypeAC = ReturnType<typeof setCounterStartValueAC>
export const setCounterStartValueAC = (startValue: number) => {
    return {
        type: COUNTER_SET_START_VALUE,
        payload: {
            startValue
        }
    } as const
}

type setCounterMaxValueTypeAC = ReturnType<typeof setCounterMaxValueAC>
export const setCounterMaxValueAC = (maxValue: number) => {
    return {
        type: COUNTER_SET_MAX_VALUE,
        payload: {
            maxValue
        }
    } as const
}


