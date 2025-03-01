import React from "react";
import Seo from "../components/SEO.component";
import Books from "../components/Books.component";

const BooksPage = () => {
  const seo = <Seo title={"Reading"} slug={"/reading"} />;

  const core = <Books />;

  return (
    <>
      {seo}
      {core}
    </>
  );
};

export default BooksPage;
