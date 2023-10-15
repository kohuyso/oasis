import React from "react";
import {
  NavBar,
  MiniNFT,
  CategoryCard,
  ArtistCard,
  Footer,
} from "@/components/componentsIndex";

import images from "@/images";
const Home = () => {
  const collectiablesArray = [
    images.NFT1,
    images.NFT2,
    images.NFT3,
    images.NFT4,
    images.NFT5,
    images.NFT6,
    images.NFT5,
    images.NFT6,
  ];
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "3rem" }}>
        <MiniNFT title={"NFT nổi bật"} data={collectiablesArray} />
      </div>
      <div style={{ marginTop: "3rem" }}>
        <CategoryCard />
      </div>
      <div style={{ marginTop: "3rem" }}>
        <ArtistCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
