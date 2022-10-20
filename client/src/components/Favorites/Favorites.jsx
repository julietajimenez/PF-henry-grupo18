import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavorites, getFavorites, removeStateFav } from "../../redux/actions/ProductsActions";
import Cards from "../Cards/Cards";
import style from './Favorites.module.css';
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";

export default function Favorites(props) {
    const { onAddCarrito } = props;
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
    const noRemove=  ()=> toast.error("Su producto no se quitó de favoritos",{style:{
        background:"#f6b26b",
        color:"black"
    }})
    const removeFav=(idUser, idProduct)=>{
        Swal.fire({
            title: '¿Seguro quiere remover el producto de favoritos?',
            showDenyButton: true,
            showCancelButton: true,
            denyButtonText: `No`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Eliminado!', '', 'success')
              dispatch(deleteFavorites(idUser, idProduct))
              notifyRemove();
            } else if (result.isDenied) {
                noRemove()
            }
          })
    }

    return (
        <div className={style.container} style={{minHeight: '80vh'}}>
            {
                favorites.length >0?
                favorites.map(e => {
                    return (
                        <div className={style.div}>
                        <Cards
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            price={e.price}
                            category={e.category}
                            stock={e.stock}
                            onAddCarrito={onAddCarrito}
                            />
                            <button className={style.button} onClick={()=>removeFav(logueado.email, e.id)}>Eliminar de favoritos</button>
                        </div>
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