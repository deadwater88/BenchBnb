import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({loggedIn, currentUser, logout}) => {
  return loggedIn ?
    (<div>
      <h3>Welcome, {currentUser.username}!</h3>
      <button onClick={logout}> Log Out </button>
    </div>) :
    (<div>
      <Link to="/signup"> Sign Up</Link>
      <br/>
      <Link to="/login" > Log In</Link>
    </div>);
};

export default Greeting;
