import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Cols from './Components/Cols';
import ToastProvider from './Providers';

function App() {
  const [msg, setMsg] = useState('');
  const [toastId, setToastId] = useState(null);

  function setMsgContext(enteredMsg, id) {
    setMsg(enteredMsg);
    setToastId(id);
  }

  return (
    <ToastProvider init={{ msg, setMsgContext }} msg={msg} key={toastId}>
      <main>
        <header>
          <Typography gutterBottom variant="h1" component="h1">
            hiiiiiiiiiiiii, this is your trello
          </Typography>
        </header>
        <div>
          <Cols />
        </div>
      </main>
    </ToastProvider>
  );
}

export default App;
