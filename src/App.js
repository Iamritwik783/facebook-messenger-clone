import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './Input.css';
import './Message.js'
import './App.css';
import Message from './Message.js';

function App() {

  const [input, setInput] = useState('');
  //console.log(input);

  const [messages, setMessages] = useState([{ user: "Sonu", message: "Hello" }, { user: "Khata", message: "Hi" }]);

  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt("Please enter your name: "));
  }, [])

  const sendMessage = (event) => {
    //to stop the form, from reloading
    event.preventDefault();

    setMessages([...messages, { user: username, message: input }]);
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
        {/* message */}

        {
          messages.map(
            message => (
              <Message
                currentUser={username}
                user={message.user}
                message={message.message}
              />
            )
          )
        }


      </div>
    </div>
  );
}

export default App;
