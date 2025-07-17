/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 main-color mb-10">
                Who We Are
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30">Our Comapny</h3>
              <p>
                Our company specializes in delivering durable and reliable
                construction solutions with a focus on concrete formwork,
                masonry, stucco systems, and exterior cladding. With years of
                experience and a passion for precision, we approach every
                project with professionalism, safety, and craftsmanship in mind.
                Our team ensures consistent quality and long-term value in both
                residential and commercial structures.
              </p>
              <Link href="/about">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src="/assets/img/feat.jpg" alt="" />
            <div className="stauts">
              <div className="item">
                <h4>
                  3<span>K</span> +
                </h4>
                <h6>Happy Clients</h6>
              </div>
              <div className="item">
                <h4>
                  14<span>K</span> +
                </h4>
                <h6>Success Projects</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
