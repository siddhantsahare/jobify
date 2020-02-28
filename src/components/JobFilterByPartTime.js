import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Spinner from './Spinner';
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

const JobFilterByPartTime = () => {
  const jobPartTime = [];
  return (
    <Fragment>
      <section className="container section section-filter">
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
      <section class="section section-filterByPartTime">
        <Query query={GET_JOBS}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div>
                  <Spinner />
                </div>
              );
            if (error) return console.log(error);

            return (
              <Fragment>
                {data.jobs.map(job => {
                  if (job.commitment.title === 'Part-Time') {
                    jobPartTime.push(data.jobs);
                    return <Job key={job.id} job={job} />;
                  }
                })}

                {jobPartTime.length === 0 && (
                  <div class="container row">
                    <div class="card blue lighten-4 col s12 m12">
                      <div class="card card-content center">
                        <h4>Oops We don't have companies</h4>
                        <div class="card card-content blue lighten-4">
                          <h4>That Have part time jobs available</h4>
                        </div>

                        <div class="card card-action">
                          <h2>Sorry !</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Fragment>
            );
          }}
        </Query>
      </section>
    </Fragment>
  );
};

export default JobFilterByPartTime;
