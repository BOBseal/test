import React, { useState, useEffect } from 'react'
import { useWeb3 } from "@3rdweb/hooks"
//import { ThirdwebProvider } from '@thirdweb-dev/react';


const supportedChainIds = [157];
const connectors ={
  injected:{}
}

const groundO =()=>{
  
  const {address,connectWallet } = useWeb3();
  const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleShadow = () => {
        };
        window.addEventListener('scroll', handleShadow);
      }, []);
      return(<div onClick={()=>connectWallet("injected")}>Connect Wallet</div>
  )
  };
  export default groundO