import style from './MessageBox.module.scss';
import classNames from 'classnames/bind';
import { TMessage } from '$types/message';
import { ME } from '$constants/data';
import { HyeonbinProfile, YujeongProfile } from '$components/profile/ProfileImageCircle';
import { deppCompareObject } from '$utils/index';

const cx = classNames.bind(style);

type MessageBoxProps = Omit<TMessage, 'id' | 'createdAt'>;

export default function MessageBox({ text, sendedAt, sender }: MessageBoxProps) {
    const isMe = deppCompareObject(sender, ME);
    return (
        <div className={cx('box', { isMe })}>
            {isMe ? <YujeongProfile /> : <HyeonbinProfile />}
            <div className={cx('content')}>
                <div className={cx('message')}>{text}</div>
                <p className={cx('time-area')}>{sendedAt}</p>
            </div>
        </div>
    );
}
