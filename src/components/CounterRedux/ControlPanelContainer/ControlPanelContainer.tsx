import React from 'react';

import s from './ControlPanelContainer.module.css';

type PropsType = {
    children: React.ReactNode
}

export const ControlPanelContainer: React.FC<PropsType> = (props) => {
    const {children} = props

    return (
        <div className={s.root}>
            <div className={s.elements}>{children}</div>
        </div>
    )
}