// import axios from 'axios'
// import {
//     PRODUCT_LIST_REQUEST,
//     PRODUCT_LIST_SUCCESS,
//     PRODUCT_LIST_FAILURE,
//     PRODUCT_DETAIL_REQUEST,
//     PRODUCT_DETAIL_SUCCESS,
//     PRODUCT_DETAIL_FAILURE
// } from '../constants/productConstants'

// export const listProducts = () => async(dispatch) => {
//     try {
//         dispatch({ type: PRODUCT_LIST_REQUEST })

//         const {data} = await axios.get('/api/products')

//         dispatch({
//             type: PRODUCT_LIST_SUCCESS,
//             payload: data
//         })
        
//     } catch (error) {
//         dispatch ({
//             type: PRODUCT_LIST_FAILURE,
//             payload: error.message
//         })
//     }
// }