import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Jobs from './components/jobs/Jobs';
import Navbar from './components/Navbar';
import JobFilterByFullTime from './components/jobs/JobFilterByFullTime';
import JobFilterByPartTime from './components/jobs/JobFilterByPartTime';
import JobFilterByFeatured from './components/jobs/JobFilterByFeatured';

import Companies from './components/companies/Companies';

import { Provider } from 'react-redux';

import './App.css';
import CompanyProfile from './components/companies/CompanyProfile';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Jobs} />
            <Route
              exact
              path="/jobFilterByFullTime"
              component={JobFilterByFullTime}
            />
            <Route
              exact
              path="/jobFilterByPartTime"
              component={JobFilterByPartTime}
            />
            <Route
              exact
              path="/jobFilterByFeatured"
              component={JobFilterByFeatured}
            />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/companies/:id" component={CompanyProfile} />
          </Switch>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
