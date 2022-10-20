import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllUsers, updateUser } from '../../../redux/actions/UsersAction';
import styles from "./CreacionProductos.module.css";

function UpdateUsuarios() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector(state => state.users.allUsers)
  const { id } = useParams();

  const [input, setInput] = useState({
    name: users.name,
    email: users.email,
/*     avatar: users.avatar, */
    password: users.password,
    active: users.active,
    category: users.category
  })

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  const handleActive = (e) => {
    setInput({
      ...input,
      active: e.target.value
    })
  }

  const handleCategory = (e) => {
    setInput({
      ...input,
      category: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateUser(id, input));
    alert("Usuario actualizado");
    setInput({
      name: '',
      email: '',
  /*     avatar: '', */
      password: '',
      active: '',
      category: ''
    });
  };
  return (
    <div style={{ minHeight: "80vh" }} className={styles.flexContainer}>
      <div className={styles.div}>
      <button className={`${styles.btnLogin} ${styles.btnVolver}`} onClick={() => navigate(-1)}>VOLVER</button>
      </div>
      {
        users && users.map(e => {

          if (window.location.pathname === `/dashboard/update/${e.id}`) {
            return (
                <form autoComplete="off" autoCapitalize="on" onSubmit={(e) => { handleSubmit(e) }} className={styles.container}>
                  <div className={styles.formInputs}>
                    <label>Name: </label>
                    <input type={'text'} name='name' value={input.name} defaultValue={e.name} onChange={handleChange} />
                  </div>
                  <div className={styles.formInputs}>
                    <label>Email: </label>
                    <input type={'text'} name='email' value={input.email} defaultValue={e.email} onChange={handleChange} />
                  </div>
{/*                   <div className={styles.formInputs}>
                    <label>Avatar: </label>
                    <input type={'text'} name='avatar' value={input.avatar} defaultValue={e.avatar} onChange={handleChange} />
                  </div> */}
                  {/*                 <div className={styles.formInputs}>
                  <label>Contraseña: </label>
                  <input type={'text'} name='password' value={input.password} defaultValue={e.password} onChange={handleChange} />
                </div> */}
                  <div className={styles.formInputs}>
                    <label>Estado: </label>
                    <label>Activo<input type={'radio'} name={'active'} value={true} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                    <label>Inactivo<input type={'radio'} name={'active'} value={false} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                  </div>
                  <div className={styles.formInputs}>
                    <label>Categoria: </label>
                    <label>Admin<input type={'radio'} name={'category'} value={'admin'} onChange={(e) => handleCategory(e)} defaultValue={e.category} /></label>
                    <label>Usuario<input type={'radio'} name={'category'} value={'user'} onChange={(e) => handleCategory(e)} defaultValue={e.category} /></label>
                  </div>
                  <button className={styles.btnLogin} /* className="submitButton" */ type="submit">
                    UPDATE
                  </button>
                </form>
            )
          }
        })
      }
    </div>
  )
}


export default UpdateUsuarios

