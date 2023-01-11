import { Stack, Box } from "@mui/material";
import darakLogo from '../assets/logo-bg-dark.png';

const Footer = () => {
  return (<>
    <Stack bgcolor={ "#000" } padding={ 4 }>
      <Stack direction="row" alignItems="center" gap={ 4 }>
        <img src={ darakLogo } alt="dark-logo" width={ 160 }/>
        <Stack>
          <a className="text-dark" href="#">
            Condiciones
          </a>
          <a className="text-dark" href="#">
            Politicas de privacidad
          </a>
          <a className="text-dark" href="#">
            Configuración de Cookies
          </a>
          <a className="text-dark" href="#">
            Mapa de sitio
          </a>
          <a className="text-dark" href="#">
            Declaración de accesibilidad
          </a>
        </Stack>
      </Stack>
    </Stack>
  </>)
};

export default Footer;