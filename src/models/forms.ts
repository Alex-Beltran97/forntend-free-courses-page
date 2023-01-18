import { typeField } from "./enums";

type RegisterField = {
  label: string;
  type: string;
  name: string;
};

export const registerField : RegisterField[] = [
  {
    label: "Documento",
    type: typeField["1"],
    name: "document"
  },
  {
    label: "Contraseña",
    type: typeField["0"],
    name: "password"
  },
  {
    label: "Nombre",
    type: typeField["0"],
    name: "name"
  },
  {
    label: "Apellido",
    type: typeField["0"],
    name: "lastName"
  },
  {
    label: "Telefono",
    type: typeField["1"],
    name: "phone"
  },
  {
    label: "Correo Electronico",
    type: typeField["2"],
    name: "email"
  }
]