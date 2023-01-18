import { Stack, Typography, Link } from '@mui/material';
import { useEffect } from 'react';
import FormRegister from "../components/Register/FormRegister";
import { TITLE_TAB } from '../helpers/constants';

const Register = () => {

  useEffect(() => {
    document.title = "Register" + TITLE_TAB;
  }, []);

  return (<>
    <Stack alignItems="center" gap={ 4 } marginY={ 4 }>
      <h4>Regístrate y comienza a aprender</h4>
      <FormRegister />
      <Typography>
        Al registrarte, aceptas nuestras <a className='text-light' href='#'>Condiciones de uso y nuestra Politica de privacidad</a>
      </Typography>
      <hr />
      <Typography>
        ¿Ya tienes cuenta? <Link href='#'>Inicia Sesion</Link>
      </Typography>
    </Stack>
  </>)
};

export default Register;