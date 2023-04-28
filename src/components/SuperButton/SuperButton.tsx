import React from 'react';

import s from './SuperButton.module.css'

type PropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
    className?: string
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {callBack, name, disabled, ...restProps} = props

    const buttonClasses = `
    ${s.default}
    ${s.button}
    ${disabled ? s.disabled : ''}
    ${restProps.className}
    `
    return (
        <button className={buttonClasses} disabled={disabled} onClick={callBack}>{name}</button>
    )
}