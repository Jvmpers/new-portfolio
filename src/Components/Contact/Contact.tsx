import React, { useRef } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import image from "./pngegg (19).png";
export default function Contact() {
  const form = useRef<any>();
  const sendEmail = (e: any): void => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ggamc3k",
        "template_g9hdk5f",
        form.current,
        "HW7dsjYI6ETtRa-ti"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  

  return (
    <section id="contact">
           
      <div className={style.containerContact}>
      <img className={style.image_png} src={image} alt="decoration image" />
      <div className={style.divContain}>
   
        <h2 className={style.textCenter}>
          Contact
        </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={style.formContact}
            action=""
          >
            <input
              className={style.input}
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              className={style.input}
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
            <input
              className={`${style.input} ${style.email}` }
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />

            <textarea
              className={style.textMessaje}
              cols={30}
              rows={8}
              placeholder="Type here for Message.."
              name="message"
              required
            ></textarea>
            <button className={style.button} type="submit">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
