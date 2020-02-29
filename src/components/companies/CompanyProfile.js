import React, { Fragment } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Spinner from '../Spinner';
import dayjs from 'dayjs';

const GET_JOBS = gql`
  query {
    jobs {
      id
      postedAt
      title
      description
      company {
        id
        name
      }
    }
  }
`;

const CompanyProfile = ({ match }) => {
  return (
    <Fragment>
      <section class="section section-filterByFullTime">
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
                  if (job.company.id === match.params.id) {
                    return (
                      <Fragment key={job.id}>
                        <div class="container row">
                          <div class="col s12 m12">
                            <div class="card hoverable">
                              <div class="card-content">
                                <div className="row">
                                  <div className="col l12 m12 s12">
                                    <span class="card-title blue-text ">
                                      {job.title}
                                    </span>
                                  </div>
                                </div>
                                <p>
                                  {dayjs(job.postedAt).format(
                                    'h:mm a, MMMM DD YYYY'
                                  )}
                                </p>
                                <br />
                                <textarea
                                  class="scroller"
                                  value={job.description}
                                ></textarea>
                              </div>
                              <div className="card-content">
                                <div className="btn btn-block blue">Apply</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Fragment>
                    );
                  } // <CompanyJobItem key={job.id} job={job} />;
                })}
              </Fragment>
            );
          }}
        </Query>
      </section>
    </Fragment>
  );
};

export default CompanyProfile;
