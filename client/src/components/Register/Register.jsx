import React from "react";
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: '',
        email: '',
        avatar: '',
        password: ''
      })

    const [mensaje, setMensaje] = useState();

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value 
        }))
    }

    const validate = () => {
        let errors = {}
        if(!input.name) {
            errors.name = 'Se requiere un nombre!'
        }
        if(!input.email) {
            errors.email = 'Se requiere un mail!'
        }
        if(!input.password) {
            errors.password = 'Se requiere una contraseña!'
        }
        

        return errors
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const Usuario = {
            name: input.name,
            email: input.email,
            avatar: input.avatar,
            password: input.password,
        };

        if(input.name !== '' && input.email !== '' && input.password !== '') {

        
            
        await axios
        .post("http://localhost:3001/users/register", Usuario)
        .then((res) => {
            const { data } = res;
            setMensaje(data.mensaje);
            setTimeout(() => {
            setMensaje("");
            // localStorage.setItem("token", data?.usuario.token);
            
            localStorage.setItem("logueado", JSON.stringify(Usuario));
            
            

            navigate(`/`);
            }, 1500);
        })
        
        setInput({
            name: '',
            email: '',
            avatar: '',
            password: ''
        });

    }
            
  
    };

    return ( 
            <>
              <form autoComplete="off" autoCapitalize="on" onSubmit={onSubmit}>
                <div>
                  <label>Nombre: </label>
                  <input type={'text'} name='name' value={input.name}  onChange={handleChange} />
                  { errors.name && (<p className="error">{errors.name}</p>)}
                </div>
                <div>
                  <label>Email: </label>
                  <input type='email' name='email' value={input.email}  onChange={handleChange} />
                  { errors.email && (<p className="error">{errors.email}</p>)}
                </div>
                <div>
                  <label>Avatar: </label>
                  <input type={'text'} name='avatar' value={input.avatar}  onChange={handleChange} />
                </div>
                <div>
                  <label>Contraseña: </label>
                  <input type='password' name='password' value={input.password}  onChange={handleChange} />
                  { errors.password && (<p className="error">{errors.password}</p>)}
                </div>
                
                <button className="submitButton" type="submit">
                  Registrarse
                </button>
                
              </form>
              {mensaje && <div >{mensaje}</div>}
              </>
     );
}

export default Register;