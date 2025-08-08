// pages/what-we-do.tsx
import React from "react";
import ConcreteFormworkCard from "../components/ConcreteFormworkCard";
import MasonryCard from "../components/MasonryCard";
import EIFSCard from "../components/EIFS";

import MainLayout from "../layouts/main";
import PageHeader from "../components/Page-header";
import WorkHeader from "../../src/components/Work-header";

const WhatWeDo = () => {
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: "Complete Building ",
          second: "Envelope Solutions",
        }}
        content="From structural foundations to exterior finishes, we provide comprehensive subcontracting services in formwork, masonry, and EIFS applications. Our work reflects precision, safety, and long-term performance across all project types."
      />
      <ConcreteFormworkCard />
      <MasonryCard />
      <EIFSCard />
    </MainLayout>
  );
};

export default WhatWeDo;
