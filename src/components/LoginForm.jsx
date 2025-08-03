import { useFormik } from "formik";
import { Link } from "react-router";

const validade = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Preencha este campo.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email inválido.";
  }

  if (!values.firstName) {
    errors.firstName = "Preencha este campo.";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Precisa ter 15 ou menos caracteres.";
  }

  if (!values.lastName) {
    errors.lastName = "Preencha este campo.";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Precisa ter 20 ou menos caracteres.";
  }

  return errors;
};

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    validade,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Seu email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />{" "}
      <br />
      <label htmlFor="firstName">Nome</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />{" "}
      <br />
      <label htmlFor="lastName">Sobrenome</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />{" "}
      <br />
      <button type="submit">Enviar</button>
      <br />
      <Link to="/home">
        <button type="button">Ir para Home</button>
      </Link>
    </form>
  );
}

export default LoginForm;
