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
    var json = await axios.put(process.env.REACT_APP_URL_API + `/users/update/${id}`, payload);
    console.log(payload);
    return json;
  };
}
