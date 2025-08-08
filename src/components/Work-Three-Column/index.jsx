/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import portofolio from "../portofolio"; // JSON buradan geliyor

const WorkThreeColumn = () => {
  useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  const allCategories = ["formwork", "EIFS", "Masonry"];

  return (
    <section className="works filter-img three-col section-padding">
      <div className="container">
        {/* Filtre Butonları */}
        <div className="filtering text-center mb-30">
          <div className="filter">
            <span data-filter="*" className="active">
              All
            </span>
            {allCategories.map((cat) => (
              <span key={cat} data-filter={`.${cat}`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            ))}
          </div>
        </div>

        {/* Proje Kartları */}
        <div className="row gallery">
          {portofolio.map((project) => {
            const { id, type, img, src, title, categories } = project;
            const categoryClasses = categories ? categories.join(" ") : "";

            return (
              <div
                key={id}
                className={`col-lg-4 col-md-6 items ${categoryClasses}`}
              >
                <div className="item">
                  <div className="img">
                    {type === "video" ? (
                      <video
                        src={src}
                        controls
                        autoPlay
                        muted
                        loop
                        style={{ width: "100%", borderRadius: "8px" }}
                      />
                    ) : (
                      <img
                        src={img}
                        alt={title || "Untitled Project"}
                        style={{ width: "100%", borderRadius: "8px" }}
                      />
                    )}
                  </div>
                  <div className="cont">
                    <h5>
                      <Link href="/project-details">{title || ""}</Link>
                    </h5>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkThreeColumn;
