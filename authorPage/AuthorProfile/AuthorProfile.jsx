import React, { useState } from "react";
import Image from "next/image";

import { FiCopy } from "react-icons/fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";

import Style from "./AuthorProfile.module.css";
import images from "@/images";
import { Button } from "@/components/componentsIndex";

const AuthorProfile = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };

  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };

  return (
    <div className={Style.AuthorProfile}>
      <div className={Style.AuthorProfile_box}>
        <div className={Style.AuthorProfile_box_img}>
          <Image
            src={images.NFT1}
            className={Style.AuthorProfile_box_img_img}
            alt="NFT IMAGES"
          />
        </div>

        <div className={Style.AuthorProfile_box_info}>
          <h2>Nhà sáng tạo </h2>

          <div>
            <input
              type="text"
              value="0x829BD824B03D092293333..A830"
              id="myInput"
              className={Style.AuthorProfile_box_info_address}
            />
            <FiCopy
              onClick={() => copyAddress()}
              className={Style.AuthorProfile_box_info_address_icon}
            />
          </div>

          <p>
            Nhà sáng tạo nội dung, tác phẩm nghệ thuật ứng dụng công nghệ
            blockchain
          </p>

          <div className={Style.AuthorProfile_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <Button btnName="Theo dõi" handleClick={() => {}} />
      </div>
    </div>
  );
};

export default AuthorProfile;
