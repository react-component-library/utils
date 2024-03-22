import { Dispatch, SetStateAction, useMemo, useState } from 'react';

interface UseControlledStateProps<T> {
    initialState: T;
    value: T | undefined;
    setValue: Dispatch<SetStateAction<T>> | undefined;
}
const useControlledState = <T>(options: UseControlledStateProps<T>): [T, Dispatch<SetStateAction<T>>] => {
    const { initialState, value: controlledValue, setValue: setControlledValue } = options;

    const isControlledMode = useMemo(() => {
        return controlledValue !== undefined && setControlledValue !== undefined;
    }, [controlledValue, setControlledValue]);

    const [unControlledValue, setUnControlledValue] = useState(initialState);

    const value = isControlledMode ? controlledValue : unControlledValue;
    const setValue = isControlledMode ? setControlledValue : setUnControlledValue;

    return [value as T, setValue as Dispatch<SetStateAction<T>>];
};

export default useControlledState;
