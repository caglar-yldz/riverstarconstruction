import React from "react";
import Team2 from "../../components/Team2";
import Video from "../../components/Video";
import MainLayout from "../../layouts/main";
import Blogs4 from "../../components/Blogs4";
import Intro4 from "../../components/Intro4";
import AboutUs6 from "../../components/About-Us6";
import WhyChooseUs from "../../components/Services3";
import Portfolio2 from "../../components/Portfolio2";
import Testimonials1 from "../../components/Testimonials1";
import IntroWithHorizontal2 from "../../components/Intro-with-horizontal2";
import Services5 from "../../components/Services5";

const Home5 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      {/*<Intro4 />    */}
      <IntroWithHorizontal2 />
      <WhyChooseUs />
      <Portfolio2 />
      <AboutUs6 />
      <Video />
      <Services5 />
    </MainLayout>
  );
};

export default Home5;
