import {AppRootStateType} from '../store';

export const counterValueSelector = (state: AppRootStateType ) => state.counter.counterValue
export const counterDisplaySelector = (state: AppRootStateType ) => state.counter.display
export const counterStartValueSelector = (state: AppRootStateType ) => state.counter.startValue
export const counterMaxValueSelector = (state: AppRootStateType ) => state.counter.maxValue