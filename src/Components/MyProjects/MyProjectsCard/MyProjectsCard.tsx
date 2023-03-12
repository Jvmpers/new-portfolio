import React from 'react';
import style from "./MyProjectsCard.module.css";

interface Props{
  props:{
    name:string;
    deploy:string;
    img:string;
    gitHub:string;
  }
} 

export default function MyProjectsCard({props}:Props) {

  return (
    <div className={style.cardProject}>
      <img className={style.imgProject} src={props.img} alt="" />
      <div className={style.buttonsProject}>
        <a href={props.deploy} target="_blank" className={style.nameProject}>{props.name}</a>
        <a href={props.gitHub} target="_blank" className={style.gitHubProject}>gitHub</a>
      </div>
    </div>
  )
}
