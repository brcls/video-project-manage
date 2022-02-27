import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  RoundButton,
  TituloMenor,
  StyledLink,
} from "../styles";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function CadastroCliente() {
  return (
    <>
      <StyledLink to="/clientes">
        <RoundButton>
          <FaArrowAltCircleLeft />
        </RoundButton>
      </StyledLink>
      <Container>
        <Titulo>Cadastro do cliente</Titulo>
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
    </>
  );
}

export default CadastroCliente;
