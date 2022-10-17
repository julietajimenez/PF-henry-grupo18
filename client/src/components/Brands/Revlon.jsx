import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeDetail, pagesControl, getProductsByBrand} from "../../redux/actions/ProductsActions";
import styles from '../Details/Detail.module.css'

export default function Revlon(props) {
    const { onAddCarrito } = props;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const product = useSelector(state => state.products.allProducts)
    const page = useSelector(state => state.products.pages)
    const labialRevlon = product.find(e => e.id === '8580de77-bd8b-4c91-bcf6-f7e001c74933')

    useEffect(() => {
        dispatch(getProductsByBrand('revlon'))
        return () => {
            dispatch(removeDetail())
        }
    }, [dispatch])

    return (
        <div className={styles.container}>

            {/*                         <Cards
                        key={"8580de77-bd8b-4c91-bcf6-f7e001c74933"}
                          id={"8580de77-bd8b-4c91-bcf6-f7e001c74933"}
                          name={"Revlon Ultra HD Matte Lipcolor"}
                          brand={"revlon"}
                          image={"https://d3t32hsnjxo7q6.cloudfront.net/i/8e5fad1f09c17ff8b312508a2a7da161_ra,w158,h184_pa,w158,h184.png"}
                          price={"10.99"}
                          category={"lipstick"}
                          description= {"Revlon Ultra HD Matte Lipcolor gives you lightweight, high definition velvety matte color. It has a moisturizing, velvety \nfeel with a 100% wax-free, gel formula. Features: Creamy mango and whipped vanilla fragrance \nPlush velvety applicator Shade Range: (top row, left to right / bottom row, left to right) Devotion, Obsession, Addiction, Temptation / Flirtation, Love, Seduction, Passion"}
                          
                          onAddCarrito={props.onAddCarrito} 
                        /> */}
            <div className={styles.description}>
                <h1>{"Revlon Ultra HD Matte Lipcolor"}</h1>
                <h4>{"revlon"}</h4>
                <img src={"https://d3t32hsnjxo7q6.cloudfront.net/i/8e5fad1f09c17ff8b312508a2a7da161_ra,w158,h184_pa,w158,h184.png"} alt='img-revlon' />
                <h4>{"10.99"}</h4>
                <p>{"Revlon Ultra HD Matte Lipcolor gives you lightweight, high definition velvety matte color. It has a moisturizing, velvety \nfeel with a 100% wax-free, gel formula. Features: Creamy mango and whipped vanilla fragrance \nPlush velvety applicator Shade Range: (top row, left to right / bottom row, left to right) Devotion, Obsession, Addiction, Temptation / Flirtation, Love, Seduction, Passion"}</p>
                <button onClick={() => onAddCarrito(labialRevlon)}>Agregar al carrito</button>

            </div>
            <button onClick={() => {
                navigate(-1)
                dispatch(pagesControl(page))
            }}>Volver</button>
        </div>
    )
}