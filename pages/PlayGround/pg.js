import React, { useState, useEffect } from 'react'
import { useAmp } from 'next/amp'
import { useDisconnect } from "@thirdweb-dev/react"
//import claimNFT from './mintnft'
import { ACi } from '../_app'
const style ={
    wr: `text-center align-center cursor-pointer`
}

export const config = {amp:true}
const PG = () => {
    const isAmp = useAmp();
    const lgout = useDisconnect();
  //  const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    //const [navBg, setNavBg] = useState('#ecf0f3');
    //const [linkColor, setLinkColor] = useState('#1f2937'); 
    const handleNav = () => {
    setNav(!nav);
    };
  
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);

    console.log(ACi)
    return(

<div className={style.wr}> <div onClick={lgout}> LogOUT  </div> 
{/*<Claim/>*/}
</div>

    )
};
export default PG