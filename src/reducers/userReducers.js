// import {
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_LIST_FAILURE,
//     PRODUCT_DETAIL_REQUEST,
//     PRODUCT_DETAIL_SUCCESS,
//     PRODUCT_DETAIL_FAILURE
//   } 
//     from '../constants/productConstants'

// export const productListReducer = (state= {products: []}, action) => {
// switch(action.type) {
//    case PRODUCT_LIST_REQUEST :
//      return {loading:true, products:[]}
//    case PRODUCT_LIST_SUCCESS :
//      return {loading:false, products:action.payload }
//    case PRODUCT_LIST_FAILURE :
//      return {loading:false, error: action.payload }
//    default :
//      return state
// }
// } 