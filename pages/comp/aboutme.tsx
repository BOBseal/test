import React, { useState, useEffect } from 'react'

const AboutME = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937'); 
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
    return(
<div>I am a SEXY LAD</div>
    )
};
export default AboutME
