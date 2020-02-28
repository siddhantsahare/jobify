import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        background: '#f5f5f5;'
      }}
      alt="Loading..."
    />
  </Fragment>
);
