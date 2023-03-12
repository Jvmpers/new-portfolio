import React from "react";
import image_hedgehog from "./hedgehog_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";
import style from "./MyFooter.module.css";
const iconFaLinkedin: any = faLinkedin;
const iconFaGithub: any = faGithub;
export default function MyFooter() {
  return (
    <div className={style.conteiner}>
      <div>
        <img
          className={style.image_hedgehog}
          src={image_hedgehog}
          alt="hedgehog_image"
        />
      </div>
      <div className={style.div_contact}>

      </div>
      <div className={style.div_social} >
        <div className={style.first_line} >
        <a
            className={style.icon}
            target="_blank"
            href="https://www.linkedin.com/in/tomas-federico-pastore/"
          >
            <FontAwesomeIcon icon={iconFaLinkedin} />
          </a>
          <p className={style.title_contact}>LinkedIn</p>
          </div>
          <div   className={style.div_link} >
        
          
          <a
           className={style.link}
            target="_blank"
            href="https://www.linkedin.com/in/tomas-federico-pastore/"
          >
            https://www.linkedin.com/in/tomas-federico-pastore/
          </a>
          </div>
        <div  className={style.first_line}>
        <a
            className={style.icon}
            target="_blank"
            href="https://github.com/Jvmpers"
          >
            <FontAwesomeIcon icon={iconFaGithub} />
          </a>
          <p className={style.title_contact}>GitHub</p>

          </div>
          <div className={style.div_link} >
          <a
            className={style.link}
            target="_blank"
            href="https://github.com/Jvmpers"
          >
            https://github.com/Jvmpers
          </a>
        </div>
      </div>
    </div>
  );
}
