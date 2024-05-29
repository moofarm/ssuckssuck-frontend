import { Header } from "./Header";
import { Footer } from "./Footer";
import React, { useEffect } from "react";
import { useSearchContext } from "../context/PageProvider";
import SearchContainer from "../components/SearchContainer";

const PageLayout = ({ page }) => {
  const { isOpenSearch } = useSearchContext();

  useEffect(() => {
    if (isOpenSearch) document.getElementsByTagName("html")[0].style.overflow = "hidden";
    else document.getElementsByTagName("html")[0].style.overflow = "auto";
  }, [isOpenSearch]);

  return (
    <React.Fragment>
      <Header />
      <div className="page">{page}</div>
      <Footer />
      {isOpenSearch && <SearchContainer />}
    </React.Fragment>
  );
};

export default PageLayout;
