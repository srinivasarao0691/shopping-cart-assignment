import {combineReducers} from 'redux';
import productReducer from './reducers/product';
import cartReducer from './reducers/cart';
import bannersReducer from './reducers/banners';

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    banners: bannersReducer,
})