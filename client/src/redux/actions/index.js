import axios from "axios";

export function getAllProducts() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/products");
      return dispatch({
        type: "GET_PRODUCTS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
