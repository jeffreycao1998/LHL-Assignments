import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';

const App = () => {
  const [socket, setSocket] = useState(null);


  useEffect(() => {
    setSocket(io('http://localhost:3001'));
  },[]);

  socket?console.log(socket):console.log('nope');

  return (
    <div className="App">
      <h1>
        { 
          socket ? socket.id : 'nothing'
        }
      </h1>
      <button>something</button>
    </div>
  );
}

export default App;
