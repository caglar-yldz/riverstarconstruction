import React from "react";
import Link from "next/link";
import { FaTools, FaPaintRoller, FaCubes, FaBuilding } from "react-icons/fa";

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>What We Do</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon">
              <FaTools size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">Conqread Formwork</h6>
            <p>
              Our concrete formwork systems provide high durability and
              precision craftsmanship.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon">
              <FaBuilding size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">Masonry</h6>
            <p>
              Our masonry services ensure solid, long-lasting, and aesthetic
              structures.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon">
              <FaPaintRoller size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">Stucco System</h6>
            <p>
              Our stucco systems improve insulation and add style to your
              building.
            </p>
            <Link href="/about">
              <a className="more mt-30">Read More</a>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 item-bx">
            <span className="icon">
              <FaCubes size={40} color="#c7a254" />
            </span>
            <h6 className="mb-20">Aluminium Composite Panel</h6>
            <p>
              Modern cladding solutions combining aesthetics and durability.
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
