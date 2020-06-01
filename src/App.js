import React, { useState } from 'react';
import Toast from './Components/Toast';
import Cols from './Components/Cols';
import ToastContext from './Context';

function App() {
  const [msg, setMsg] = useState('');
  const [toastId, setToastId] = useState(null);

  function setMsgContext(enteredMsg, id) {
    setMsg(enteredMsg);
    setToastId(id);
  }

  return (
    <ToastContext.Provider value={{ msg, setMsgContext}}>
      <header>
        hiiiiiiiiiiiii, this is your trello
      </header>
      <body>
        <Cols />
        {msg &&
          <Toast msg={msg} key={toastId} />
        }
      </body>
    </ToastContext.Provider>
  );
}

export default App;
