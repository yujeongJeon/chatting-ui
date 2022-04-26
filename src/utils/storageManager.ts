import toArray from 'lodash/fp/toArray';

abstract class StorageManager {
    // eslint-disable-next-line no-useless-constructor
    constructor(private storage: Storage) {}

    set(key: string, value: unknown) {
        const nextValue =
            Array.isArray(value) || typeof value === 'object' ? JSON.stringify(value) : value;
        this.storage[key] = nextValue;
    }

    get(key: string, defaultValue?: unknown): string {
        const value = this.storage[key];
        return typeof value === 'undefined' ? defaultValue : value;
    }

    getToArray<T extends unknown>(key: string, defaultValue?: unknown) {
        const value = this.get(key, defaultValue);
        if (!value) {
            return [];
        }
        return toArray<T>(JSON.parse(value));
    }

    remove(key: string) {
        delete this.storage[key];
    }

    has(key: string) {
        return typeof this.storage[key] !== 'undefined';
    }

    getToJson<T>(key: string, defaultValue?: T): T {
        const value = this.get(key, defaultValue);
        return JSON.parse(value);
    }
}

export type { StorageManager };

class LocalStorage extends StorageManager {
    constructor() {
        super(window.localStorage);
    }
}

class SessionStorage extends StorageManager {
    constructor() {
        super(window.sessionStorage);
    }
}

export const createLocalStorage = () => new LocalStorage();
export const createSessionStorage = () => new SessionStorage();
