import React from 'react';
import style from './MessageBox.module.scss';
import classNames from 'classnames/bind';
import { TMessage } from '$types/message';
import { ME } from '$constants/data';

const cx = classNames.bind(style);

type MessageBoxProps = Omit<TMessage, 'id'>;

export default function MessageBox({ text, sendedAt, sender }: MessageBoxProps) {
    const isMe = sender === ME;
    return (
        <div className={cx('box', { isMe })}>
            <img
                src={sender.profile}
                width="50"
                height="50"
                className={cx('profile')}
                alt="profile-img"
            />
            <div className={cx('content')}>
                <div className={cx('message')}>{text}</div>
                <p className={cx('time-area')}>{sendedAt}</p>
            </div>
        </div>
    );
}
