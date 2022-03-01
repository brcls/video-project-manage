import React from "react";
import {
  Card,
  Titulo,
  TituloMenor,
  Box,
  Box2,
  StyledDiv,
  StyledDiv2,
  RoundButton,
} from "../styles";

import { AiFillEdit } from "react-icons/ai";

function CardCliente({
  CNPJ,
  NomeCliente,
  Telefone,
  Email,
  TituloVideoLate,
  EntregaVideo,
}) {
  return (
    <Card>
      <Box2>
        <StyledDiv>
          <Titulo>{TituloVideoLate}</Titulo>
          <TituloMenor>{EntregaVideo}</TituloMenor>
        </StyledDiv>
        <StyledDiv2>
          <RoundButton>
            <AiFillEdit />
          </RoundButton>
        </StyledDiv2>
      </Box2>
      <Box>
        <Titulo>{NomeCliente}</Titulo>
        <TituloMenor>{Telefone}</TituloMenor>
        <TituloMenor>{Email}</TituloMenor>
        <TituloMenor>{CNPJ}</TituloMenor>
      </Box>
    </Card>
  );
}

export default CardCliente;
