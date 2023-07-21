import {
  INCREASE_QTY,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DELETE_ALL_ITEMS,
  DELETE_ITEM,
  DECREASE_QTY,
  TOTAL_AMOUNT,
} from "./action";

function reducer(state, { type, payload }) {
  switch (type) {
    case DATA_FETCHING_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload.map((el) => {
          return { ...el, qty: 1 };
        }),
      };
    case DATA_FETCHING_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case DELETE_ALL_ITEMS:
      return {
        ...state,
        products: [],
      };
    case DELETE_ITEM:
      return {
        ...state,
        products: state.products.filter((el) => el._id != payload),
      };
    case INCREASE_QTY:
      return {
        ...state,

        products: state.products.map((el) => {
          if (payload === el._id) {
            return {
              ...el,
              qty: el.qty + 1,
            };
          }
          return { ...el };
        }),
      };
    case DECREASE_QTY:
      return {
        ...state,
        products: state.products.map((el) => {
          if (payload === el._id) {
            return {
              ...el,
              qty: el.qty - 1,
            };
          }
          return {...el}
        }),
      };
    case TOTAL_AMOUNT :
      return {
        ...state,
        total : state.products.reduce((acc, item) => {
          return acc + item.price * item.qty 
        }, 0)
      }
  }
  return state;
}

export default reducer;
