import React from "react";
import {
  Button,
  Formulario,
  Container,
  StyledInput,
  Titulo,
  StyledLabel,
  StyledTextArea,
  DivData,
  StyledLink,
} from "../styles";

function FormEditarVideo() {
  return (
      <Container>
        <Titulo>Editar vídeo</Titulo>
        <Formulario>
          <StyledInput placeholder="Título do Vídeo" />
          <StyledTextArea placeholder="Briefing" />
          <StyledInput type={"number"} placeholder="Orçamento" />
          <DivData>
            <StyledLabel>Data de entrega</StyledLabel>
            <StyledInput type={"date"} />
          </DivData>
          <StyledLink to="/home">
            <Button primary>Salvar</Button>
          </StyledLink>
        </Formulario>
      </Container>
  );
}

export default FormEditarVideo;
