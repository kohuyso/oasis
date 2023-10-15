import React from "react";
import Style from "./SubInfo.module.css";
import { BiDetail } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { LineChart } from "../componentIndex";

const SubInfo = () => {
  return (
    <div className={Style.wrapper}>
      <div className={Style.detail}>
        <div className={Style.detail_top}>
          <MdOutlineDescription
            style={{ marginTop: "2.5px", marginRight: "5px" }}
          />
          <div style={{ fontWeight: "600" }}> Mô tả </div>
        </div>
        <div className={Style.detail_bot}>
          <div className={Style.detail_bot_item}>
            <div>
              Chó Corgi Wales (tiếng Anh: Welsh Corgi), đôi khi được gọi vắn tắt
              là chó Corgi, là một loại chó chăn gia súc nhỏ có nguồn gốc ở xứ
              Wales thuộc Vương quốc Anh. Tên của chúng bắt nguồn từ hai từ
              Wales "cor" và "gi", có nghĩa là lùn và chó, có thể hiểu là "chú
              chó lùn"
            </div>
          </div>
        </div>
        <div className={Style.detail_top}>
          <BiDetail style={{ marginTop: "2.5px", marginRight: "5px" }} />
          <div style={{ fontWeight: "600" }}> Chi tiết </div>
        </div>
        <div className={Style.detail_bot}>
          <div className={Style.detail_bot_item}>
            <div>Contract address</div>
            <a
              href="https://etherscan.io/address/0x971868dae2d081861abb2ea2cdb12d206dc85a72"
              target="_blank"
            >
              0x9718...5a72
            </a>
          </div>
          <div className={Style.detail_bot_item}>
            <div>Token ID</div>
            <a
              href="https://ipfs.io/ipfs/bafybeie3wguurswmnuzvwah45p62q3lewpyjmoggkv5wbuyzl454s6obcu/259"
              target="_blank"
            >
              #259
            </a>
          </div>
          <div className={Style.detail_bot_item}>
            <div>Chain</div>
            <a
              href="https://ipfs.io/ipfs/bafybeie3wguurswmnuzvwah45p62q3lewpyjmoggkv5wbuyzl454s6obcu/259"
              target="_blank"
            >
              Ethereum
            </a>
          </div>
          <div className={Style.detail_bot_item}>
            <div>Chuẩn Token</div>
            <a
              href="https://ipfs.io/ipfs/bafybeie3wguurswmnuzvwah45p62q3lewpyjmoggkv5wbuyzl454s6obcu/259"
              target="_blank"
            >
              ERC 721
            </a>
          </div>
        </div>
      </div>
      <div className={Style.chart}>
        <LineChart />
      </div>
    </div>
  );
};

export default SubInfo;
