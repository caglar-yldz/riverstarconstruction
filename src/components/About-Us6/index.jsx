/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
const SimpleCrane = () => {
  return (
    <div className="simple-crane">
      <div className="vertical"></div>
      <div className="horizontal">
        <div className="left-arm"></div>
        <div className="right-arm"></div>

        {/* İp */}
        <div className="rope"></div>
      </div>

      <style jsx>{`
        .simple-crane {
          position: relative;
          width: 110px;
          height: 190px;
          filter: drop-shadow(0 0 6px rgba(199, 162, 84, 0.7));
          transform-origin: 50% 10%;
          margin-left: -15px;
        }

        .vertical {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 100%;
          background: linear-gradient(180deg, #c7a254, #a5852b);
          border-radius: 3px;
          box-shadow: 0 0 8px #c7a254;
          animation: pulse 5s ease-in-out infinite;
          z-index: 10;
        }

        .horizontal {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(calc(-50% - 20px));
          display: flex;
          align-items: flex-start;
          height: 10px;
          width: 160px;
          position: relative;
          z-index: 20;
        }

        .left-arm {
          width: 120px;
          height: 10px;
          background: linear-gradient(90deg, #c7a254, #a5852b);
          border-radius: 5px 0 0 5px;
          box-shadow: 0 0 8px #c7a254;
        }

        .right-arm {
          width: 20px;
          height: 30px;
          background: linear-gradient(180deg, #c7a254, #a5852b);
          border-radius: 3px;
          margin-left: 4px;
          box-shadow: 0 0 8px #c7a254;
        }

        .rope {
          position: absolute;
          top: 10px;
          left: 10px;
          width: 2px;
          height: 60px;
          background: #c7a254;
          border-radius: 1px;
          box-shadow: 0 0 6px #c7a254;
          animation: swing 3s ease-in-out infinite;
          transform-origin: top center;
          z-index: 30;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
            transform: scaleY(1);
          }
          50% {
            opacity: 1;
            transform: scaleY(1.05);
          }
        }

        @keyframes swing {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }
      `}</style>
    </div>
  );
};

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
                At River Star Construction, we bring years of hands-on
                experience to every stage of construction — from the ground up
                to the final finish. Our expertise includes masonry, formwork,
                and exterior finishing systems. With a reliable, skilled crew,
                we take full responsibility for the entire structure — not just
                one part. What we promise is what we deliver: clean, complete,
                and always on time.
              </p>
              <Link href="/about">
                <a className="btn-curve btn-bord btn-lit mt-30">
                  <span>Read More</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7  d-flex align-items-center justify-content-center">
            <div className="col-lg-5 visual-block">
              <div className="scene">
                {/* Tam bitmiş gökdelen */}
                <div className="skyscraper full">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="window"></div>
                  ))}
                </div>

                {/* Yarım bitmiş gökdelen */}
                <div className="skyscraper half">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="window"></div>
                  ))}
                  <div className="unfinished-top"></div>
                </div>

                {/* Yeni vinç */}
                <SimpleCrane />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-intro {
          background-color: #1a1a1a;
          color: #fff;
        }
        .section-padding {
          padding: 120px 0;
        }
        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          align-items: center; /* flex-end'den center yaptım */
        }
        .text-block {
          padding-right: 40px;
        }
        h2 {
          font-size: 32px;
          font-weight: 600;
          line-height: 1.5;
          margin-bottom: 30px;
          color: #fff;
        }
        .highlight {
          color: #c7a254;
        }
        .text {
          font-size: 18px;
          color: #ccc;
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .emphasize {
          font-size: 20px;
        }
        .bold {
          font-weight: 700;
          color: #fff;
        }

        .visual-block {
          display: flex;
          align-items: flex-start; /* üstten hizaladım */
          justify-content: center;
          gap: 25px;
          height: 190px; /* vinç yüksekliğiyle uyumlu */
          padding-left: 10px;
        }

        .scene {
          display: flex;
          align-items: flex-end;
          gap: 25px;
        }

        .skyscraper.full {
          background: linear-gradient(180deg, #c7a254 0%, #a5852b 100%);
          width: 50px;
          height: 180px;
          border-radius: 4px 4px 0 0;
          box-shadow: 0 0 8px #c7a254;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding: 8px 6px;
          justify-content: center;
          gap: 4px;
        }

        .skyscraper.half {
          background: linear-gradient(180deg, #a5852b 0%, #6b5816 100%);
          width: 50px;
          height: 110px;
          border-radius: 4px 4px 0 0;
          box-shadow: 0 0 8px #a5852b;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          padding: 8px 6px;
          justify-content: center;
          gap: 4px;
        }

        .unfinished-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 25px;
          border-top: 4px solid #c7a254;
          border-left: 4px solid #c7a254;
          border-right: 4px solid #c7a254;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 4px,
            #c7a254 4px,
            #c7a254 8px
          );
          border-radius: 4px 4px 0 0;
          box-shadow: 0 0 6px #c7a254;
          z-index: 10;
        }

        .window {
          width: 8px;
          height: 14px;
          background-color: #fff;
          opacity: 0.7;
          border-radius: 1px;
          box-shadow: 0 0 5px rgba(255 255 255 / 0.6);
          animation: blink 3s infinite;
        }

        .window:nth-child(even) {
          animation-delay: 1.5s;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs6;
