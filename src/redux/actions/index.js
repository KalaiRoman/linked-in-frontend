import  LoginActionReducer  from "../reducers/Login_reducer";
import postReducers from '../reducers/Post_reducer';
const rootReducer={
login:LoginActionReducer,
posts:postReducers
}

export default rootReducer;