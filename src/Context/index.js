import React from 'react';

const ToastContext = React.createContext({
    msg: '',
    setMsgContext: () => {}
});

export default ToastContext;
