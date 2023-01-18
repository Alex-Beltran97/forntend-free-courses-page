import { useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { getUserName, IS_AUTH } from '../helpers/constants';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginState } from "../models/loggin";

const Home = ({ loginAction, logoutAction } : any ) => {

  const [userName, setUserName] = useState<string>("");

  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();

    logoutAction();

    if( !IS_AUTH() ){
      navigate("/");
    };
  };

  useEffect(() => {
    
    const completeName = getUserName();

    document.title  = completeName + " - Courses";

    setUserName( completeName );
    
  }, []);

  return (<>
    <h1>Hola</h1>

    <GoogleLogout 
        clientId="665390765195-lqgh3hf8f35ippl6as0d2flcn588rl7j.apps.googleusercontent.com"
        buttonText="Log out" 
        onLogoutSuccess={logOut} 
      />
  </>);
};

const mapStateProps = () => ({});

const dispatchStateProps = {
  logoutAction: () => ({ type: "LOG_OUT_USER" })
};

export default connect( mapStateProps, dispatchStateProps )(Home);