import React from "react";

import { AiOutlineClose } from "react-icons/ai";
import { ConnectWallet } from "@thirdweb-dev/react";
import Style from "./NavBarMobile.module.css";

import Image from "next/image";
import Link from "next/link";
import images from "@/images";
import { Button } from "@/components/componentsIndex";

const NavBarMobile = ({ handleClick }) => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.top}>
        <AiOutlineClose
          className={Style.closeIcon}
          onClick={() => handleClick()}
        />
        <Link href="/">
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="Blur Logo"
              className={Style.logo_img}
            />

            <div
              style={{
                fontWeight: "800",
                fontSize: "21px",
              }}
            >
              OASIS
            </div>
          </div>
        </Link>
        <Link href="/account/">
          <Image src={images.avatar1} className={Style.smallAvatar} />
        </Link>
      </div>
      <div className={Style.nav_items}>
        <Link href="/">
          <Button
            className={Style.item}
            btnName="Tạo NFT"
            classButton="buyButton"
          />
        </Link>
        <Link href="/">
          <Button
            className={Style.item}
            btnName="Bộ sưu tập"
            classButton="buyButton"
          />
        </Link>
        <Link href="/">
          <Button
            className={Style.item}
            btnName="Tìm kiếm"
            classButton="buyButton"
          />
        </Link>
        <Link href="/">
          <Button
            className={Style.item}
            btnName="Dự đoán biến động ETH"
            classButton="buyButton"
          />
        </Link>
      </div>
      <div className={Style.buttonWallet1}>
        <ConnectWallet
          btnTitle="Kết nối ví"
          className={Style.buttonWallet1}
          style={{ minWidth: "none" }}
        />
      </div>
    </div>
  );
};

export default NavBarMobile;
