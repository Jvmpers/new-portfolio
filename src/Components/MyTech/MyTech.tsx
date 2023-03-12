import React, { useState } from "react";
import style from "./MyTech.module.css";
import json from "./techs";
import icons from "./icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";
export default function MyTech() {
  const [languages, setLanguages] = useState<Boolean>(false)
  const [technologies, setTechnologies] = useState<Boolean>(false)
  
  return (
    <section id="myTech" className={style.sectionMyTech}>
            <div className={style.techs}>
      <h2 className={style.titleMyTech}>My Tech</h2>
        <div className={style.tech}>
          <h3   className={style.titleTech}>Languages</h3> 
          <FontAwesomeIcon  onClick={()=>setLanguages(!languages)} className={`${style.angle} ${languages ? style.up : style.down}`} icon={faAngleDown} />
          <div className={`${style.listTechs} ${languages && style.show_lang}`} >
            {json.Languages.map((e, i) => {
              return (
                <div className={style.conteiner_tech} >
                <div className={style.text} key={i}>
                  <p className={style.name}>{e.name}</p>
                  <p className={style.experience}>{e.experience}</p>
                </div>
                <div className={style.conteiner_icon}>
                <a href={e.link}   target="_blank"><img className={style.icon} src={e.icon} alt={e.name}></img></a>
                 </div>
                 </div>
              );
            })}
          </div>
        </div>
        <div className={style.tech}>
          <h3 className={style.titleTech}>Technologies</h3>
          <FontAwesomeIcon  onClick={()=>setTechnologies(!technologies)} className={`${style.angle} ${technologies ? style.up : style.down}`} icon={faAngleDown} />
          
          <div className={`${style.listTechs} ${technologies && style.show_tech}`}>
            {json.Technologies.map((e, i) => {
              return (
                <div className={style.conteiner_tech}>
                <div className={style.text} key={i}>
                  <p className={style.name}>{e.name}</p>
                  <p className={style.experience}>{e.experience}</p>
                  </div>
                  <div className={style.conteiner_icon}>
                  <a href={e.link}   target="_blank"><img  className={style.icon} src={e.icon} alt={e.name}></img></a>
                  
                  </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

//React.Dispatch<React.SetStateAction<string>>;
