import React from "react";

const values = [
  {
    title: "INTEGRITY",
    desc: "We work with the highest ethical standards and guarantee transparency and honesty in everything we do.",
  },
  {
    title: "QUALITY",
    desc: "We handle every task with care and deliver clean, long-lasting workmanship.",
  },
  {
    title: "RELIABILITY",
    desc: "We show up when we say we will, and we complete every job fully and on time.",
  },
  {
    title: "SAFETY",
    desc: "Safety is our top priority. We follow strict safety protocols on every project.",
  },
  {
    title: "INNOVATION",
    desc: "We stay up to date with modern solutions and strive to build smarter and better.",
  },
];

const OurValuesTimeline = () => (
  <section className="our-values section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="title">OUR VALUES</h2>
          <div className="timeline">
            {values.map((val, i) => (
              <div className="timeline-item" key={i}>
                <div className="dot" />
                <div className="text">
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .section-padding {
        padding: 100px 0;
      }

      .container {
        max-width: 1140px;
        margin: 0 auto;
        padding: 0 20px;
      }

      .title {
        color: #c7a254;
        font-size: 32px;
        margin-bottom: 50px;
      }

      .timeline {
        border-left: 2px solid #c7a254;
        padding-left: 30px;
        margin-left: 10px;
      }

      .timeline-item {
        position: relative;
        margin-bottom: 40px;
      }

      .dot {
        width: 12px;
        height: 12px;
        background: #c7a254;
        border-radius: 50%;
        position: absolute;
        left: -37px;
        top: 6px;
      }

      .text h3 {
        color: #c7a254;
        font-size: 20px;
        margin-bottom: 10px;
      }

      .text p {
        color: #ccc;
        font-size: 16px;
        line-height: 1.6;
      }
    `}</style>
  </section>
);

export default OurValuesTimeline;
