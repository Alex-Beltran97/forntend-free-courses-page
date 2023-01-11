import {
  Stack,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import { typeField } from "../../models/enums";

type InitialValues = {
  document: number | string;
  password: string;
  name: string;
  lastName: string;
  phone: number | string;
  email: string;
  acceptedNews?: boolean;
};

const FormRegister = () => {

  return (
    <>
      <Formik<InitialValues>
        initialValues={{
          document: "",
          password: "",
          name: "",
          lastName: "",
          phone: "",
          email: "",
          acceptedNews: false,
        }}
        onSubmit={(values, { resetForm }) => {
          console.log(values);

          resetForm();
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Stack gap={2} paddingX={8} maxWidth={580}>
              <TextField
                required
                type="number"
                id="standard-required"
                label="Documento"
                variant="standard"
                name="document"
                value={values.document}
                onChange={handleChange}
              />
              <TextField
                required
                type="text"
                id="standard-required"
                label="Contraseña"
                variant="standard"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <TextField
                required
                type="text"
                id="standard-required"
                label="Nombre"
                variant="standard"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <TextField
                required
                type="text"
                id="standard-required"
                label="Apellido"
                variant="standard"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              <TextField
                required
                type="number"
                id="standard-required"
                label="Telefono"
                variant="standard"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              <TextField
                required
                type="email"
                id="standard-required"
                label="Email"
                variant="standard"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <FormGroup onChange={handleChange}>
                <FormControlLabel
                  control={<Checkbox name="acceptedNews" />}
                  label="Quiero recibir ofertas especiales, recomendaciones personalizadas y consejos de aprendizaje"
                />
              </FormGroup>
              <Button
                variant="contained"
                style={{ color: "#fff" }}
                type="submit"
              >
                Registrate
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormRegister;
