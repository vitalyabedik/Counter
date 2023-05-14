import React, {ChangeEvent} from 'react';

import s from './Input.module.css'

type PropsType = {
    value: string
    callBack: (e: string) => void
    className?: string
    type?: string
}

export const Input: React.FC<PropsType> = (props) => {
    const {value, callBack, type='number', ...restProps} = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBack(e.currentTarget.value)
    }

    const inputClasses = `
    ${s.default}
    ${s.input}
    ${restProps.className}
    `
    return (
        <input value={value} onChange={onChangeHandler} type={type} className={inputClasses} />
    )
}