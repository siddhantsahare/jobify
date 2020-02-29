import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const JobifyClients = () => {
  return (
    <Fragment>
      <div className="container">
        <div class="row">
          <div class="col-12">
            <div class="about-title">
              <br />
              <h5 class="blue-text">Top talents who recently got a job</h5>
              <br />
            </div>
          </div>
        </div>

        <OwlCarousel
          className="owl-theme"
          items={3}
          dots={false}
          autoplay={true}
          fluidSpeed={300}
          dotsSpeed={200}
          lazyLoad={true}
          margin={8}
        >
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <img src="./t2.jpg" alt="img" class="img-fluid"></img>
            </div>
            <div class="col-lg-8 col-md-12 about-client">
              <h5>John Martin</h5>
              <p class="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="client row">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="../../src/img/testimonials/t2.jpg"
                alt="img2"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client">
              <h5>Mac Hill</h5>
              <p class="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="client row">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="../../src/img/testimonials/t1.jpg"
                alt="img3"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client">
              <h5>John Martin</h5>
              <p class="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="client row">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="../../src/img/testimonials/t2.jpg"
                alt="img4"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client">
              <h5>Mac Hill</h5>
              <p class="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="client row">
            <div class="col-lg-4 col-md-12 client-img">
              <img src="./t1.jpg" alt="img5" class="img-fluid" />
            </div>
            <div class="col-lg-8 col-md-12 about-client">
              <h5>John Martin</h5>
              <p class="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div class="client row">
            <div class="col-lg-4 col-md-12 client-img">
              <img
                src="../../src/img/testimonials/t2.jpg"
                alt="img6"
                class="img-fluid"
              />
            </div>
            <div class="col-lg-8 col-md-12 about-client">
              <h5>Mac Hill</h5>
              <p class="para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </Fragment>
  );
};

export default JobifyClients;
