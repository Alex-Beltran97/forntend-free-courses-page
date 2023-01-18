import {
  Stack,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Formik, Form } from "formik";
import { registerField } from '../../models/forms';

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
        {({ values, handleChange, handleSubmit, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Stack gap={2} paddingX={8} maxWidth={580}>

            { registerField.map( ({ type, label, name }, index) : JSX.Element =>{

              console.log(errors);

              return (<TextField
                  key={ index }
                  required
                  type={ type }
                  id="standard-required"
                  label={ label }
                  variant="standard"
                  name={ name }
                  value={values.name }
                  onChange={handleChange}
                />)
            }
            ) }
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
