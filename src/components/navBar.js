import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import user from '../img/user.svg';

function NavBar() {
  return (
    <nav>
      <div className="nav-display">
        <div>
          <div>
            <Link className="logo" to="/">
              Bookstore CMS
            </Link>
          </div>
          <ul>
            <li>
              <NavLink to="/books">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/Categories">
                Categories
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="usericon">
          <img className="user" alt="user-icon" src={user} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
