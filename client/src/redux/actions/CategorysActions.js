import axios from "axios";

export function getAllCategorys() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/category");
      return dispatch({
        type: "GET_CATEGORYS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function putCategory(id, payload) {
  return async function () {
    var json = await axios.put(
      `http://localhost:3001/category/update/${id}`,
      payload
    );
    return json;
  };
}

export function createCategory(payload) {
  return async function () {
    var json = await axios.post(
      "http://localhost:3001/category/create",
      payload
    );
    return json;
  };
}

export function filterByCategory(payload){
  return {
    type: 'FILTER_BY_CATEGORY',
    payload
  }
}
