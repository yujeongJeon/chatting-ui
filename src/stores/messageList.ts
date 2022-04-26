import { TMessage } from '$types/message';
import { calcDateTime } from '$utils/time';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const generateId = () => Math.random().toString().slice(8);

const MessageListState = atom<TMessage[]>({
    key: 'messageListState',
    default: [],
});

export const useMessageListState = () => {
    const messageList = useRecoilValue(MessageListState);
    const setMessageList = useSetRecoilState(MessageListState);

    const addMessage = (message: Pick<TMessage, 'text' | 'sender'>) => {
        setMessageList((prevMessageList) => {
            return [
                ...prevMessageList,
                {
                    id: generateId(), // 계산
                    sendedAt: calcDateTime(), // 계산
                    ...message,
                },
            ];
        });
    };

    return {
        messageList,
        addMessage,
    };
};
