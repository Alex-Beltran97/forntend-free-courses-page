import React from 'react'
import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import FormLogin from '../components/Login/FormLogin';
import { getUserName, IS_AUTH, TITLE_TAB } from '../helpers/constants';
import { GoogleLogin, GoogleLoginResponse, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { LoginState } from '../models/loggin';

const Login = ({ loginAction } : any ) => {

  const navigator = useNavigate();

  useEffect(() => {
    document.title = "Login" + TITLE_TAB;

    if( IS_AUTH() ){
      navigator( "/home" );
    };

  }, [IS_AUTH()]);

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: "665390765195-lqgh3hf8f35ippl6as0d2flcn588rl7j.apps.googleusercontent.com",
          scope: ''
        });
      };
      gapi.load('client:auth2', initClient);
  });

  const logOut = () => {};

  const onSuccess = (res: any) => {

    const userData = JSON.stringify( res.profileObj );
    const accessToken = JSON.stringify( res.tokenObj.access_token );
    const idToken = JSON.stringify( res.tokenObj.id_token );

    sessionStorage.setItem("user", userData);
    sessionStorage.setItem("access_token", accessToken);
    sessionStorage.setItem("id_token", idToken);

    loginAction( getUserName() );

    navigator( "/home" );
  };

  return (<>
    <Stack textAlign="center" gap={ 4 }>
      <Typography variant="h6" fontWeight={ 700 } textAlign="center">Inicia sesion en tu cuenta de Courses</Typography>
      <FormLogin />
      <Typography>
        <a className='text-light' href="#">Olvide mi contraseña</a>
      </Typography>
      <hr style={{ width:"48%", alignSelf:"center" }} />
      <Typography>O inicia Sesion con:</Typography>
      <div>
      <GoogleLogin
        clientId="665390765195-lqgh3hf8f35ippl6as0d2flcn588rl7j.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={ onSuccess }
        onFailure={ ( event )=> console.log(event) }
        cookiePolicy={'single_host_origin'}
      />
      </div>      
    </Stack>
  </>)
};

const mapStateProps = ( state: LoginState ) => ({
  logginState: state.isLogged
});

const dispatchStateProps = {
  loginAction: ( nameUser: string ) => ({ type: "LOG_USER", payload: nameUser })
};

export default connect(mapStateProps, dispatchStateProps)(Login);