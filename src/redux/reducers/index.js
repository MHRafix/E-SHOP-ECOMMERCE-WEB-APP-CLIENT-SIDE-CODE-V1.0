import { combineReducers } from 'redux';
import { productReudcer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
    allProducts: productReudcer,
    product: selectedProductReducer,
});

export default reducers; 