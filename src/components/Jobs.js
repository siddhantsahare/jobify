import React, { Fragment } from 'react';

import JobFilterByFullTime from './JobFilterByFullTime';
import JobifyClients from './JobifyClients';

const Jobs = () => {
  return (
    <Fragment>
      <JobifyClients />
      <JobFilterByFullTime />
    </Fragment>
  );
};

export default Jobs;
