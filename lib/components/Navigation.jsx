import React from 'react'
import { Link } from 'react-router'
import { signOut } from '../firebase'
import { split } from 'lodash';

const Navigation = ({ user }) => {
  let currentUser;
  let firstName;
  if (user !== null) {
    currentUser = user.displayName;
    firstName = split(user.displayName, ' ');
  }
  return (
    <div className="navigation">
      <Link to="/"><h1>Movie Keeper</h1></Link>
        <div className="nav-container">
        <ul>
        <li className="nav-link"><Link className="link-test" to="/">My Movies</Link></li>
          <li className="nav-link"><Link className="link-test" to="/explore">Explore</Link></li>
          <li className="nav-link"><Link className="link-test" to="/search">Search</Link></li>
        </ul>
        <span className="log-in">
          <button
            className='auth-button sign-out-button button'
            onClick={() => signOut()}>
            Sign Out
          </button>
        </span>
        </div>
    </div>
  );
};

export default Navigation;
