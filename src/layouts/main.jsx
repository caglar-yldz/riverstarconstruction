/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const MainLayout = ({ children, logoClassText }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo21.svg");
        logo.style.width = "200px"; // büyütülmüş hali
      } else {
        navbar.classList.remove("nav-scroll");
        logo.setAttribute("src", "/assets/img/logo21.svg");
        logo.style.width = "200px"; // varsayılan hali
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Navbar
        navbarRef={navbarRef}
        logoRef={logoRef}
        logoClass={logoClassText}
      />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
