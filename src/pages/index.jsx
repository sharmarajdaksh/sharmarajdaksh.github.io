import React from "react";
import Main from "../components/Main.component";
import Seo from "../components/SEO.component";

const IndexPage = () => {
  const seo = <Seo title={"Home"} />;
  const core = <Main />;

  return (
    <>
      {seo}
      {core}
    </>
  );
};

export default IndexPage;
