import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navbar from './comp/navbar'
//import AboutME from './comp/aboutme'
import Link from 'next/link'
//export const config = {amp:true}


const style = {
  wrapper: ` text-center align-center`,
  bluetext:`text-6xl pt-6 text-[#000099] transitions-all hover:text-[#4d4dff] font-style: italic font-bold `,
  footText:`text-2xl pl-20 pr-20 text-center font-regular text-gray-600 `,
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
   <div className='pb-8'><div className={style.bluetext}>Welcome to BOB's Site
   </div> </div> </div> </div>
   <div className ='grid grid-cols-2 lg:grid-cols-2 gap-8 flex justify-center'>
     <Link href={"./aboutme"}><button className='flex  w-5/6 h-auto m-auto rounded-xl shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300 font-bold'> ABOUT ME</button></Link>
  <Link href ={"./PlayGround/authMeta"}> <div className=' flex w-5/6 h-auto m-auto rounded-xl shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300 font-bold'> My Playground
  </div>  </Link> </div>
   <footer className='pt-8'> 
   <div className={style.footText}>
     Welcome to My Site!
     Created with NextJS Typescript And Tailwind CSS 
     </div> <div>This is My WEB DEVELOPEMENT PLAYGROUND </div><div>This is to check line change</div> 
   </footer>
 </div>
  )
}
