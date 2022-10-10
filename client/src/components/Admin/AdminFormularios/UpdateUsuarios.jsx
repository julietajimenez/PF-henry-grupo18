import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllUsers, updateUser } from '../../../redux/actions/UsersAction';

function UpdateUsuarios() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.allUsers)
  const { id } = useParams();

  const [input, setInput] = useState({
    name: users.name,
    email: users.email,
    avatar: users.avatar,
    password: '',
    active: users.active,
    category: users.category
  })

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

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
    console.log(input);
    alert("Usuario actualizado");
    setInput({
      name: '',
      email: '',
      avatar: '',
      password: '',
      active: '',
      category:''
    });
  };
  return (
    <div>
      {
        users && users.map(e => {

          if (window.location.pathname === `/dashboard/update/${e.id}`) {
            return (
              <form autoComplete="off" autoCapitalize="on" onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                  <label>Name: </label>
                  <input type={'text'} name='name' value={input.name} defaultValue={e.name} onChange={handleChange} />
                </div>
                <div>
                  <label>Email: </label>
                  <input type={'text'} name='email' value={input.email} defaultValue={e.email} onChange={handleChange} />
                </div>
                <div>
                  <label>Avatar: </label>
                  <input type={'text'} name='avatar' value={input.avatar} defaultValue={e.avatar} onChange={handleChange} />
                </div>
                <div>
                  <label>Contraseña: </label>
                  <input type={'text'} name='password' value={input.password} defaultValue={e.password} onChange={handleChange} />
                </div>
                <div>
                  <label>Estado: </label>
                  <label>Activo<input type={'radio'} name={'active'} value={true} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                  <label>Inactivo<input type={'radio'} name={'active'} value={false} onChange={(e) => handleActive(e)} defaultValue={e.active} /></label>
                </div>
                <div>
                  <label>Categoria: </label>
                  <label>Admin<input type={'radio'} name={'category'} value={'admin'} onChange={(e) => handleCategory(e)} defaultValue={e.category} /></label>
                  <label>Usuario<input type={'radio'} name={'category'} value={'user'} onChange={(e) => handleCategory(e)} defaultValue={e.category} /></label>
                </div>
                <button className="submitButton" type="submit">
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

