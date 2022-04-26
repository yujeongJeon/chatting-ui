import { TMessage } from '$types/message';
import { createSessionStorage } from '$utils/storageManager';
import { calcDateTime, getNumberFromDate } from '$utils/time';
import { useEffect } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const generateId = () => Math.random().toString().slice(8);

const sessionStorage = createSessionStorage();
const STORAGE_KEY = 'MESSAGE_HISTORY';

const getMessageList = (): TMessage[] => {
    return sessionStorage.getToArray<Omit<TMessage, 'sendedAt'>>(STORAGE_KEY).map((message) => ({
        ...message,
        sendedAt: calcDateTime(message.createdAt),
    }));
};

const MessageListState = atom<TMessage[]>({
    key: 'messageListState',
    default: getMessageList(),
});

export const useMessageListState = () => {
    const messageList = useRecoilValue(MessageListState);
    const setMessageList = useSetRecoilState(MessageListState);

    const addMessage = (message: Pick<TMessage, 'text' | 'sender'>) => {
        setMessageList((prevMessageList) => {
            return [
                ...prevMessageList,
                {
                    ...message,
                    id: generateId(),
                    sendedAt: '방금 전',
                    createdAt: getNumberFromDate(new Date()),
                },
            ];
        });
    };

    useEffect(() => {
        sessionStorage.set(
            STORAGE_KEY,
            messageList.map(({ text, sender, id, createdAt }) => ({ text, sender, id, createdAt })),
        );
    }, [messageList]);

    return {
        messageList,
        addMessage,
    };
};
