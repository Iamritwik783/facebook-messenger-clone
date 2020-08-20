import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './Input.css';
import './Message.js';
import './App.css';
import Message from './Message.js';

function App() {

  const [input, setInput] = useState(''); //console.log(input);
  const [messages, setMessages] = useState([{ user: "Sonu", message: "Hello" }, { user: "Khata", message: "Hi" }]);
  const [username, setUsername] = useState('');

  // useEffect is a hook that only runs when page loads
  useEffect(() => {setUsername(prompt("Please enter your name: "));}, [])

  const sendMessage = (event) => {
    event.preventDefault();//to stop the form, from reloading

    setMessages([...messages, { user: username, message: input }]);
    setInput('');// clearing input tab
  }



  return (
    <div >

      <div className="input__tab">
        <form>

          <input className="input__bar"
            value={input}
            onChange={event => setInput(event.target.value)}
            placeholder="Enter your message...."
          />


          <Button
            variant="outlined"
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >Send Message
          </Button>

        </form>
      </div>

      <div>
        {messages.map(message => (<Message currentUser={username} user={message.user} message={message.message}/>))}
      </div>
    </div>
  );


}

export default App;
