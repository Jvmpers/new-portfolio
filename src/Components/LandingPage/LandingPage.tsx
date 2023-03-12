import React, { useEffect, useState } from "react";
import style from "./LandingPage.module.css";
import image from "./landing_img.jpg";
import {Link} from 'react-scroll';
const typewriter = (text: string = "", time: number = 200, label: any = "") => {
  let array_caracter = text.split("");
  label.innerHTML = "";
  let i: number = 0;
  let j: number = text.length;
  let write = setInterval(() => {
    if (i === array_caracter.length) {
      label.innerHTML = text.substring(0, j);
      j--;
      if (j === 0) {
        i = 0;
        label.innerHTML = "";
        j = text.length;
      }
    }
    else{
      label.innerHTML += array_caracter[i];
      i++;
    }

  }, time);
};

export default function LandingPage() {
  const [writer, setWriter] = useState(false);

  useEffect(() => {
    const machine = document.getElementById("machine");
    writer
      ? typewriter(
          "A full stack developer finding my first teamwork",
          100,
          machine
        )
      : setWriter(true);
  }, [writer]);

  return (
    <div>
      <section className={style.homeConteiner}>
        <div className={style.image_border}></div>
        <img className={style.image} src={image} alt="" />
        <div className={style.sectionConteiner}>
          <div className={style.div_info}>
            <div className={style.div_text}>
              <h1 className={style.title}>Hello I´am Tomás Pastore</h1>
              <p id="machine" className={style.description}></p>
            </div>
             <Link 
          className={style.button}           
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={200}
          duration={1000}>
              <span className={style.top_key}></span>
              <span className={style.text}>Contact</span>
              <span className={style.button_key_1}></span>
              <span className={style.button_key_2}></span>
              </Link> 
          </div>
        </div>
      </section>
    </div>
  );
}
