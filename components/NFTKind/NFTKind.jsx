import React from "react";
import { useState } from "react";
import images from "@/images";

import Style from "./NFTKind.module.css";
import { ArtistCard, MiniNFT } from "../componentsIndex";

const NFTKind = ({ filter }) => {
  const possessArray = [
    images.NFT1,
    images.NFT2,
    images.NFT3,
    images.NFT4,
    images.NFT5,
    images.NFT6,
  ];

  const createdArray = [images.NFT1, images.NFT2, images.NFT3, images.NFT4];

  const likeArray = [images.NFT1, images.NFT2, images.NFT3];

  const [activeBtn, setActiveBtn] = useState(1);

  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    if (btnText == filter[0]) {
      setpossess(true);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(1);
    } else if (btnText == filter[1]) {
      setpossess(false);
      setCreated(true);
      setFollower(false);
      setFollowing(false);
      setLike(false);
      setActiveBtn(2);
    } else if (btnText == filter[2]) {
      setpossess(false);
      setCreated(false);
      setFollower(false);
      setFollowing(false);
      setLike(true);
      setActiveBtn(3);
    } else if (btnText == filter[3]) {
      setpossess(false);
      setCreated(false);
      setFollower(false);
      setFollowing(true);
      setLike(false);
      setActiveBtn(4);
    } else if (btnText == filter[4]) {
      setpossess(false);
      setCreated(false);
      setFollower(true);
      setFollowing(false);
      setLike(false);
      setActiveBtn(5);
    }
  };

  const [possess, setpossess] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div>
      <div className={Style.Kind}>
        <div className={Style.Kind_box}>
          <div className={Style.Kind_box_left}>
            <div className={Style.Kind_box_left_btn}>
              <button
                className={`${activeBtn == 1 ? Style.active : ""}`}
                onClick={(e) => openTab(e)}
              >
                {filter[0]}
              </button>
              <button
                className={`${activeBtn == 2 ? Style.active : ""}`}
                onClick={(e) => openTab(e)}
              >
                {filter[1]}
              </button>
              <button
                className={`${activeBtn == 3 ? Style.active : ""}`}
                onClick={(e) => openTab(e)}
              >
                {filter[2]}
              </button>
              <button
                className={`${activeBtn == 4 ? Style.active : ""}`}
                onClick={(e) => openTab(e)}
              >
                {filter[3]}
              </button>
              <button
                className={`${activeBtn == 5 ? Style.active : ""}`}
                onClick={(e) => openTab(e)}
              >
                {filter[4]}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={Style.list}>
        {possess && <MiniNFT title={"Kết quả tìm kiếm"} data={possessArray} />}
        {created && <MiniNFT title={"Kết quả tìm kiếm"} data={createdArray} />}
        {like && <MiniNFT title={"Kết quả tìm kiếm"} data={likeArray} />}
        {follower && <ArtistCard />}
        {following && <ArtistCard />}
      </div>
    </div>
  );
};

export default NFTKind;
