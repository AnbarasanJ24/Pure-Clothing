import { combineReducers } from "redux";
import { persistReducer } from "redux-persist"
import UserReducer from './user/user.reducer'
import CartReducer from "./cart/cart.reducer";
import storage from 'redux-persist/lib/storage'
import DirectoryReducer from "./directory/directory.reducer";
import ShopReducer from "./shop/shop.reducer";

const presistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: DirectoryReducer,
    shop: ShopReducer
})


export default persistReducer(presistConfig,rootReducer)