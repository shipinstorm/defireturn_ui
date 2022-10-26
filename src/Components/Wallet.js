import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
import { connect, useSelector, useDispatch } from "react-redux";
import { ChakraProvider, useDisclosure } from "@chakra-ui/react";
//import { Link } from "react-router-dom";
//import axios from "axios";
import { ethers } from 'ethers'
import { CHANGE_WALLET, SELECT_MENU } from "../actionTypes";
import "./Wallet.css";
import { useTranslation } from "react-i18next";

//import Layout from "./Layout";
import ConnectButton from "./ConnectButton";
import AccountModal from "./AccountModal";

const Wallet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [getInputWallet, setInputWallet] = useState("");
  const walletAddress = useSelector((state) => state.walletAddress);
  const [noValid, setNoValid] = useState(false);
  const [contractAddress , setContractAddress] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();



  /*useEffect(() => {
    getChainList();
  }, []);*/
  useEffect(() => {
    setInputWallet(walletAddress.address);
  }, [walletAddress]);

  const changeWalletAddress = (e) => {
    setNoValid(false)
    setContractAddress(false)
    setInputWallet(e.target.value);
  };
  const connectWallet = () => {
    connectWallet_withoutMetamask();
    /*
            navigate(`/portfolio/${getInputWallet}`);
            dispatch({
                type: CHANGE_WALLET,
                payload: getInputWallet
            });
            */
  };
  const connectWallet_withoutMetamask = async () => {
    if (getInputWallet !== "") {
      const ok = ethers.utils.isAddress(getInputWallet)
      //console.log({ok})
      if (!ok) {
        setNoValid(true)
        return
      }
      const rpcUrls = [
        "https://bsc-dataseed.binance.org/",
        "https://rpc.ftm.tools/",
        "https://api.avax.network/ext/bc/C/rpc"
      ];
      for (const rpcUrl of rpcUrls) {
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const code = await provider.getCode(getInputWallet);
        if (code !== "0x") {
          setContractAddress(true)
          return;
        }
      }
      navigate(`/portfolio/${getInputWallet}`);
      dispatch({
        type: CHANGE_WALLET,
        payload: getInputWallet
      });
      dispatch({
        type: SELECT_MENU,
        payload: 1
      });
    }
  };
  const enterWallet = (e) => {
    if (e.key === "Enter") connectWallet_withoutMetamask();
  };/*
  const getChainList = async () => {
    const chainList = await axios.get(
      "https://api.debank.com/portfolio/project_list?user_addr=0x3ddfa8ec3052539b6c9549f12cea2c295cff5296"
    );
    //console.log(chainList.data, "chainList----");
  };*/
  return (
    <div className="main-board">
      <ChakraProvider >

        <ConnectButton handleOpenModal={() => { }} />
        <AccountModal isOpen={isOpen} onClose={onClose} />

      </ChakraProvider>
      <div className="sub-main-board-w m-top">
        <div className="sub-main-board-h">
          <h4 className="wallet-title">
            {
              (() => {
                const str = t('DeFiInvestQuestion');
                const ind = str.indexOf('DeFi');
                return (
                  <>
                  {str.slice(0, ind)}
                  <span className="wallet-sub-div">DeFi</span>
                  {str.slice(ind + 4, str.length)}
                  </>
                );
              })()
            }
          </h4>
          <input
            className="wallet-input-1 form-control col-lg-6 col-md-12 col-xs-12"
            placeholder={t('WalletInputPlaceholder')}
            onChange={(val) => changeWalletAddress(val)}
            onKeyUp={(e) => enterWallet(e)}
            value={getInputWallet}
          />
          {noValid ? (<p style={{ color: 'red' }}>Please enter a valid wallet address</p>) : <></>}
          {contractAddress ? (<p style={{ color: 'red' }}>This is contract address</p>) : <></>}
          <div
            className="btn wallet-connect"
            onClick={() => connectWallet()}
          >
            {t('ShowBtnTxt')}
          </div>
          <div className="wallet-sup-title">
            <span>{t('SupportText')}</span>
            <div className="inline-pos">
              <img className="supp-img" src={`${process.env.PUBLIC_URL}/assets/images/eth-chain.png`} alt="" />
              <img className="supp-img" src={`${process.env.PUBLIC_URL}/assets/images/bnb-chain.png`} alt="" />
              <img className="supp-img" src={`${process.env.PUBLIC_URL}/assets/images/avalanche-chain.png`} alt="" />
              <img className="supp-img" src={`${process.env.PUBLIC_URL}/assets/images/polygon-chain.png`} alt="" />
              <img className="supp-img" src={`${process.env.PUBLIC_URL}/assets/images/fantom-chain.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export default Wallet
const mapStateToProps = (state) => ({
  portfolio_data: state.portfolioData,
  wallet_address: state.walletAddress,
});

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(Wallet);
