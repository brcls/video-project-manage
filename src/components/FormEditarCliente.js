import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  TituloMenor,
  StyledLink,
} from "../styles";

function FormEditarCliente() {
  return (
    <Container>
      <Titulo>Editar do cliente</Titulo>
      <TituloMenor>Preencha as informações abaixo</TituloMenor>
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
