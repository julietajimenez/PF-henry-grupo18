import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";

function ContactUs() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_fhs9ubg",
        "template_qmod47d",
        form.current,
        "nsR4tZhBowRxFC-w5"
      )
      .then(
        (result) => {
          toast(
            "Su correo ha sido enviado con éxito, un administrador se contactará con usted pronto.",
            {
              duration: 6000,
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} ref={form}>
          <div>
            <input type="text" placeholder="Name" name="from_name" />
          </div>
          <div>
            <input
              type="email"
              placeholder="Dirección de correo"
              name="reply_to"
            />
          </div>
          <div>
            <input type="text" placeholder="Asunto" name="asunto" />
          </div>
          <div>
            <textarea
              id=""
              cols="40"
              rows="5"
              placeholder="Escribe tu mensaje aquí"
              name="message"
            ></textarea>
          </div>
          <div>
            <input type="submit" value="Send Message"></input>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}

export default ContactUs;
