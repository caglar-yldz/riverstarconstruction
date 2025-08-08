import React from "react";
import Link from "next/link";

const data = [
  {
    id: 1,
    icon: "fas fa-user-tie",
    frontText: "Proven Expertise",
    backText: "Years of hands-on experience in masonry, formwork and EIFS.",
  },
  {
    id: 3,
    icon: "fas fa-award",
    frontText: "Commitment to Quality",
    backText:
      "We deliver durable, flawless results by following the highest industry standards.",
  },
  {
    id: 2,
    icon: "fas fa-clock",
    frontText: "Efficient Scheduling",
    backText:
      "Smart planning and reliable crews ensure every project stays on track and on time",
  },

  {
    id: 4,
    icon: "fas fa-handshake",
    frontText: "Trusted by Our Clients",
    backText:
      "We've earned the trust of our partners through clean work and consistent delivery.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose section-padding dark-theme">
      <div className="container">
        <div className="main-header text-center">
          <h3>Why Choose Us?</h3>
          <div className="tex-bg">Your Vision, Our Build</div>
        </div>

        <div className="row">
          {data.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-img">
                    <i className={`icon ${item.icon}`}></i>
                    <h6>{item.frontText}</h6>
                  </div>
                  <div className="flip-card-back">
                    <p>{item.backText}</p>
                    <Link href="/about">
                      <a className="more custom-font mt-30">Learn More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .dark-theme {
          background-color: #1a1a1a;
          color: #fff;
        }

        .section-padding {
          padding: 100px 0;
        }

        .main-header {
          margin-bottom: 60px;
          position: relative;
        }

        .main-header h3 {
          font-size: 32px;
          font-weight: 700;
          color: #fff;
        }

        .tex-bg {
          color: rgba(255, 255, 255, 0.03);
          font-size: 60px;
          position: absolute;
          width: 100%;
          top: 10px;
          left: 0;
          text-align: center;
          pointer-events: none;
          z-index: 0;
        }

        .flip-card {
          background: transparent;
          perspective: 1000px;
          margin-bottom: 30px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 270px;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 10px;
          backface-visibility: hidden;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .flip-card-front {
          background-color: #2a2a2a;
          color: #fff;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }

        .flip-card-back {
          background-color: #111;
          color: #fff;
          transform: rotateY(180deg);
        }

        .icon {
          font-size: 36px;
          color: #c7a254;
          margin-bottom: 20px;
        }

        .more {
          margin-top: 20px;
          display: inline-block;
          color: #c7a254;
          text-decoration: underline;
        }

        h6 {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }

        p {
          font-size: 14px;
          color: #ccc;
        }

        @media (max-width: 767px) {
          .flip-card-inner {
            height: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
