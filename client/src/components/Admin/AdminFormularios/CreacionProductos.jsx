import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategorys } from "../../../redux/actions/CategorysActions";
import { image_post, postProducts } from "../../../redux/actions/ProductsActions";
import { useNavigate } from 'react-router-dom';
import styles from "./CreacionProductos.module.css";

function CreacionProductos() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const categories = useSelector((state) => state.categorys.categorys);
  const initialState = {
    name: "",
    brand: "",
    price: "",
    description: "",
    stock: "",
    image: "",
    category: "",
  }
  const [input, setInput] = useState(initialState);
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState();

  useEffect(() => {
    dispatch(getAllCategorys());
  }, []);
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }


  const handleChangeImage = (e)=>{
    setSelectedFile(e.target.files[0])
    setFileInputState(e.target.value)
    console.log(e.target.value);
  }

  function handleSelect(e){
    setInput({
        ...input,
        category: e.target.value
    })
}
//const payload = {...input, image}




  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      dispatch(image_post(reader.result, input.name));
    };
    
    /*     if (
      input.description &&
      input.name &&
      input.price && 
      input.image &&
      input.brand &&  
      input.category
      ) { */
      function readURL(fileInputState) {
        if (fileInputState.files && fileInputState.files[0]) {
          var read = new FileReader();
          read.onload = function (e) {
            ('#blah')
              .attr('src', e.target.result)
              .width(150)
              .height(200);
          };
          read.readAsDataURL(fileInputState.files[0]);
        }
        console.log(read);
      }
      dispatch(postProducts({
        name: input.name,
      brand: input.brand,
      price: input.price,
      description: input.description,
      stock: input.stock,
      image: fileInputState,
      category: input.category,
    }));
    
   
    alert("creado con exito");
    setInput(initialState);
    navigate('/')
  }
  return (
    <div className={styles.flexContainer}>
      <form
        className={styles.container}
        autoComplete="off"
        autoCapitalize="on"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className={styles.formInputs}>
          <label>Nombre: </label>
          <input
          required
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Marca: </label>
          <input
          required
            type="text"
            name="brand"
            value={input.brand}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Precio: </label>
          <input
          required
            type="text"
            name="price"
            value={input.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Imagen: </label>
          <input
            id="fileInput"
            type="file"
            value={fileInputState}
            name="image"
            onChange={handleChangeImage}
/*             accept="image/png, image/jpeg, image/jpg, image/jfif" */
          />
        </div>
        <div className={styles.formInputs}>
          <label>Stock: </label>
          <input
            type="number"
            name="stock"
            value={input.stock}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label>Descripción: </label>
          <textarea
            type="text"
            name="description"
            value={input.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.formInputs}>
          <select onChange={(e) => handleSelect(e)}>
            {categories &&
              categories.map((e) => {
                return <option value={e}>{e}</option>;
              })}
          </select>
        </div>
        <button className={styles.btnLogin} type="submit">
          ENVIAR
        </button>
      </form>
{/*       <img src={image} alt="" /> */}
    </div>
  );
}

export default CreacionProductos;