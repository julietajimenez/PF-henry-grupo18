import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

//FUNCIÓN QUE ENVÍA EL CORREO

export default async function sentEmail(email, subject, body) {
  const collectionRef = collection(db, "email");
  const emailContent = {
    to: email, // A QUE EMAIL QUIERO ENVIAR UN CORREO
    message: {
      subject: subject, // ASUNTO DEL CORREO
      text: body,
      html: body // EL MENSAJE ENVIADO
      // LO MISMO QUE TEXT, SOLAMENTE QUE ACÁ SE PUEDE ARMAR LA PLANTILLA (TODAVÍA NO SE COMO SE HACE)
    },
  };
  console.log("Listo para ser enviado");
  return await addDoc(collectionRef, emailContent);
}
