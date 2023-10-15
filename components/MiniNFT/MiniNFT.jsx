import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

import Style from "./MiniNFT.module.css";
import images from "../../images";
import Link from "next/link";

const MiniNFT = ({ title, data }) => {
  const featureArray = data;

  console.log(data);

  return (
    <div>
      <div className={Style.MiniNFT_wrapper}>
        <div className={Style.MiniNFT_title}>{title}</div>
        <div className={Style.MiniNFT_nft_list}>
          {featureArray.map((el, i) => (
            <div className={Style.MiniNFT_nft_box}>
              <Image
                src={el}
                alt="NFT images"
                className={Style.MiniNFT_nft_img}
              />

              <div className={Style.MiniNFT_nft_info_name}>
                {" "}
                #1234 Corgi NFT{" "}
              </div>

              <div className={Style.MiniNFT_nft_info}>
                <div className={Style.MiniNFT_nft_info_author}>
                  <Link href="/author">
                    <Image
                      src={images.avatar1}
                      alt="NFT images"
                      className={Style.MiniNFT_nft_author_avatar}
                    />
                  </Link>
                  <div className={Style.MiniNFT_author_box}>
                    <div> Tác giả </div>
                    <div> Corgi Owner </div>
                  </div>
                </div>

                <div className={Style.MiniNFT_nft_info_price}>
                  <div> Giá </div>
                  <div> 1.2 ETH </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiniNFT;
