import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  StyledLink,
} from "../styles";

function FormEditarCliente() {
  return (
    <Container>
      <Titulo>Editar cliente</Titulo>
      <Formulario>
        <StyledInput type={"number"} placeholder="CNPJ" />
        <StyledInput placeholder="Nome" />
        <StyledInput type={"number"} placeholder="Telefone" />
        <StyledInput type={"email"} placeholder="Email" />
        <StyledLink to="/clientes">
          <Button primary>Cadastrar</Button>
        </StyledLink>
      </Formulario>
    </Container>
  );
}

export default FormEditarCliente;
