import {useAddress , useMetamask} from '@thirdweb-dev/react';
//import React, { useState, useEffect } from 'react';
const style = {
    cWButton:`rounded-lg border border-black px-20 py-7 trasnition-all hover:bg-[#96ff48] hover:text-[#2d319f]`}

    export default function ground0 () {
        const connectWithMetaMask = useMetamask();
        const address = useAddress ();
    
    console.log(address)
        const Auth =()=> {
            return (
                <div className='flex h-screen items-center justify-center'> <button onClick={connectWithMetamask} className = {style.cWButton}> Connect</button></div>
            )
        }


}

