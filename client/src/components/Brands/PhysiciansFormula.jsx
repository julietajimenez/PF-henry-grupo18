import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeDetail, pagesControl, getProductsByBrand, getAllProducts } from "../../redux/actions/ProductsActions";
import Cards from "../Cards/Cards";
import styles from '../Catalogo/Catalogo.module.css'

export default function PhysiciansFormula(props) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state => state.products.allProducts)
    const page = useSelector(state => state.products.pages)


    useEffect(() => {
        dispatch(getProductsByBrand('physicians formula'))
        return () => {
            dispatch(removeDetail())
        }
    }, [])

    return (
        <>
            <button onClick={() => {
                navigate(-1)
                dispatch(pagesControl(page))
            }}>Volver</button>
            <div className={styles.cardsContainer}>
                {
                    product?.map(e => {
                        return (
                            <Cards
                                key={e.id}
                                id={e.id}
                                name={e.name}
                                image={e.image}
                                price={e.price}
                                category={e.category}
                                stock={e.stock}
                                onAddCarrito={props.onAddCarrito}
                            />
                        );
                    })
                }

            </div>
        </>
    )
}