import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  RoundButton,
  TituloMenor,
  StyledLabel,
  StyledTextArea,
  DivData,
} from "../styles";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function CadastroCliente() {
  return (
    <>
      <RoundButton>
        <FaArrowAltCircleLeft />
      </RoundButton>
      <Container>
        <Titulo>Cadastro do vídeo</Titulo>
        <TituloMenor>Preencha as informações abaixo</TituloMenor>
        <Formulario>
          <StyledInput placeholder="Título do Vídeo" />
          <StyledTextArea placeholder="Briefing" />
          <StyledInput type={"number"} placeholder="Orçamento" />
          <DivData>
            <StyledLabel>Data de entrega</StyledLabel>
            <StyledInput type={"date"} />
          </DivData>
          <Button primary>Cadastrar</Button>
        </Formulario>
      </Container>
    </>
  );
}

export default CadastroCliente;
