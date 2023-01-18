import { LoginState } from "../../models/loggin";
import { AnyAction } from 'redux';

const initialState : LoginState = {
  userName: "",
  isLogged: false
};

const logginReducer = (initState: LoginState = initialState , action: AnyAction) => {

  switch (action.type) {
    case 'LOG_USER':
      return { userName: action.payload, isLogged: true }
    case 'LOG_OUT_USER':
      return { userName: "", isLogged: false }
    default:
      return initState;
  };
};

export default logginReducer;