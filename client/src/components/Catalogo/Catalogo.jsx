import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from "../../redux/actions/ProductsActions.js";
import Pager from '../Paginado/Pager.jsx';
import Card from '../Cards/Cards.jsx';
import CategoryFilter from '../Filter/CategoryFilter.jsx';
import Loader from '../Loader/Loader.jsx';
import SearchBar from '../Searchbar/Searchbar.jsx';


function Catalogo(props) {

    const {onAddCarrito} = props
    const productos = useSelector((state) => state.products.products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1);
    const handlePage = (number) => {
        setCurrentPage(number);
    };
    const videosPerPage = 9,
        indexOfLastVideo = currentPage * videosPerPage,
        indexOfFirstVideo = indexOfLastVideo - videosPerPage,
        currentProducts = productos.slice(indexOfFirstVideo, indexOfLastVideo);


        if(productos.length <= 0){
            return <Loader/>
        } 
    return (
        <>
            <Pager
                currentPage={currentPage}
                pageHandler={handlePage}
                itemsPerPage={videosPerPage}
                totalItems={productos.length}
            />
            <SearchBar />

             <CategoryFilter
            setCurrentPage= {setCurrentPage}
            /> 
            {currentProducts &&
                currentProducts
                    .sort((a, b) => {
                        const aDate = new Date(a.createdAt);
                        const bDate = new Date(b.createdAt);
                        return aDate - bDate;
                    })
                    .map((video) => {
                        { var categoria = video.categories ? categoria = video.categories.map((e) => e.name) : null }
                        return (
                            <>

                               
                                    <Card
                                        id={video.id}
                                        name={video.name}
                                        image={video.image}
                                        price={video.price}
                                        category={video.category}
                                        stock={video.stock}
                                        categories={categoria}
                                        onAddCarrito={onAddCarrito}
                                    />
                 
                                <div className="c__button">
                                </div>
                            </>
                        );
                    })}

        </>
    )
}

export default Catalogo
