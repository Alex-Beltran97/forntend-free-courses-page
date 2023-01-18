import { Button, Stack, TextField } from "@mui/material";
import { Form, Formik } from "formik";

type InitialValues = {
  email: number | string;
  password: string;
};

const FormLogin = () => {
  return (<>
    <Formik<InitialValues>
      initialValues={{
        email: "",
        password: ""
      }}
  
      onSubmit={ () =>{
  
      }}
    >
      { () =>(
        <Form>
          <Stack style={{ padding: "0 20rem" }} gap={ 3 }>
            <TextField
              required
              label="Correo Electronico"
              variant="standard"
            />
            <TextField
              required
              label="Contraseña"
              variant="standard"
            />
            <Button variant='contained' color='primary' style={{ color: "#fff" }}>Registrate</Button>
          </Stack>
        </Form>
      ) }
    </Formik>
  </>);
};

export default FormLogin;