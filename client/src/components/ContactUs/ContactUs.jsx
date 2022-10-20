import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import styles from '../Admin/AdminFormularios/CreacionProductos.module.css'

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
            "Su correo ha sido enviado con éxito, un administrador se contactará con usted muy pronto.",
            {
              duration: 6000,
              style: {
                  background: "rgb(247, 205, 254)",
                  color: "white",
                },
              
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
    <div style={{minHeight:'80vh'}} className={styles.flexContainer}>
      <div>
        <form onSubmit={handleSubmit} ref={form} className={styles.container} style={{width:'90%', marginLeft:'5%'}}>
          <div className={styles.formInputs}>
            <input required type="text" placeholder="Name" name="from_name" />
          </div>
          <div className={styles.formInputs}>
            <input required
              type="email"
              placeholder="Dirección de correo"
              name="reply_to"
            />
          </div>
          <div className={styles.formInputs}>
            <input required type="text" placeholder="Asunto" name="asunto" />
          </div>
          <div className={styles.formInputs}>
            <textarea
              id=""
              cols="40"
              rows="5"
              placeholder="Escribe tu mensaje aquí"
              name="message"
            ></textarea>
          </div>
          <div>
            <input className={styles.btnLogin} type="submit" value="Enviar mensaje"></input>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default ContactUs;
