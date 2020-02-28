import React from 'react';
import dayjs from 'dayjs';

const Job = ({
  job: {
    title,
    commitment,
    company: { name, websiteUrl },
    description,
    postedAt
  }
}) => {
  return (
    <div class="container row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content hoverable">
            <span class="card-title blue-text">{title}</span>
            <p>{dayjs(postedAt).format('h:mm a, MMMM DD YYYY')}</p>
            <br />
            <textarea class="scroller" value={description}></textarea>
          </div>
          <div class="card-action">
            <div className="row">
              <div className="col l4 m4 s4">Company : {name}</div>
              <div className="col l4 m4 s4">Website: {websiteUrl}</div>
              <div className="col l4 m4 s4">Job type: {commitment.title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
