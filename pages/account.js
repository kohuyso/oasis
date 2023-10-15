import React, { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import Style from "../styles/account.module.css";
import images from "@/images";
import Form from "@/accountPage/Form/Form";
import { Footer, Header } from "@/components/componentsIndex";
const account = () => {
  const [fileUrl, setFileUrl] = useState(images.avatar1);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = new FileReader();
    file.onload = () => {
      console.log(file.result);
      setFileUrl(file.result);
    };
    file.readAsDataURL(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });

  return (
    <div style={{ backgroundColor: "rgb(250, 249, 246)" }}>
      <Header />
      <div className={Style.account}>
        <div className={Style.account_info}>
          <h1>Thông tin tài khoản</h1>
        </div>

        <div className={Style.account_box}>
          <div className={Style.account_box_img} {...getRootProps()}>
            <input {...getInputProps()} />
            <Image
              src={fileUrl}
              alt="account upload"
              width={150}
              height={150}
              className={Style.account_box_img_img}
            />
            <p className={Style.account_box_img_para}>Thay đổi ảnh đại diện</p>
          </div>
          <div className={Style.account_box_from}>
            <Form />
          </div>
        </div>
      </div>
      <Footer theme="dark" />
    </div>
  );
};

export default account;
