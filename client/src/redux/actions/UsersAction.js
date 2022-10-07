import axios from "axios";

export function getAllUsers() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/users");
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
      `http://localhost:3001/users/update/${id}`,
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
        `http://localhost:3001/users/verify/${id}`
      );
      console.log("response", response);
      return dispatch({ type: "CONFIRMATION_MAIL" });
    } catch (error) {
      console.log(error);
    }
  };
}


export async function verifyRoute(id) {
  const response = await axios.get(`http://localhost:3001/users/ById/${id}`)
    return response.data;
  };

