import React from "react";
import {
  Flex,
  LogoImage,
  StyledCabecalho,
  Card,
  Titulo,
  StyledNav,
  StyledLink,
  RoundButton,
  TituloMenor,
  Container2,
} from "../styles";

import { FaUsers, FaVideo, FaArrowAltCircleRight } from "react-icons/fa";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Logo from "../assets/fotografo.png";

function Clientes() {
  return (
    <>
      <StyledCabecalho>
        <LogoImage pequeno src={Logo} alt="video" />

        <StyledNav>
          <StyledLink to="/clientes">
            <RoundButton>
              <FaUsers />
            </RoundButton>
          </StyledLink>

          <StyledLink to="/home">
            <RoundButton>
              <FaVideo />
            </RoundButton>
          </StyledLink>

          <StyledLink to="/">
            <RoundButton>
              <FaArrowAltCircleRight />
            </RoundButton>
          </StyledLink>
        </StyledNav>
      </StyledCabecalho>

      <Container2>
        <StyledLink to="/cadastro-cliente">
          <RoundButton>
            <AiOutlineUsergroupAdd />
          </RoundButton>
        </StyledLink>

        <Titulo>Clientes</Titulo>
        {/* Como por um elemento ao meio e outro à esquerda? */}
        <p></p>
      </Container2>

      <Flex>
        <Card>
          <Titulo>oi</Titulo>
          <TituloMenor>teste</TituloMenor>
        </Card>
        <Card>
          <Titulo>oi</Titulo>
          <p>teste</p>
        </Card>
        <Card>
          <Titulo>oi</Titulo>
        </Card>
        <Card>
          <Titulo>oi</Titulo>
        </Card>
        <Card>
          <Titulo>oi</Titulo>
        </Card>
        <Card>
          <Titulo>oi</Titulo>
        </Card>
      </Flex>
    </>
  );
}

export default Clientes;
