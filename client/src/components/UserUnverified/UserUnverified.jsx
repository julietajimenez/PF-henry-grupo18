import React from "react";
import styles from '../Cards/Cards.module.css'

function UserUnverified() {
  return (
<div style={{ minHeight: "80vh"}}>
  <div style={{display: 'flex', justifyContent: 'center', margin: '40px' }} class="alert alert-danger" role="alert">
      Su cuenta aún no está verificada, se le envió un paso a paso de la
      activación a su correo, en caso de que no lo haya recibido o esto sea un
      error, contacte con un administrador.
</div>
</div>
  );
}

export default UserUnverified;
