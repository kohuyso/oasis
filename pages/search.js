import Banner from "@/authorPage/Banner/Banner";
import { Footer, Header, NFTKind } from "@/components/componentsIndex";
import SearchBar from "@/searchPage/SearchBar/SearchBar";
import React from "react";

import images from "@/images";

const search = () => {
  return (
    <div style={{ backgroundColor: "rgb(250, 249, 246)" }}>
      <Header />
      <Banner bannerImage={images.backGround} />
      <SearchBar />
      <NFTKind filter={["Game", "Animal", "Fashion", "Art", "Other"]} />
      <Footer theme="dark" />
    </div>
  );
};

export default search;
