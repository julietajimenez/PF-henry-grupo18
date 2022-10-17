import axios from "axios";

export function postCompras(payload) {
    return async function () {
      var json = await axios.post(
        process.env.REACT_APP_URL_API + `/compras/comprar`,
        payload
      );
      console.log(payload);
      return json;
    };
  }

export function getCompras(userEmail) {
    return async function (dispatch) {
        try {
            var json = await axios.get(
                process.env.REACT_APP_URL_API + `/compras/` + userEmail
            );
            return dispatch({
                type: "GET_COMPRAS",
                payload: json.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}


export function getCompraById(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get(
                process.env.REACT_APP_URL_API + `/compras/ById/` + id
            );
            return dispatch({
                type: "GET_COMPRA_BY_ID",
                payload: json.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
}
export const removeDetailCompra = () => {
    return {
      type: "REMOVE_DETAIL",
    };
  };