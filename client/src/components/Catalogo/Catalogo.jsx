import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/ProductsActions.js";
import { getAllCategorys } from '../../redux/actions/CategorysActions'
import Pager from "../Paginado/Pager.jsx";
import Card from "../Cards/Cards.jsx";
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar.jsx";
import Loader from "../Loader/Loader.jsx";
import CategoryFilter from "../Filters/Filter Category/CategoryFilter.jsx";
import styles from "./Catalogo.module.css";
import BrandFiltered from "../Filters/Filter Brand/BrandFilter";
//import OtroFiltro from "../Filters/OtroFiltro.jsx";

function Catalogo(props) {
  const dispatch = useDispatch();
  const { onAddCarrito } = props;
  const productos = useSelector((state) => state.products.allProducts);
  //const filtered = useSelector(state=>state.products.filtered)
  const page = useSelector(state => state.products.pages)
  //const [filter, setFilter] = useState(false)

  const [currentPage, setCurrentPage] = useState(page);


  useEffect(() => {
    if(!productos.length){
      dispatch(getAllProducts());
    }
  }, [dispatch]);



  const handlePage = (number) => {
    setCurrentPage(number);
  };
  const videosPerPage = 12,
    indexOfLastVideo = currentPage * videosPerPage,
    indexOfFirstVideo = indexOfLastVideo - videosPerPage,
    currentProducts = productos.slice(indexOfFirstVideo, indexOfLastVideo);




  if (productos.length <= 0) {
    return <Loader />
  }

  return (
    <div className={styles.catalogoContainer}>
      <div className={styles.boxCategorySearch}>
        <SearchBar />
        {/*         <OtroFiltro
        setCurrentPage={setCurrentPage}/> */}
        <CategoryFilter
          setCurrentPage={setCurrentPage}
          className={styles.category}
        //setFilter ={setFilter}
        />
        <BrandFiltered
          setCurrentPage={setCurrentPage}
        //setFilter ={setFilter}
        />
      </div>



      <div className={styles.cardsContainer}>
        {currentProducts &&
          currentProducts
            .sort((a, b) => {
              const aDate = new Date(a.createdAt);
              const bDate = new Date(b.createdAt);
              return aDate - bDate;
            })
            .map((video) => {
              var categoria = video.categories
                ? (categoria = video.categories.map((e) => e.name))
                : null;

              return (
                <Card
                  key={video.id}
                  id={video.id}
                  name={video.name}
                  image={video.image}
                  price={video.price}
                  category={video.category}
                  stock={video.stock}
                  categories={categoria}
                  onAddCarrito={onAddCarrito}
                />
              );
            })}
      </div>

      <div className={styles.paginado}>
        <Pager
          currentPage={currentPage}
          pageHandler={handlePage}
          itemsPerPage={videosPerPage}
          totalItems={productos.length}
        />
      </div>
    </div>
  );
}

export default Catalogo;
