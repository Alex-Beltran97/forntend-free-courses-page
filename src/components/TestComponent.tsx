import { Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';

type Structure = {
  name: string;
};

const TestComponent = ({ name, changeName } : any) => {
  return (<>
    <h1>{ name }</h1>
    <Button variant='contained' onClick={ changeName }>Change</Button>
  </>);
};

const mapStateProps = ( state: Structure ) => ({
  name: state.name
});

const DispatchStateProps = {
  changeName: () => ({ type: 'CH_NAME', payload: "Ola Ke Ase" })
};

export default connect( mapStateProps, DispatchStateProps )(TestComponent);