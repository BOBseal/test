import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './comp/navbar'

const style = {
  wrapper: ` text-center align-center`,
  bluetext:`text-6xl pt-6 text-[#000099] transitions-all hover:text-[#4d4dff] font-style: italic font-bold `,
  footText:`text-2xl pl-40 text-left font-regular text-gray-600 `,
  underline:`hover:underline`
}
/*console.log(NavMenus)*/

export default function Home() {
  return (
 <div className={style.wrapper}>
      <Head>
        <title>BOBSEAL | Bishal Bhuyan</title>
        <meta name="description" content="Chuckes! I am a Danger" />
        <link rel="icon" href="/logo.ico" />
      </Head>
   
    
     <div className='bg-cyan-300 h-auto m-auto shadow-xl shadow-cyan-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>  <Navbar/></div>
     <div className={style.underline}><div className=' hover:scale-105 ease-in duration-200'>
   <div className={style.bluetext}>Welcome to BOB's Site
   </div></div> </div>
   <button className=' h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300 font-bold'> Click</button>
   <footer className='pt-8'> 
   <div className={style.footText}>
     This is just testing</div>
   </footer>
 </div>
  )
}
