import React from 'react';
import style from './MessageBoxList.module.scss';
import classNames from 'classnames/bind';
import MessageBox from '$components/MessageBox/MessageBox';
import { TMessage } from '$types/message';
import { SENDER } from '$constants/data';
import { useMessageListState } from '$stores/messageList';

const cx = classNames.bind(style);

export default function MessageBoxList() {
    const { messageList } = useMessageListState();
    const oldMessageList: TMessage[] = [
        {
            id: 'MSG-1',
            sender: SENDER.yujeong,
            text: <>뭐함?</>,
            sendedAt: '2022-04-04 09:00',
        },
        {
            id: 'MSG-2',
            sender: SENDER.hyeonbin,
            text: (
                <>
                    밥먹고 출근하는 중...
                    <br />
                    오랜만에 출근하려니까 힘들다
                </>
            ),
            sendedAt: '2022-04-04 09:01',
        },
        {
            id: 'MSG-3',
            sender: SENDER.yujeong,
            text: <>저런...나도 이제 곧 출근한다 ㅋㅋㅋ</>,
            sendedAt: '2022-04-04 09:02',
        },
        {
            id: 'MSG-4',
            sender: SENDER.yujeong,
            text: <>뭐함?</>,
            sendedAt: '2022-04-04 09:00',
        },
        {
            id: 'MSG-5',
            sender: SENDER.hyeonbin,
            text: (
                <>
                    밥먹고 출근하는 중...
                    <br />
                    오랜만에 출근하려니까 힘들다
                </>
            ),
            sendedAt: '2022-04-04 09:01',
        },
        {
            id: 'MSG-6',
            sender: SENDER.yujeong,
            text: <>저런...나도 이제 곧 출근한다 ㅋㅋㅋ</>,
            sendedAt: '2022-04-04 09:02',
        },
    ];

    return (
        <div className={cx('list')}>
            {messageList.map(({ id, text, sendedAt, sender }) => (
                <div key={id} className={cx('message')}>
                    <MessageBox sender={sender} text={text} sendedAt={sendedAt} />
                </div>
            ))}
        </div>
    );
}
