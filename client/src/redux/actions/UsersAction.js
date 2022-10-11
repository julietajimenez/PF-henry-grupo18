import axios from "axios";
//const { process.env.REACT_APP_URL_API } = process.env;
export function getAllUsers() {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API + "/users");
      return dispatch({
        type: "GET_USERS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUser(id, payload) {
  return async function () {
    var json = await axios.put(
      process.env.REACT_APP_URL_API + `/users/update/${id}`,
      payload
    );
    console.log(payload);
    return json;
  };
}

export function verifyUser(id) {
  return async function (dispatch) {
    try {
      const response = await axios.put(
        process.env.REACT_APP_URL_API + `/users/verify/${id}`
      );
      console.log("response", response);
      return dispatch({ type: "CONFIRMATION_MAIL" });
    } catch (error) {
      console.log(error);
    }
  };
}

export async function verifyRoute(id) {
  const response = await axios.get(
    process.env.REACT_APP_URL_API + `/users/ById/${id}`
  );
  return response.data;
}
export function getUser(id) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        process.env.REACT_APP_URL_API + `/users/ById/${id}`
      );
      return dispatch({
        type: "GET_USER",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCompras(compras) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        process.env.REACT_APP_URL_API + `/users/getCompras/` + compras
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
