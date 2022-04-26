import style from './MessageBoxList.module.scss';
import classNames from 'classnames/bind';
import MessageBox from '$components/MessageBox/MessageBox';
import { useMessageListState } from '$stores/messageList';

const cx = classNames.bind(style);

export default function MessageBoxList() {
    const { messageList } = useMessageListState();

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
