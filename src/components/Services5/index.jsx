import React from "react";
import Link from "next/link";
import { FaTools, FaPaintRoller, FaBuilding } from "react-icons/fa";
import { GiBrickWall } from "react-icons/gi";

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>What We Do</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-4 col-md-6 mb-4 item-bx">
            <span className="icon">
              <FaTools size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">Concrete Formwork</h6>
            <p>
              We provide full-scope concrete formwork services with a focus on
              precision, efficiency, and safety. From footings and foundation
              walls to columns, beams, and slabs, our team ensures every form is
              accurately set...
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 item-bx">
            <span className="icon">
              <GiBrickWall size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">Masonry</h6>
            <p>
              With many years of hands-on experience, we provide fast and
              reliable masonry services using concrete block, brick, and
              architectural stone — for both structural and architectural
              applications...
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-4 col-md-12 mb-4 item-bx">
            <span className="icon">
              <FaBuilding size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">EIFS</h6>
            <p>
              Stucco System (EIFS – Exterior Insulation and Finish System) We
              specialize in high-performance EIFS applications designed to
              provide both exterior insulation and seamless finishing...
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
