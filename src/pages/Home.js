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
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import Logo from "../assets/fotografo.png";

function Home() {
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
        <StyledLink to="/cadastro-video">
          <RoundButton>
            <AiOutlineVideoCameraAdd />
          </RoundButton>
        </StyledLink>

        <Titulo>Vídeos</Titulo>
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

export default Home;
