import { useAddress } from "@thirdweb-dev/react"
import { useMetamask } from "@thirdweb-dev/react"
//import { useLogout } from "@thirdweb-dev/react";
import PG from "./pg"
const style={
    ww : `text-center cursor-pointer`
}
const AUTHH =()=>{
    const connectMeta = useMetamask ();
    const addr = useAddress();
    const Au =()=> {
        return( 
           <div className={style.ww}> <div onClick={connectMeta}> Connect </div></div>
        )
    }
    console.log(addr)
    return <> {addr ? <PG/> : Au()}</>
}
export default AUTHH