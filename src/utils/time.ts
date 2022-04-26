import { format } from 'date-fns';

export const calcDateTime = () => {
    return format(new Date(), 'MM/dd/yyyy HH:mm:ss');
};
