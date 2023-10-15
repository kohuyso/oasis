import React from "react";

import Style from "../styles/author.module.css";
import Banner from "@/authorPage/Banner/Banner";

import images from "@/images";
import AuthorProfile from "@/authorPage/AuthorProfile/AuthorProfile";
import { Footer, Header, NFTKind } from "@/components/componentsIndex";

const author = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "rgb(250, 249, 246)" }}>
      <Header />
      <div className={Style.author}>
        <Banner bannerImage={images.backGround} />
        <AuthorProfile />
        <NFTKind
          filter={["Sở hữu", "Sáng tác", "Thích", "Theo dõi bởi", "Theo dõi"]}
        />
      </div>
      <Footer theme="dark" />
    </div>
  );
};

export default author;
