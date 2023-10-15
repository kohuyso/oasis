import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

import Style from "./MintNFT.module.css";
import formStyle from "../accountPage/Form/Form.module.css";
import images from "@/images";
import { Button } from "@/components/componentsIndex";
import DropZone from "./DropZone/DropZone";

const MintNFT = () => {
  const [active, setActive] = useState(0);
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(0);

  const categoryArry = [
    {
      image: images.NFT1,
      category: "Fashion",
    },
    {
      image: images.NFT2,
      category: "Arts",
    },
    {
      image: images.NFT3,
      category: "Game",
    },
    {
      image: images.NFT4,
      category: "Animal",
    },
    {
      image: images.NFT5,
      category: "Other",
    },
  ];

  return (
    <div className={Style.MintNFT}>
      <DropZone
        title="JPG, PNG, WEBM , MAX 100MB"
        heading="Kéo và thả file"
        subHeading="hoặc chọn ảnh từ máy"
        itemName={itemName}
        description={description}
        category={category}
      />

      <div className={Style.MintNFT_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Tên NFT</label>
          <input
            type="text"
            placeholder="Tên NFT"
            className={formStyle.Form_box_input_userName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Mô tả</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="Mô tả NFT"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="name">Chủ đề</label>
          <p className={Style.MintNFT_box_input_para}>Chọn chủ đề cho NFT</p>

          <div className={Style.MintNFT_box_slider_div}>
            {categoryArry.map((el, i) => (
              <div
                className={`${Style.MintNFT_box_slider} ${
                  active == i + 1 ? Style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={Style.MintNFT_box_slider_box}>
                  <div className={Style.MintNFT_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="background image"
                      className={Style.MintNFT_box_slider_box_img_img}
                    />
                  </div>
                  <div className={Style.MintNFT_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p style={{ marginTop: "0.2rem", textAlign: "center" }}>
                  {" "}
                  {el.category}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.MintNFT_box_btn}>
          <Button
            btnName="Tạo NFT"
            handleClick={() => {}}
            classStyle={Style.MintNFT_box_btn_style}
          />
          <Button
            btnName="Xem trước"
            handleClick={() => {}}
            classStyle={Style.MintNFT_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default MintNFT;
