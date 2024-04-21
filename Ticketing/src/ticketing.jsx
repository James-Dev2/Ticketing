import React, { useState } from 'react';

function LoginForm() {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

 
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Submitted:', { username, password, rememberMe });
    
    setUsername('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div>
      <h2>Create Quick Ticket</h2>
      <p>write and address new queries and issues</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Customer Email</label><br />
          <input
            placeholder='Customer Email'
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br />
        <div>
          <label htmlFor="password">Request Ticket Type</label><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />
        <div>
          <label htmlFor="password">Priorty Status</label><br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />
        <div>
          <label htmlFor="password">Ticket Body</label><br />
          <input style={{height:'150px'}}
            type="password"
            id="password"
            placeholder='Type ticket issue here'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />
        
        
        <button type="submit" style={{backgroundColor:'purple',width:'170px'}}>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;