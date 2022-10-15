import axios from "axios";
import swal from "sweetalert";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API + "/products");
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    } catch (error) {
    }
  };
}

export function getProductsByName(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        process.env.REACT_APP_URL_API + `/products/byName?name=${name}`
      );

      if (!json.data.length) {
        swal("Error: no se encontró el producto.", {
          icon: "error",
          buttons: "Cerrar",
        });
      } else {
        return dispatch({
          type: "GET_PRODUCTS_BY_NAME",
          payload: json.data,
        });
      }
    } catch (error) {}
  };
}

export function postProducts(payload) {
  return async function () {
    var json = await axios.post(
      process.env.REACT_APP_URL_API + "/products/create",
      payload
    );
    return json;
  };
}

export function productById(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        process.env.REACT_APP_URL_API + `/products/byId/${id}`
      );
      return dispatch({
        type: "GET_PRODUCTS_BY_ID",
        payload: json.data,
      });
    } catch (error) {}
  };
}

export const removeDetail = () => {
  return {
    type: "REMOVE_DETAIL",
  };
};

export function updateProducts(id, payload) {
  return async function () {
    var json = await axios.put(
      process.env.REACT_APP_URL_API + `/products/update/${id}`,
      payload
    );
    return json;
  };
}
export function stockUpdate(id, payload) {
  return async function () {
    var json = await axios.put(
      process.env.REACT_APP_URL_API + `/products/stockupdate/${id}?stock=${payload}`,
      payload
    );
    return json;
  };
}

export function getProductsByBrand(brand) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        process.env.REACT_APP_URL_API + `/products/byBrand?brand=${brand}`
      );
      return dispatch({
        type: "GET_PRODUCTS_BY_BRAND",
        payload: json.data,
      });
    } catch (error) {
    }
  };
}

export function filterByBrand(payload) {
  return {
    type: "FILTER_BY_BRAND",
    payload,
  };
}

export const pagesControl = (number) => {
  return {
    type: "CURRENT_PAGES",
    payload: number,
  };
};
export function removeFilters() {
  return {
    type: "REMOVE_FILTERS",
  };
}

export function image_post(payload, name) {
  return async function (dispatch) {
    try {
      let json = await axios.post(process.env.REACT_APP_URL_API + "/upload", {
        file: payload,
        name: name,
      });
      return dispatch({
        type: "IMAGE_POST",
        payload: json.data,
      });
    } catch (e) {
    }
  };
}
