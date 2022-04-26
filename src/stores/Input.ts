import { atom, useRecoilState } from "recoil";

const InputState = atom({
    key: 'InputState',
    default: ''
})

export const useInputState = () => {
    const [value, setValue] = useRecoilState(InputState)
    return {
        value,
        setValue
    }
}