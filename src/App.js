import React from 'react';
import Button from '@material-ui/core/Button';
import './Input.css'

import './App.css';

function App() {
  return (
    <div >

      <div className="input__tab">
        <form>
          <input className = "input__bar"
            placeholder="Enter your message...."
          />
          <Button variant="outlined" color="primary">
            Primary
          </Button>
        </form>

      </div>

      <div>
        {/* message */}
      </div>
    </div>
  );
}

export default App;
