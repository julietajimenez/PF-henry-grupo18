import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/actions/ProductsActions";
import Cards from "../Cards/Cards";
import style from './Favorites.module.css'

export default function Favorites() {
    const dispatch = useDispatch()
    const logueado = JSON.parse(localStorage.logueado);

    useEffect(() => {
        dispatch(getFavorites(logueado.email))
    }, [])

    const favorites = useSelector(state => state.products.favorite)
    console.log(favorites);
    return (
        <div className={style.container}>
            {
                favorites.length >0?
                favorites.map(e => {
                    return (
                        <Cards
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            price={e.price}
                            category={e.category}
                            stock={e.stock}
                             />

                    )
                })  :
                <h2>Aún no tienes favoritos</h2>
            }
        </div>
    )
}