import React from 'react';
import { NavLink, Link } from 'react-router-dom';

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
          <i className="far fa-user" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
