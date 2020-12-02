import React from "react";
import style from "./contact.module.scss";
import Iframe from "react-iframe";

export default function Contact() {
  return (
    <div className={style.contact_container}>
      <div className={style.contactheader}> Contact Us</div>
      <div className={style.contact_flex}>
        <div className={style.contact_content}>
          Mayan Media and Consulting<br></br>
          Anamnagar, Kathmandu <br />
          +977-9843534725
        </div>
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.2851090102167!2d85.34049883560365!3d27.721468278437747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5db83051fd4772de!2sTimilsina%20Store!5e0!3m2!1sen!2snp!4v1606892444370!5m2!1sen!2snp"
          width="400"
          height="250"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></Iframe>
      </div>
    </div>
  );
}
