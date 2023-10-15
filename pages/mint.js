import React from "react";

import Style from "../styles/mint.module.css";
import MintNFT from "@/mintPage/MintNFT";
import { Footer, Header } from "@/components/componentsIndex";

const mint = () => {
  return (
    <div style={{ backgroundColor: "rgb(250, 249, 246)" }}>
      <Header />
      <div className={Style.mint}>
        <div className={Style.mint_box}>
          <div className={Style.mint_box_heading}>
            <h1>Tạo NFT</h1>
          </div>

          <div className={Style.mint_box_title}>
            <h2>Chọn ảnh để tạo NFT</h2>
          </div>

          <div className={Style.mint_box_form}>
            <MintNFT />
          </div>
        </div>
      </div>
      <Footer theme="dark" />
    </div>
  );
};

export default mint;
