import React from 'react';
import dayjs from 'dayjs';

const Job = ({
  job: {
    title,
    commitment,
    company: { name, websiteUrl },
    description,
    postedAt,
    isFeatured
  }
}) => {
  return (
    <div class="container row">
      <div class="col s12 m12">
        <div class="card">
          <div class="card-content hoverable">
            <div className="row">
              <div className="col l9 m9 s9">
                <span class="card-title blue-text ">{title}</span>
              </div>
              <div className="col l3 m3 s3">
                <span class="card-title blue-text ">
                  {isFeatured && (
                    <div className="center text-blue">Featured</div>
                  )}
                </span>
              </div>
            </div>
            <p>{dayjs(postedAt).format('h:mm a, MMMM DD YYYY')}</p>
            <br />
            <textarea class="scroller" value={description}></textarea>
          </div>
          <div class="card-action">
            <div className="row">
              <div className="col l3 m3 s3">Company : {name}</div>
              <div className="col l3 m3 s3">Website: {websiteUrl}</div>
              <div className="col l3 m3 s3">Job type: {commitment.title}</div>
              <div className="col l3 m3 s3 btn blue darken-3">
                <i class="material-icons right">send</i>Apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
