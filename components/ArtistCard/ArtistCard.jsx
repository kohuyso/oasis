import React from "react";
import Style from "./ArtistCard.module.css";
import Image from "next/image";

import images from "../../images";

const ArtistCard = () => {
  const arrayArtist = [
    "User1",
    "User2",
    "User3",
    "User4",
    "User5",
    "User6",
    "User7",
    "User8",
    "User9",
    "User10",
  ];
  return (
    <div className={Style.ArtistCard_wrapper}>
      <div className={Style.ArtistCard_title}>Các chủ đề nổi bật</div>
      <div className={Style.ArtistCard_list}>
        {arrayArtist.map((el, i) => (
          <div className={Style.ArtistCard_box}>
            <Image
              src={images.corgiNFT}
              alt="NFT images"
              className={Style.ArtistCard_box_img}
            />
            <div className={Style.ArtistCard_bug}>
              <Image
                src={images.avatar1}
                alt="NFT images"
                className={Style.ArtistCard_box_avatar}
              />
              <div className={Style.ArtistCard_box_infor}>
                <div className={Style.ArtistCard_box_infor_name}> {el} </div>
                <div className={Style.ArtistCard_box_infor_number}>
                  {" "}
                  23 NFTs{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistCard;
