import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getFavorites } from "../../redux/actions/ProductsActions.js";
import Pager from "../Paginado/Pager.jsx";
import Card from "../Cards/Cards.jsx";
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
/*   const usuarios = useSelector((state) => state.users.users);
  const favorites = useSelector(state=> state.products.favorite) */
  // console.log(usuarios)

  //const filtered = useSelector(state=>state.products.filtered)
  const page = useSelector((state) => state.products.pages);
  //const [filter, setFilter] = useState(false)

  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    if (!productos.length) {
      dispatch(getAllProducts());
      dispatch(getFavorites(props.logueado.email))
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
    return <Loader />;
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
            .map((e) => {

              return (
                <Card
                  key={e.id}
                  id={e.id}
                  name={e.name}
                  image={e.image}
                  price={e.price}
                  category={e.category}
                  stock={e.stock}
                  onAddCarrito={onAddCarrito}
                  /* favoriteId= {favorites.map(f => f.id == e.id)} */
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
