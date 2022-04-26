import { differenceInMinutes, differenceInSeconds, format } from 'date-fns';

export const calcDateTime = (dateString: number) => {
    const now = new Date();
    const sendedAt = new Date(dateString);

    const diffSeconds = differenceInSeconds(now, sendedAt);
    const isBeforeOneMinute = diffSeconds < 60;
    if (isBeforeOneMinute) {
        return `${diffSeconds}초 전`;
    }

    const diffMinutes = differenceInMinutes(now, sendedAt);
    const isBeforeOneHour = diffMinutes < 60;
    if (isBeforeOneHour) {
        return `${diffMinutes}분 전`;
    }

    return format(sendedAt, 'MM/dd/yyyy HH:mm:ss');
};

export const getNumberFromDate = (date: Date) => Date.parse(date.toString());
