import { GET_USER_FAIL, 
		GET_USER_REQUEST, 
		GET_USER_SUCCESS, 
		USER_LOGIN_FAIL, 
		USER_LOGIN_REQUEST, 
		USER_LOGIN_SUCCESS, 
		USER_LOGOUT, 
		USER_REGISTER_FAIL, 
		USER_REGISTER_REQUEST, 
		USER_REGISTER_SUCCESS,
		USER_UPDATE_FAIL,
		USER_UPDATE_REQUEST,
		USER_UPDATE_SUCCESS,
} from "../constants/userConstants"

// Login and Logout Reducers
export const userLoginReducer = (state={}, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {loading: true};
		case USER_LOGIN_SUCCESS:
			return {loading: false, userInfo: action.payload};
		case USER_LOGIN_FAIL:
			return {loading: false, error: action.payload};
		case USER_LOGOUT:
			return {};
		default:
			return state;
	}
}

// Register Reducers
export const userRegisterReducer = (state={}, action) => {
	switch (action.type) {
		case USER_REGISTER_REQUEST:
			return {loading: true};
		case USER_REGISTER_SUCCESS:
			return {loading: false, userInfo: action.payload};
		case USER_REGISTER_FAIL:
			return {loading: false, error: action.payload};
		default:
			return state;
	}
}

// Update profile reducers
export const userUpdateReducer = (state={}, action) => {
	switch (action.type) {
		case USER_UPDATE_REQUEST:
			return {loading: true};
		case USER_UPDATE_SUCCESS:
			return {loading: false, userInfo: action.payload};
		case USER_UPDATE_FAIL:
			return {loading: false, error: action.payload};
		default:
			return state;
	}
}
// Get User profile reducers
export const getUserReducer = (state={}, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return {loading: true};
		case GET_USER_SUCCESS:
			return {loading: false, userInfo: action.payload};
		case GET_USER_FAIL:
			return {loading: false, error: action.payload};
		case USER_LOGOUT:
			return { loading: false, userInfo: null};
		default:
			return state;
	}
}