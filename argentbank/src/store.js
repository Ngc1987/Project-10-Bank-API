import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer, userUpdateReducer, getUserReducer } from "./reducers/userReducers";
// Dev tools
import {composeWithDevTools} from "redux-devtools-extension"
import logger from "redux-logger"

const reducer = combineReducers({
	// This will contains our reducers
	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userUpdate: userUpdateReducer,
	userInfos: getUserReducer
})

// Check if user datas already on local storage
const userInfosFromStorage = localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null;

// If user datas already on local storage set them on the initial state
const initialState = {
	userInfos: { userInfo: userInfosFromStorage}
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware, logger))
)

export default store;