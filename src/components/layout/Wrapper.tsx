import style from  './Wrapper.module.scss'
import classNames from 'classnames/bind'
import { PropsWithChildren } from 'react'
import React from 'react'

const cx = classNames.bind(style)

export default function Wrapper({children}: PropsWithChildren<unknown>) {
    return (
        <div className={cx('article')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}