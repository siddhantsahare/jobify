import React from 'react';
import { Link } from 'react-router-dom';
var randomCountryName = require('random-country-name');
const Company = ({
  company: { id, name, websiteUrl, logoUrl, twitter, jobs }
}) => {
  return (
    <div class="container row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content hoverable">
            <div className="row">
              <div className="col l3 m3 s3">
                <span class="card-title blue-text">
                  <img src={logoUrl} className="logo-url"></img>
                </span>
              </div>
              <div className="col l9 m9 s9">
                <span class="card-title blue-text ">{name}</span>
                <br />
                <div>Website: {websiteUrl}</div>
                <div>Twitter: {!twitter && <span>twitter.com</span>}</div>
                <div>No. of Jobs Posted: {jobs.length + 1}</div>
                <div>Location: {randomCountryName.random()}</div>
                <br />
                <div className="row">
                  <div className="col l12">
                    <Link to={`/companies/${id}`}>
                      <div className="btn btn-block blue lighten-2">Jobs </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
