import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorites, getFavorites, removeStateFav } from "../../redux/actions/ProductsActions";
import Cards from "../Cards/Cards";
import style from './Favorites.module.css';
import toast, { Toaster } from 'react-hot-toast';

export default function Favorites() {
    const dispatch = useDispatch()
    const logueado = JSON.parse(localStorage.logueado);

    useEffect(() => {
        dispatch(getFavorites(logueado.email))

    }, [])

    const favorites = useSelector(state => state.products.favorite)

    const notifyRemove=  ()=> toast.error("Removido de favoritos!",{style:{
        background:"red",
        color:"white"
    }})
    const removeFav=(idUser, idProduct)=>{
        dispatch(deleteFavorites(idUser, idProduct))
        notifyRemove();
    }

    return (
        <div className={style.container}>
            {
                favorites.length >0?
                favorites.map(e => {
                    return (
                        <>
                        <Cards
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            price={e.price}
                            category={e.category}
                            stock={e.stock}
                            />
                            <button onClick={()=>removeFav(logueado.email, e.id)}>Eliminar de favoritos</button>
                        </>
                    )
                })  :
                <h2>Aún no tienes favoritos</h2>
            }
            <Toaster
      position="bottom-left"
      reverseOrder={false}
       />
        </div>
    )
}