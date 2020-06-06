import React from 'react';
import Toast from '../Components/Toast';

export const ToastContext = React.createContext({
    msg: '',
    setMsgContext: () => {}
});

function ToastProvider({ children, init = "", msg, toastKey }) {
    return (
        <ToastContext.Provider value={init}>
            {children}
            {msg &&
                <Toast msg={msg} key={toastKey} />
            }
        </ToastContext.Provider>
    )
}

export default ToastProvider;
