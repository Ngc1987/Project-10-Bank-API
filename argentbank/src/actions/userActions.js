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
		USER_UPDATE_SUCCESS} from "../constants/userConstants";
import axios from "axios";

// Our reducers for the application
export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({type: USER_LOGIN_REQUEST});

		const config = {
			headers: {
				"Content-type": "application/json"
			}
		};

		const { data } = await axios.post(
			"http://localhost:3001/api/v1/user/login",
			{
				email,
				password,
			},
			config
		);
		// console.log(data)
		dispatch({type: USER_LOGIN_SUCCESS, payload: data});
		// Set the token on the local storage
		localStorage.setItem("token", JSON.stringify(data))

	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const getUserInfos = (token) => async (dispatch) => {
	try {
		dispatch({ type: GET_USER_REQUEST});

		const config = {
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${token}`
			}
		};

		const { data } = await axios.post(
			"http://localhost:3001/api/v1/user/profile",
			{

			},
			config
		);
		// console.log(data)
		dispatch({ type: GET_USER_SUCCESS, payload: data});

		localStorage.setItem("userInfo", JSON.stringify(data));

	} catch (error) {
		dispatch({
			type: GET_USER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const logout = () => async (dispatch) => {
	localStorage.removeItem("userInfo");
	localStorage.removeItem("token");
	dispatch({type: USER_LOGOUT});
}

export const register = (firstName, lastName, email, password) => async (dispatch) => {
	try {
		dispatch({type: USER_REGISTER_REQUEST});

		const config = {
			headers: {
				"Content-type": "application/json"
			}
		};

		const { data } = await axios.post(
			"http://localhost:3001/api/v1/user/signup",
			{
				email,
				password,
				firstName,
				lastName
			},
			config
		);

		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
		// dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));	
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: 
			error.response && error.response.data.message
			? error.response.data.message 
			: error.message
		});
	}
}



export const updateProfile = (firstName, lastName, token) => async (dispatch) => {
	try {
		dispatch({ type: USER_UPDATE_REQUEST });

		const config = {
			headers: {
				"Content-type": "application/json",
				Authorization: `Bearer ${token}`
			}
		}

		const { data } = await axios.put(
			"http://localhost:3001/api/v1/user/profile",
			{
				firstName,
				lastName,
			},
			config
		)
		// console.log(data)
		dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
		dispatch({ type: GET_USER_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));

	} catch (error) {
		dispatch({
			type: USER_UPDATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
}