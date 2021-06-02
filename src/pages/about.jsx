import React from "react";
import About from "../components/About.component";
import Seo from "../components/SEO.component";

const AboutPage = () => {
  const seo = <Seo title={"About"} slug={"/about"} />;

  const core = <About />;

  return (
    <>
      {seo}
      {core}
    </>
  );
};

export default AboutPage;
