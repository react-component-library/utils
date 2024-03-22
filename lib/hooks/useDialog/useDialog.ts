import { useCallback, useState } from 'react';

interface DialogState<T> {
    isOpen: boolean;
    data?: T;
}

const useDialog = <T>(initialValue: T) => {
    const [dialogState, setDialogState] = useState<DialogState<T>>({ isOpen: false, data: initialValue });

    const show = useCallback((data: T) => {
        setDialogState({ isOpen: true, data });
    }, []);

    const hide = useCallback(() => {
        setDialogState({ isOpen: false, data: initialValue });
    }, [initialValue]);

    const setData = useCallback((data: T) => {
        setDialogState((prev) => ({ ...prev, data }));
    }, []);

    return {
        isOpen: dialogState.isOpen,
        data: dialogState.data,
        show,
        hide,
        setData,
    };
};

export default useDialog;
