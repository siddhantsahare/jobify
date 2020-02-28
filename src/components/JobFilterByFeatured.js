import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import Jobstat from './Jobstat';

import Job from './Job';

const GET_JOBS = gql`
  query Jobs {
    jobs {
      id
      title
      commitment {
        title
      }
      company {
        name
        logoUrl
        websiteUrl
      }
      description
      postedAt
      isFeatured
    }
  }
`;

const JobFilterByFeatured = () => {
  return (
    <Fragment>
      <section className="section section-jobs">
        <div class="row">
          <div class="col s12 m6 l4">
            <Link to="/jobFilterByFullTime">
              <div class="card-panel center hoverable">
                <i class="material-icons medium">insert_emoticon</i>
                <h5>Full Time Jobs</h5>
                <h3 class="count">70</h3>
              </div>
            </Link>
          </div>
          <div class="col s12 m6 l4">
            <Link to="/jobFilterByPartTime">
              <div class="card-panel center hoverable">
                <i class="material-icons medium">mode_edit</i>
                <h5>Part Time Jobs</h5>
                <h3 class="count">0</h3>
              </div>
            </Link>
          </div>

          <div class="col s12 m6 l4">
            <Link to="/jobFilterByFeatured">
              <div class="card-panel center hoverable">
                <i class="material-icons medium">mode_edit</i>
                <h5>Featured Jobs</h5>
                <h3 class="count">1</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section class="section section-filterByFeatured">
        <Query query={GET_JOBS}>
          {({ loading, error, data }) => {
            if (loading) return <div>Loading...</div>;
            if (error) return console.log(error);
            console.log(data);

            return (
              <Fragment>
                {data.jobs.map(job => {
                  if (job.isFeatured === true) {
                    return <Job key={job.id} job={job} />;
                  }
                })}
              </Fragment>
            );
          }}
        </Query>
      </section>
    </Fragment>
  );
};

export default JobFilterByFeatured;
