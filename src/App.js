import React from 'react';

import './App.css';

function App() {
  return (
    <div>

      <div id="input__tab">
        <form>
        <input
          placeholder="Enter your message...."
        />
        <button type="submit">Send Message</button>
        </form>
      </div>

      <div>
        {/* message */}
      </div>
    </div>
  );
}

export default App;
