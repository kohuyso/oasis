import React from "react";
import Style from "./CategoryCard.module.css";
import Image from "next/image";

import images from "../../images";

const CategoryCard = () => {
  const arrayNFT = ["Animal", "Game", "Music", "Film", "Painting", "Other"];
  return (
    <div className={Style.wrapper}>
      <div className={Style.title}>Các chủ đề nổi bật</div>
      <div className={Style.CategoryCard_list}>
        {arrayNFT.map((el, i) => (
          <div className={Style.CategoryCard_box}>
            <Image
              src={images.corgiNFT}
              alt="NFT images"
              className={Style.CategoryCard_box_big}
            />
            <div className={Style.CategoryCard_box_small}>
              <Image
                src={images.corgiNFT}
                alt="NFT images"
                className={Style.box_small_img}
              />
              <Image
                src={images.corgiNFT}
                alt="NFT images"
                className={Style.box_small_img}
              />
              <Image
                src={images.corgiNFT}
                alt="NFT images"
                className={Style.box_small_img}
              />
            </div>
            <div className={Style.CategoryCard_box_info}>
              <div className={Style.info_name}>{el}</div>
              <div className={Style.info_number}>Số lượng: 123</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
