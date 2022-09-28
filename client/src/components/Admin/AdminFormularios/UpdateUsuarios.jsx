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
    password: users.password
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
    }); 
  };
  return (
    <div>
       {
        users && users.map(e => { 

           if (window.location.pathname === `/update/${e.id}`) {
            return (
              <form autoComplete="off" autoCapitalize="on" onSubmit={(e) => { handleSubmit(e) }}>
                <div>
                  <label>Name: </label>
                  <input type={'text'} name='name' value={input.name} defaultValue={e.name}  onChange={handleChange} />
                </div>
                <div>
                  <label>Email</label>
                  <input type={'text'} name='email' value={input.email} defaultValue={e.email}  onChange={handleChange} />
                </div>
                <div>
                  <label>Avatar</label>
                  <input type={'text'} name='avatar' value={input.avatar} defaultValue={e.avatar}  onChange={handleChange} />
                </div>
                <div>
                  <label>Contraseña</label>
                  <input type={'text'} name='password' value={input.password}  defaultValue={e.password}  onChange={handleChange} />
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

