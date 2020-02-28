import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Jobs from './components/Jobs';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import JobFilterByFullTime from './components/JobFilterByFullTime';
import JobFilterByPartTime from './components/JobFilterByPartTime';
import JobFilterByFeatured from './components/JobFilterByFeatured';
import './App.css';

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
            <Route exact path="/" component={Landing} />
            <Route exact path="/jobs" component={Jobs} />
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
          </Switch>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}

export default App;
