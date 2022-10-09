import axios from "axios";

export function postReview(payload) {
    return async function () {
      var json = await axios.post('http://localhost:3001/reviews/create', payload);
      return json;
    };
  }
  

export function getAllReview(idProduct) {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3001/reviews/' + idProduct);
      console.log(json)
      return dispatch({
        type: "GET_REVIEWS_BY_PRODUCT",
        payload: json.data, 
      });
    } catch (error) {}
};
}