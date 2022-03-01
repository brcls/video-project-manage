import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  TituloMenor,
  StyledLabel,
  StyledTextArea,
  DivData,
  StyledLink,
} from "../styles";

function FormCadastroVideo() {
  return (
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
  );
}

export default FormCadastroVideo;
