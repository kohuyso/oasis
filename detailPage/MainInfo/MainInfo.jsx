import React from "react";

import Style from "./MainInfo.module.css";
import Image from "next/image";
import images from "@/images";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaShapes, FaEthereum } from "react-icons/fa6";
import { Button } from "@/components/componentsIndex";
import { useState } from "react";

const MainInfo = () => {
  const [like, setLike] = useState(false);

  const likeNFT = () => {
    setLike(!like);
    console.log("AAAAAAA");
  };
  return (
    <div className={Style.wrapper}>
      <div className={Style.nft_info_name_mobile}>#259 Corgi NFT</div>

      <Image src={images.corgiNFT} alt="NFT images" className={Style.nft_img} />
      <div className={Style.nft_info}>
        <div className={Style.nft_info_name}>#259 Corgi NFT</div>
        <div className={Style.info_owner_wrapper}>
          <div className={Style.info_owner_box}>
            <Image
              src={images.avatar1}
              alt="creator images"
              className={Style.info_owner_avatar}
            />
            <div className={Style.info_owner_name}>
              <div style={{ fontWeight: "600" }}>Creator</div>
              <div>Ruong Hau</div>
            </div>
          </div>
          <div className={Style.info_owner_box}>
            <Image
              src={images.avatar2}
              alt="owner images"
              className={Style.info_owner_avatar}
            />
            <div className={Style.info_owner_name}>
              <div style={{ fontWeight: "600" }}>Owner</div>
              <div>Huyyyyy</div>
            </div>
          </div>
        </div>

        <div className={Style.nft_items_wrapper}>
          <div className={Style.nft_item_box}>
            {like ? (
              <AiFillHeart
                className={Style.nft_item_icon}
                style={{ color: "red" }}
                onClick={() => likeNFT()}
              />
            ) : (
              <AiOutlineHeart
                className={Style.nft_item_icon}
                onClick={() => likeNFT()}
              />
            )}
            <div>3 Likes</div>
          </div>
          <div className={Style.nft_item_box}>
            <FaShapes className={Style.nft_item_icon} />
            <div>Animal</div>
          </div>
          <div className={Style.nft_item_box}>
            <FaEthereum className={Style.nft_item_icon} />
            <div>Ethereum Chain</div>
          </div>
        </div>
        <div className={Style.nft_price_wrapper}>
          <div className={Style.nft_price_currentPrice}>
            <div> Giá hiện tại</div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div> 1.2 ETH</div>
              <FaEthereum className={Style.unit_icon} />
            </div>
            <div> (1898,77 $)</div>
          </div>
          <div className={Style.nft_price_changePrice}>
            <div>Giá cao nhất: 1.5 ETH</div>
            <div>Giá thấp nhất: 0.8 ETH</div>
          </div>
        </div>

        <Button btnName="Mua" handleClick={() => {}} classButton="buyButton" />
      </div>
    </div>
  );
};

export default MainInfo;
