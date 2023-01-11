import { Paper, Stack } from "@mui/material";
import logo from '../assets/logo.svg';
import { MdOutlineShoppingCart, MdOutlineTranslate, MdSearch } from "react-icons/md";

const Navbar = () => {
  return (<>
    <Paper style={{ fontSize:"18px", padding: 8 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={ 2 }>
          <a href="#">
            <img src={ logo } alt="logo" width={ 160 } />
          </a>
          <a className="text-light" href="#">
            Categorias
          </a>
          <MdSearch />
        </Stack>
        <Stack direction="row" alignItems="center" gap={ 2 }>
          <a className="text-light" href="#">
            Enseña en ***
          </a>
          <MdOutlineShoppingCart />
          <a className="text-light" href="#">
            Iniciar Sesion
          </a>
          <a className="text-light" href="#">
            Registrate
          </a>
          <MdOutlineTranslate />
        </Stack>
      </Stack>
    </Paper>
  </>)
};

export default Navbar;