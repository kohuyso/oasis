import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Search } from "@web3uikit/icons";
import { ConnectWallet } from "@thirdweb-dev/react";

import Tippy from "@tippyjs/react/headless";
import Style from "./Header.module.css";
import { FaBars } from "react-icons/fa";

import images from "../../images";
import NavBarMobile from "../NavBar/NavBarMobile/NavBarMobile";
import { useState } from "react";
const Header = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const openMobileNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };
  return (
    <div className={Style.wrapper}>
      {mobileNavbar && (
        <div className={Style.nav_bar_mobile}>
          <NavBarMobile handleClick={openMobileNavbar} />
        </div>
      )}
      <div className={Style.navbar}>
        <FaBars className={Style.barsIcon} onClick={() => openMobileNavbar()} />

        <Link href="/">
          <div className={Style.logo}>
            <Image src={images.logo} alt="Blur Logo" width="40" height="40" />

            <div
              style={{
                fontWeight: "800",
                marginLeft: "1rem",
                fontSize: "16px",
              }}
            >
              OASIS
            </div>
          </div>
        </Link>
        <div className={Style.nav}>
          <div className={Style.searchSection}>
            <div>
              <span>
                <Search />
              </span>
              <input
                placeholder="Tìm kiếm các NFT và chủ đề"
                disabled=""
                className={Style.inputField}
              />
            </div>
          </div>
          <div className={Style.nav_items}>
            <Tippy
              interactive
              render={(attrs) => (
                <div className={Style.tippyChild} tabIndex="-1" {...attrs}>
                  <Link href="/">
                    <button className={Style.button}>Tạo NFT</button>
                  </Link>
                  <Link href="/">
                    <button className={Style.button}>Bộ sưu tập</button>
                  </Link>
                  <Link href="/">
                    <button className={Style.button}>Tìm kiếm</button>
                  </Link>
                  <Link href="/">
                    <button className={Style.button}>Biến động ETH</button>
                  </Link>
                </div>
              )}
            >
              <div className={Style.link}>
                <p>KHÁM PHÁ</p>
              </div>
            </Tippy>

            <div className={Style.buttonWallet1}>
              <ConnectWallet
                theme="dark"
                btnTitle="Kết nối ví"
                className={Style.buttonWallet1}
                style={{ minWidth: "none" }}
              />
            </div>
            <Link href="/user/">
              <Image src={images.avatar1} className={Style.smallAvatar} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
