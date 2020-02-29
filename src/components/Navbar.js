import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <nav class="blue darken-2">
        <div class="container">
          <div class="nav-wrapper">
            <Link to="/" class="brand-logo">
              Jobify
            </Link>
            <ul class="right hide-on-med-and-down">
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li>
                <Link to="/companies">Companies</Link>
              </li>
              <li>
                <Link to="/jobs">Create a Job</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
