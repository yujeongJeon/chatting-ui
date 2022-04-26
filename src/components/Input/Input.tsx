import { ChangeEvent, KeyboardEvent } from 'react';
import style from './Input.module.scss';
import classNames from 'classnames/bind';
import { useInputState } from '$stores/Input';
import { useMessageListState } from '$stores/messageList';
import { SENDER } from '$constants/data';

const cx = classNames.bind(style);

export default function Input() {
    const { value, setValue } = useInputState();
    const { addMessage } = useMessageListState();

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !!e.currentTarget.value) {
            addMessage({
                text: e.currentTarget.value,
                sender: SENDER.yujeong,
            });
            setValue('');
        }
    };

    return (
        <div className={cx('article')}>
            <input
                className={cx('input')}
                type="text"
                value={value}
                onChange={onChangeValue}
                onKeyUp={onKeyUp}
            />
        </div>
    );
}
