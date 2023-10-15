import { Footer, Header, MiniNFT } from "@/components/componentsIndex";
import { MainInfo, SubInfo } from "@/detailPage/componentIndex";
import React from "react";
import images from "@/images";

const detail = () => {
  const likeArray = [images.NFT1, images.NFT2, images.NFT3, images.NFT6];

  return (
    <div
      style={{
        backgroundColor: "rgb(250, 249, 246)",
        color: "#4c5773",
        paddingBottom: "3rem",
      }}
    >
      <Header />
      <MainInfo />
      <SubInfo />
      <MiniNFT title={"NFT nổi bật"} data={likeArray} />
      <Footer />
    </div>
  );
};

export default detail;
