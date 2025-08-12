import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Services3 from "../../components/Services3";
import AboutIntro from "../../components/AboutIntro";
import ValuesGrid from "../../components/ValuesGrid";
import OurMission from "../../components/OurMission";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Who We Are"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Who We Are", url: "/about" },
        ]}
      />
      <AboutIntro />

      <ValuesGrid />

      <Services3 bigTitle grid />
      <OurMission />
    </MainLayout>
  );
};

export default About;
