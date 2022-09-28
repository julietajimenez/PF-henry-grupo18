import {products} from "./ProductsReducer"
import { categorys } from "./CategoryReducer";
import {users} from './UsersReducer'
import { combineReducers } from 'redux';

export default combineReducers({
    products, 
    categorys,
    users
})