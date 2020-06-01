import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
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
        <Typography gutterBottom variant="h1" component="h1">
          hiiiiiiiiiiiii, this is your trello
        </Typography>
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
