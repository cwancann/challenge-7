import React from "react";
import NavbarMenu from "../Navbar";
import FooterMenu from "../Footer";


const Main = ({
  compHeader,
  compBest,
  compWhy,
  compBiru,
  compFaq,
  compTesti,
}) => {
  return (
    <div>
      <header>
        <NavbarMenu />
        {compHeader}
      </header>
      {compBest}
      {compWhy}
      {compTesti}
      {compBiru}
      {compFaq}
      <FooterMenu />
    </div>
  );
};

export default Main;
