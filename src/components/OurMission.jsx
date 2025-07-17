import React, { useEffect, useRef, useState } from "react";

const OurMission = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      className={`our-mission section-padding ${isVisible ? "show" : ""}`}
      ref={sectionRef}
    >
      <div className="background-pattern" />

      <div className="container">
        <div className="row">
          <div className="col-lg-10 content">
            <h2 className="title">OUR MISSION</h2>
            <p className="text">
              Our mission is to build long-term partnerships by delivering{" "}
              <span className="highlight">reliable</span>,{" "}
              <span className="highlight">high-quality</span>, and{" "}
              <span className="highlight">cost-effective</span> solutions in
              every project.
            </p>
            <p className="text">
              We are committed to exceeding expectations through{" "}
              <span className="highlight">safe</span>,{" "}
              <span className="highlight">transparent</span>, and{" "}
              <span className="highlight">detail-oriented</span> execution on
              site.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          position: relative;
          padding: 120px 0;
          overflow: hidden;
        }

        .background-pattern {
          position: absolute;
          top: -50px;
          left: -100px;
          width: 600px;
          height: 600px;
          background-image: url("/assets/patterns/blueprint-grid.svg");
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.05;
          pointer-events: none;
          z-index: 0;
          transform: rotate(12deg);
        }

        .container {
          position: relative;
          z-index: 2;
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .title {
          color: #c7a254;
          font-size: 32px;
          margin-bottom: 40px;
        }

        .text {
          font-size: 18px;
          color: #ccc;
          line-height: 1.8;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .highlight {
          color: #fff;
          font-weight: 600;
        }

        .show .text {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
          .title {
            font-size: 28px;
          }

          .text {
            font-size: 16px;
          }

          .background-pattern {
            width: 400px;
            height: 400px;
            top: -30px;
            left: -60px;
          }
        }
      `}</style>
    </section>
  );
};

export default OurMission;
