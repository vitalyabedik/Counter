import {CounterActionsType} from '../actions/counter-action';
import {typeOfDisplay} from '../../components/CounterRedux/ActiveBlock/Display';
import {
    COUNTER_SET_VALUE,
    COUNTER_SET_DISPLAY_VIEW,
    COUNTER_INCREASE_VALUE,
    COUNTER_SET_MAX_VALUE,
    COUNTER_SET_START_VALUE
} from '../actions/action-types';

export type InitialStateType = {
    counterValue: number
    startValue: number
    maxValue: number
    display: typeOfDisplay
}

export let initialStartValue = 0
export let initialMaxValue = 5

const initialState: InitialStateType = {
    counterValue: initialStartValue,
    startValue: initialStartValue,
    maxValue: initialMaxValue,
    display: 'counter'
}

export const counterReducer = (state = initialState, action: CounterActionsType): InitialStateType => {
    switch (action.type) {
        case COUNTER_SET_VALUE: {
            return {
                ...state,
                counterValue: action.payload.counterValue
            }
        }
        case COUNTER_SET_DISPLAY_VIEW: {
            return {
                ...state,
                display: action.payload.displayView
            }
        }
        case COUNTER_INCREASE_VALUE: {
            return {
                ...state,
                counterValue: action.payload.value + 1
            }
        }
        case COUNTER_SET_START_VALUE: {
            return {
                ...state,
                startValue: action.payload.startValue
            }
        }
        case COUNTER_SET_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.payload.maxValue
            }
        }
        default:
            return state
    }
}