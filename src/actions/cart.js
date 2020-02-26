import actionType from "./actionType";
export const increment = id => {
  console.log(id);

  return { type: actionType.CART_AMOUNT_INCREMENT, payload: { id } };
};
export const decrement = id => {
  return { type: actionType.CART_AMOUNT_DECREMENT, payload: { id } };
};
//异步action使用redux-thunk之后，在actionCreator里return 一个方法，这个方法的参数是 dispatch
export const decrementAsync = id => dispatch => {
  setTimeout(() => {
    dispatch(decrement(id));
  }, 2000);
};
