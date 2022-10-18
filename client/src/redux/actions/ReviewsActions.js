import axios from "axios";

export function postReview(payload) {
    return async function () {
      var json = await axios.post(process.env.REACT_APP_URL_API + `/reviews/create`, payload);
      return json;
    };
  }
  
export function editReview(payload) {
    return async function () {
      var json = await axios.put(process.env.REACT_APP_URL_API + `/reviews/edit`, payload);
      return json;
    };
  }

export function getAllReview(idProduct) {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API + `/reviews/` + idProduct);
      return dispatch({
        type: "GET_REVIEWS_BY_PRODUCT",
        payload: json.data, 
      });
    } catch (error) {}
};
}

export function getReviews() {
  return async function (dispatch) {
    try {
      var json = await axios.get(process.env.REACT_APP_URL_API + `/reviews`);
      console.log(json)
      return dispatch({
        type: "GET_REVIEWS",
        payload: json.data, 
      });
    } catch (error) {}
};
}