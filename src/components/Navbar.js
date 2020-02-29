import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav class="blue darken-2">
        <div class="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              <i class="material-icons medium right">code</i>Jobify
            </Link>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/companies">Companies</Link>
              </li>
              <li>
                <Link to="/">Create a Job</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
