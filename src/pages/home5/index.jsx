import React from "react";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";

import AboutUs6 from "../../components/About-Us6";
import WhyChooseUs from "../../components/Services3";
import Portfolio2 from "../../components/Portfolio2";

import Services5 from "../../components/Services5";
import Intro3 from "../../components/Intro3";

const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <Intro3 />

      <WhyChooseUs />
      <Portfolio2 />
      <AboutUs6 />
      <Video />
      <Services5 />
    </MainLayout>
  );
};

export default Home5;
