import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Account from "./Account";
import { useDispatch } from "react-redux";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
// import { browserHistory } from 'react-router';
// import RLogin, { RLoginButton } from '@rsksmart/rlogin'
//import theme from "./theme";
// import WalletConnectProvider from '@walletconnect/web3-provider'
import Layout from "./Layout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";
import { CHANGE_WALLET, CHANGE_PROTOCOL, CHANGE_CHAIN } from "../actionTypes";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";
import { CircularProgress, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

const Header = ({ history, openMenu, updateMenu, allowMenu }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isChecking, setIsChecking] = useState(false);
  //const [headerTitle, setHeaderTitle] = useState(location.pathname)
  //const [loading, setLoading] = useState(false);
  //const [provider, setProvider] = useState(null)
  //const [account, setAccount] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(
    () => {
      //console.log(headerTitle, 'account---', location.pathname.split('/')[2])
      if (location.pathname.split("/")[1] !== "portfolio") {
        return;
      }
      setIsChecking(true);
      processWallet();
    },
    [
      /*Header*/
    ]
  );

  const processWallet = async () => {
    const walletAddr = location.pathname.split("/")[2];
    console.log("Header.js", walletAddr?.length);
    if (!ethers.utils.isAddress(walletAddr)) {
      navigate("/wallet");
      setIsChecking(false);
      return;
    }
    const rpcUrls = [
      "https://bsc-dataseed.binance.org/",
      "https://rpc.ftm.tools/",
      "https://api.avax.network/ext/bc/C/rpc"
    ];
    for (const rpcUrl of rpcUrls) {
      const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
      const code = await provider.getCode(walletAddr);
      if (code !== "0x") {
        navigate("/wallet");
        setIsChecking(false);
        toast.error("Defireturn doesn't support Contract Address");
        return;
      }
    }
    console.log("Hello");
    dispatch({ type: CHANGE_WALLET, payload: walletAddr });
    dispatch({ type: CHANGE_CHAIN, payload: location.pathname.split("/")[3] });
    dispatch({
      type: CHANGE_PROTOCOL,
      payload: location.pathname.split("/")[4],
    });
    setIsChecking(false);
  };

  return (
    <div className="d-flex header-div">
      {isChecking ? (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "#10003044",
            zIndex: 100000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {/* <div id="loader"></div> */}
          <CircularProgress size={50} />
          <Typography sx={{ color: "white", mt: 2 }} variant="h6">
            Checking Wallet...
          </Typography>
        </div>
      ) : null}
      {/* <Account/> */}
      <ChakraProvider>
        <Layout>
          <div className="d-flex header-title-div">
            <div
              onClick={() => {
                updateMenu();
                allowMenu(true);
              }}
              className="d-block d-lg-none burger col-xs-3 col-sm-1 col-md-1 col-lg-0"
            >
              <span className="burger__span"></span>
              <span className="burger__span"></span>
              <span className="burger__span"></span>
            </div>
            <h3 className="header-title text-left col-xs-9 col-sm-4 col-md-4 col-lg-5">
              {t(
                location.pathname.split("/")[1] !== ""
                  ? location.pathname.split("/")[1].charAt(0).toUpperCase() +
                      location.pathname.split("/")[1].slice(1)
                  : "Wallet"
              )}
            </h3>

            <div className="wallet-button col-xs-0 col-sm-7 col-md-7 col-lg-7">
              <ConnectButton handleOpenModal={() => {}} />
              <AccountModal isOpen={isOpen} onClose={onClose} />
            </div>
          </div>
        </Layout>
      </ChakraProvider>
    </div>
  );
};
export default Header;
