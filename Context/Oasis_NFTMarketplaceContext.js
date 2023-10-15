import React, { useState, useEffect, useContext } from "react";
import { ethers } from "ethers";
import Wenb3Modal from "web3modal";

import Router, { useRouter } from "next/router";
import { create as ifpsHttpClient } from "ipfs-http-client";
import axios from "axios";
import { useAddress } from "@thirdweb-dev/react";

// const client = ifpsHttpClient("https://ipfs.infura.io:5001/api/v0");
const projectID = "2VwSm0AO9E1bfqFBwycKxIj3gqu";
const projectSecretKey = "3c7502a12c80b3533d1d06156283424b";
const auth = `Basic ${Buffer.from(`${projectID}:${projectSecretKey}`).toString(
  "base64"
)}`;

const subdomain = "https://oasis-nft-marketplace.infura-ipfs.io";

const client = ifpsHttpClient({
  host: "infura-ipfs.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

try {
  const data = axios.get(
    "https://oasis-nft-marketplace.infura-ipfs.io/ipfs/QmYHCqAXmPGcYAiSrEn1Q9d5GY6uUrC3zLuTJAQso5JkK9"
  );
  console.log(data);
} catch (error) {
  console.log("bbbbb");
}

import {
  Oasis_NFTMarketplaceAddress,
  Oasis_NFTMarketplaceABI,
} from "./constants";
import { Oasis_APIContext } from "./Oasis_APIContext";

const fetchContract = (singerOrProvider) =>
  new ethers.Contract(
    Oasis_NFTMarketplaceAddress,
    Oasis_NFTMarketplaceABI,
    singerOrProvider
  );

const connectingWithSmartContract = async () => {
  try {
    const web3Modal = new Wenb3Modal();
    console.log(web3Modal);
    const connection = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);

    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    console.log(contract);
    return contract;
  } catch (error) {
    console.log("LOI");
    setAlertMessage("Kết nối contract thất bại");
    setOpenAlert(true);
  }
};

export const Oasis_NFTMarketplaceContext = React.createContext();

export const Oasis_NFTMarketplaceProvider = ({ children }) => {
  const { api_createNFT } = useContext(Oasis_APIContext);

  const address = useAddress();
  console.log(address);
  const [alertMessage, setAlertMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const router = useRouter();

  const uploadToIPFS = async (file) => {
    try {
      const added = await client.add({ content: file });
      const url = `${subdomain}/ipfs/${added.path}`;
      console.log(url);
      return url;
    } catch (error) {
      console.log("Loi upload IPFS");
      setAlertMessage("Upload ảnh thất bại");
      setOpenAlert(true);
    }
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      if (address) {
        console.log(url, formInputPrice, isReselling, id);

        const price = ethers.utils.parseUnits(
          formInputPrice.toString(),
          "ether"
        );
        console.log(price);
        const contract = await connectingWithSmartContract();
        console.log(contract);
        const listingPrice = await contract.getListingPrice();
        console.log(listingPrice);

        console.log(url, price, id);

        if (!isReselling) {
          const transaction = await contract.createToken(url, price, {
            value: listingPrice.toString(),
          });
          transaction.wait();
          console.log(transaction);
          const readEvent = await contract.on(
            "MarketItemCreated",
            (tokenId, seller, owner, price1, sold, event) => {
              let info = {
                tokenId: tokenId.toNumber(),
                seller: seller,
                owner: owner,
                price1: Number(price1),
                sold: sold,
                data: event,
              };
              console.log(formInputPrice);
              console.log(info);
              api_createNFT(info.tokenId, transaction.hash, formInputPrice);
            }
          );
        } else {
          const transaction = await contract.resellToken(id, price, {
            value: listingPrice.toString(),
          });
          console.log(transaction);
          transaction.wait();
        }
      } else {
        console.log("Bạn cần kết nối tới ví metamask");
        setAlertMessage("Bạn cần kết nối tới ví metamask");
        setOpenAlert(true);
      }
    } catch (error) {
      console.log(error);
      console.log("Loi create sale");
      setAlertMessage("Bán NFT thất bại");
      setOpenAlert(true);
    }
  };

  const createNFT = async (
    name,
    price,
    image,
    description,
    router,
    category,
    creator
  ) => {
    try {
      if (address) {
        if (!name || !description || !price || !image || !category) {
          setAlertMessage("Nhập thiếu thông tin");
          setOpenAlert(true);
          return console.log("Data is missing");
        }
        const data = JSON.stringify({
          name,
          description,
          image,
          category,
          creator,
        });

        try {
          const added = await client.add(data);
          const url = `${subdomain}/ipfs/${added.path}`;
          await createSale(url, price);
          // router.push("/search");
        } catch (error) {}
      } else {
        console.log("Bạn cần kết nối tới ví metamask");
        setAlertMessage("Bạn cần kết nối tới ví metamask");
        setOpenAlert(true);
      }
    } catch (error) {
      console.log("Loi tao NFT");
      setAlertMessage("Tạo NFT thất bại");
      setOpenAlert(true);
    }
  };

  const createReSetPrice = async (formInputPrice, id) => {
    try {
      if (address) {
        const price = ethers.utils.parseUnits(
          formInputPrice.toString(),
          "ether"
        );
        console.log(price);
        const contract = await connectingWithSmartContract();
        console.log(contract);
        const listingPrice = await contract.getListingPrice();
        console.log(listingPrice);

        const transaction = await contract.createToken(id, price, {
          value: listingPrice.toString(),
        });

        console.log(transaction);
        transaction.wait();
      } else {
        console.log("Bạn cần kết nối tới ví metamask");
        setAlertMessage("Bạn cần kết nối tới ví metamask");
        setOpenAlert(true);
      }
    } catch (error) {
      console.log("Loi set price");
      setAlertMessage("Đặt lại giá NFT thất bại");
      setOpenAlert(true);
    }
  };

  const fetchNFTs = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);
      const data = await contract.fetchMarketItem();
      console.log(data);

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            console.log(tokenId);

            const tokenURI = await contract.tokenURI(tokenId);
            console.log(tokenURI);

            const data = await axios.get(tokenURI);

            console.log(data);
            const name = data.data.name;
            const description = data.data.description;
            const image = data.data.image;
            const category = data.data.category;
            const creator = data.data.creator;

            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            console.log(price);

            return {
              tokenId: tokenId.toNumber(),
              price,
              name,
              description,
              image,
              owner,
              seller,
              category,
              creator,
              tokenURI,
            };
          }
        )
      );
      console.log(items);
      return items;
    } catch (error) {
      console.log("Loi fetch NFTs");
      setAlertMessage("Lấy dữ liệu NFT thất bại 01");
      setOpenAlert(true);
    }
  };

  const fetchMyNFTsOrListedNFTs = async (type) => {
    try {
      const contract = await connectingWithSmartContract();
      const data =
        type == "fetchItemsListed"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);

            console.log(tokenURI);

            const data = await axios.get(tokenURI);

            console.log(data);
            const name = data.data.name;
            const description = data.data.description;
            const image = data.data.image;
            const category = data.data.category;
            const creator = data.data.creator;

            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              tokenId: tokenId.toNumber(),
              price,
              name,
              description,
              image,
              owner,
              seller,
              category,
              creator,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("Loi fetch listed  NFTs");
      setAlertMessage("Lấy dữ liệu NFT thất bại 02");
      setOpenAlert(true);
    }
  };

  const buyNFT = async (nft, authorAddress) => {
    try {
      if (address) {
        const price = ethers.utils.parseUnits(nft.price.toString(), "ether");

        const contract = await connectingWithSmartContract();
        const transaction = await contract.createMarketSale(nft.tokenId, {
          value: price,
        });
        // const transaction = await contract.createMarketSale(nft.tokenId);
        await transaction.wait();
        console.log(transaction);
        router.push("/author?address=" + authorAddress);
      } else {
        console.log("Bạn cần kết nối tới ví metamask");
        setAlertMessage("Bạn cần kết nối tới ví metamask");
        setOpenAlert(true);
      }
    } catch (error) {
      console.log("Loi buy NFT");
      setAlertMessage("Mua NFT thất bại");
      setOpenAlert(true);
    }
  };
  return (
    <Oasis_NFTMarketplaceContext.Provider
      value={{
        uploadToIPFS,
        createNFT,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        createReSetPrice,
        alertMessage,
        setOpenAlert,
        openAlert,
      }}
    >
      {children}
    </Oasis_NFTMarketplaceContext.Provider>
  );
};
