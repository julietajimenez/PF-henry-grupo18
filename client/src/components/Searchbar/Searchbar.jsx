// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // Actions
// import { getProductsByName } from "../../redux/actions/ProductsActions";


// const SearchBar = () => {
//     const videos = useSelector((state) => state.products.products);

//     const videosMapped = videos.map((e) => e.name).toString();

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [nameSearch, setNameSearch] = useState("");

//     function handleChange(e) {
//         setNameSearch(e.target.value);
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         dispatch(getProductsByName(nameSearch));
//         setNameSearch("");
//         e.target.placeholder = "Search...";
//         navigate("/catalogo", { replace: true });
//     }

//     return (
//         <div className="search">
//             <form id="Form" onSubmit={e => handleSubmit(e)}>
//                 <div className="s__input">
//                     <input
//                         type="text"
//                         onChange={handleChange}
//                         value={nameSearch}
//                         className="search-Input"
//                     />
//                     <label className='lbl-search'>Search...</label>
//                     <button type="submit" className="icon-Search" >
//                         BUSCAR
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SearchBar;

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsByName } from "../../redux/actions/ProductsActions";

export default function SearchBar() {
    const [name, setName] = useState('')
    const dispatch = useDispatch();


    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)

    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getProductsByName(name))
    }
    return (
        <div>
            <button onClick={(e) => handleSubmit(e)} type='submit'>SEARCH</button>
            <input

                type={'text'}
                placeholder={'search by name...'}
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}
