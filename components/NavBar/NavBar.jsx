import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Search } from "@web3uikit/icons";
import { ConnectWallet } from "@thirdweb-dev/react";

import Tippy from "@tippyjs/react/headless";
import Style from "./NavBar.module.css";
import { FaBars } from "react-icons/fa";

import images from "../../images";
import NavBarMobile from "./NavBarMobile/NavBarMobile";

const NavBar = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [mobileNavbar, setMobileNavbar] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  const openMobileNavbar = () => {
    setMobileNavbar(!mobileNavbar);
  };

  return (
    <main className={Style.main}>
      <div className={Style.navbar}>
        <FaBars className={Style.barsIcon} onClick={() => openMobileNavbar()} />
        {mobileNavbar && (
          <div className={Style.nav_bar_mobile}>
            <NavBarMobile handleClick={openMobileNavbar} />
          </div>
        )}
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
                placeholder="Tìm kiếm NFT và chủ đề"
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
            <Link href="/account/">
              <Image src={images.avatar1} className={Style.smallAvatar} />
            </Link>
          </div>
        </div>
      </div>

      <section className={Style.heroSection}>
        <section className={Style.carousel}>
          <section className={Style.carousel_section}>
            <a href="https://ethereum.org/vi/" target="_blank">
              <Image
                src={images.IntroEThereum}
                alt="Ethereum_image"
                width=""
                height=""
                className={Style.carousel_img}
              />
              <Image
                src={images.logo1}
                alt=""
                width=""
                height=""
                className={Style.carousel_profile}
              />
            </a>
          </section>

          <section className={Style.carousel_section}>
            <a href="https://ethereum.org/en/web3/" target="_blank">
              <Image
                src={images.IntroWeb3}
                alt="Web3_image"
                width=""
                height=""
                className={Style.carousel_img}
              />
              <Image
                src={images.logo1}
                alt=""
                width=""
                height=""
                className={Style.carousel_profile}
              />
            </a>
          </section>
          <section className={Style.carousel_section}>
            <a
              href="https://about.meta.com/what-is-the-metaverse/"
              target="_blank"
            >
              <Image
                src={images.IntroMetaverse}
                alt="Metaverse_image"
                width=""
                height=""
                className={Style.carousel_img}
              />
              <Image
                src={images.logo1}
                alt=""
                width=""
                height=""
                className={Style.carousel_profile}
              />
            </a>
          </section>
          <section className={Style.carousel_section}>
            <a
              href="https://vi.wikipedia.org/wiki/Non-fungible_token"
              target="_blank"
            >
              <Image
                src={images.IntroNFT}
                alt="NFT_image"
                width=""
                height=""
                className={Style.carousel_img}
              />
              <Image
                src={images.logo1}
                alt=""
                width=""
                height=""
                className={Style.carousel_profile}
              />
            </a>
          </section>
          <section className={Style.carousel_section}>
            <a href="https://soliditylang.org/" target="_blank">
              <Image
                src={images.IntroSolidity}
                alt="Solidity_image"
                width=""
                height=""
                className={Style.carousel_img}
              />
              <Image
                src={images.logo1}
                alt=""
                width=""
                height=""
                className={Style.carousel_profile}
              />
            </a>
          </section>
        </section>
      </section>
    </main>
  );
};

export default NavBar;
