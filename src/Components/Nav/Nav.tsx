import React, { useEffect, useState } from 'react'
import style from "./Nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faMessage, faAddressCard, faListCheck , faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
import image from "./pngegg (21).png";
export default function Nav() {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={style.divPa}>
      <div className={`${style.conteiner} ${scrollPosition>=1000 && style.condition}`} >
      <div className={style.profile}>
      <img className={ style.imgProfile} src={image} alt="Tomás" /> 
        <p>Full Stack Developer</p>
        </div>
        <div className={style.hamburger} onClick={():void=>setShowMenu(!showMenu)} >
          <p><FontAwesomeIcon icon={faBars} /></p>
        </div>
        <div className={style.options}>
               <Link 
          className={style.link}           
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}>
            About Me</Link>
                 <Link 
          className={style.link}           
          activeClass="active"
          to="myTech"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}>
            My Tech</Link>
                 <Link 
          className={style.link}           
          activeClass="active"
          to="myProjects"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}>
          My Projects</Link>
                 <Link 
          className={style.link}           
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={200}
          duration={1000}>
          Contact</Link>
         
        </div>
      </div>
  <div className={`${style.mobile_nav} ${showMenu && style.nav_open}`}>
        <div className={style.options_mobile}>
               <Link 
          className={style.link}           
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}>
            About Me</Link>
                 <Link 
          className={style.link}           
          activeClass="active"
          to="myTech"
          spy={true}
          smooth={true}
          offset={-200}
          duration={1000}>
            My Tech</Link>
                 <Link 
          className={style.link}           
          activeClass="active"
          to="myProjects"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}>
          My Projects</Link>
                 <Link 
          className={style.link}           
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={200}
          duration={1000}>
          Contact</Link>
          </div>
      </div>
      {showMenu?<div  onClick={():void=>setShowMenu(!showMenu)} className={style.background_nav} >
      </div>:<></>}
      </div>
  
  )
}

