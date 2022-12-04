import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TopNavbarLayout from '../layouts/TopNavbarLayout'
const style = {
  wrapper: ` text-center align-center`,
  bluetext:`text-6xl pt-6 text-[#000099] transitions-all hover:text-[#4d4dff] font-style: italic font-bold `,
  footText:`text-2xl pl-40 text-left font-semibold text-gray-600 `,
  underline:`hover:underline`
}
/*console.log(NavMenus)*/

export default function Home() {
  return (
 <div className={style.wrapper}> <div className={style.underline}>
   <div className={style.bluetext}>Welcome to BOB's Site
   </div></div>
   <footer className='pt-8'> <div className={style.footText}>
     This is just testing</div>
   </footer>
 </div>
  )
}
