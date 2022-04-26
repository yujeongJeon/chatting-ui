export const deppCompareObject = (obj1: Record<string, unknown>, obj2: Record<string, unknown>) =>
    Object.keys(obj1).every((key) => {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
        return true;
    });
