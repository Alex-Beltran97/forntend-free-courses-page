import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { IS_AUTH } from './constants';

const PrivateRoutes = () => {

  const navigate = useNavigate();

  useEffect(() => {

    if( !(IS_AUTH() ) ){
      navigate("/user-login");
    };

  }, [ IS_AUTH() ]);

  return (<Outlet />);
};

export default PrivateRoutes;