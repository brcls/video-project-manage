import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  RoundButton,
  TituloMenor,
} from "../styles";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function CadastroCliente() {
  return (
    <>
      <RoundButton>
        <FaArrowAltCircleLeft />
      </RoundButton>
      <Container>
        <Titulo>Cadastro do cliente</Titulo>
        <TituloMenor>Preencha as informações abaixo</TituloMenor>
        <Formulario>
          <StyledInput type={"number"} placeholder="CNPJ" />
          <StyledInput placeholder="Nome" />
          <StyledInput type={"number"} placeholder="Telefone" />
          <StyledInput type={"email"} placeholder="Email" />
          <Button primary>Cadastrar</Button>
        </Formulario>
      </Container>
    </>
  );
}

export default CadastroCliente;
