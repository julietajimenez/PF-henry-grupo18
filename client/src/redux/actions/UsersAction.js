import axios from "axios";
const { URL_API } = process.env;
export function getAllUsers() {
  return async function (dispatch) {
    try {
      var json = await axios.get(URL_API + "/users");
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
    var json = await axios.put(URL_API + `/users/update/${id}`, payload);
    console.log(payload);
    return json;
  };
}
