/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkThreeColumn from "../../components/Work-Three-Column";

const Portofolio = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Crafting Durable Structures",
          second: "with Precision and Purpose",
        }}
        content="We specialize in high-quality formwork, masonry, stucco systems, and cladding solutions. With a dedication to craftsmanship and detail, our portfolio reflects a commitment to structural integrity, timeless design, and reliable execution across residential and commercial projects."
      />

      <WorkThreeColumn />
    </MainLayout>
  );
};

export default Portofolio;
