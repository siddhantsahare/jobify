import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Spinner from '../Spinner';
import Company from './Company';

const GET_COMPANIES = gql`
  query Companies {
    companies {
      id
      name
      websiteUrl
      logoUrl
      jobs {
        title
        description
        locationNames
        countries {
          name
        }
      }
    }
  }
`;

const Companies = () => {
  return (
    <Fragment>
      <section class="section section-filterByFullTime">
        <Query query={GET_COMPANIES}>
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div>
                  <Spinner />
                </div>
              );
            if (error) return console.log(error);
            console.log(data);

            return (
              <Fragment>
                <div className="container">
                  <h5 className="blue-text">All Companies</h5>
                </div>
                {data.companies.map(company => {
                  return <Company key={company.id} company={company} />;
                })}
              </Fragment>
            );
          }}
        </Query>
      </section>
    </Fragment>
  );
};

export default Companies;
