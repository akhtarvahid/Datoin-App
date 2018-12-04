import { combineReducers } from 'redux';
import bestSeller from './best_seller';
export default combineReducers({
   seller: bestSeller,
})