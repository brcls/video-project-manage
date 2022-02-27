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
  StyledLink,
} from "../styles";

import { FaArrowAltCircleLeft } from "react-icons/fa";

function CadastroVideo() {
  return (
    <>
      <StyledLink to="/home">
        <RoundButton>
          <FaArrowAltCircleLeft />
        </RoundButton>
      </StyledLink>
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
          <StyledLink to="/home">
            <Button primary>Cadastrar</Button>
          </StyledLink>
        </Formulario>
      </Container>
    </>
  );
}

export default CadastroVideo;
