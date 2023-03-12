import React from 'react'
import image from "./about_img.png";
import style from "./AboutMe.module.css";
export default function AboutMe() {
  return (
    <section id="aboutMe" className={style.div}>
          <div className={style.textAbout}>
            <h2  className={style.about}>About Me</h2>
            <p className={style.descriptionMe}>
              Full Stack Web Developer. I am looking for a job where I can train and learn new technologies and be part of a work team. I characterize myself as an empathetic, cooperative, tenacious person and solver of logical and workgroup problems.
            </p>
          </div>
          <div className={style.coverImg}>
            <img className={style.imgAbout} src={image} alt="" />
          </div>
    </section>

  )
}
