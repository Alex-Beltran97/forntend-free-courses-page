import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IS_AUTH } from '../../helpers/constants';
import { connect } from 'react-redux';
import { LoginState } from '../../models/loggin';
import { SetStateAction } from 'react';
import { Typography } from '@mui/material';

const StackAuth = ({ isLogged, userName } : any ) => {

  const [isLoggedState, setIsLoggedState] = useState(isLogged);

  useEffect(() => {
    
    setIsLoggedState( isLogged );

  }, [isLogged]);

  if( isLoggedState ){
    return <Typography variant='h6'>{ userName }</Typography>
  } else {

    return <>
      <Link to="/user-login">
        Iniciar Sesion
      </Link>
      <Link to="/user-register">
        Registrate
      </Link>
    </>
  };
};

const mapStateProps = ( state: LoginState ) => ({
  isLogged: state.isLogged,
  userName: state.userName
});

const dispatchStateProps = () => ({});

export default connect(mapStateProps, dispatchStateProps)( StackAuth );