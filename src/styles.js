import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-weight: 600;
  background: #eee;
}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  background: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  text-align: center;
  width: 100%;
  margin: 0px 0;
  display: grid;
  grid-gap: 20px;
`;

export const Titulo = styled.h1`
  color: #333;
`;

export const TituloMenor = styled.h4`
  color: #555;
`;

export const StyledLabel = styled.label`
  color: #555;
`;

export const StyledCabecalho = styled.header`
  background-color: #64cac5;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  flex-wrap: wrap;

  img {
    margin: 0px;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  background: none;

  button {
    margin: 10px;
  }
`;

export const BtnCabecalho = styled.a`
  text-align: center;
  border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 600;
  border: 2px solid white;

  background: ${(props) => (props.primary ? "white" : "#64cac5")};
  color: ${(props) => (props.primary ? "#64cac5" : "white")};
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? "#64cac5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#64cac5")};

  font-size: 17px;
  margin: 10px 2%;
  padding: 0.25em 2em;
  border: 0 none;
  border-radius: 50px;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;

  &:hover {
    background: #105b72c2;
    transform: scale(1.05);
  }

  svg {
    background: none;
    width: 30px;
    height: 30px;
  }
`;

export const RoundButton = styled.button`
  background: ${(props) => (props.primary ? "#64cac5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#64cac5")};

  margin: 2% 2%;
  border: 0 none;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 50px;
  height: 50px;

  &:hover {
    background: #105b72c2;
    transform: scale(1.05);
  }

  svg {
    background: none;
    width: 30px;
    height: 30px;
  }
`;

export const Formulario = styled.form`
  padding: 10px;
  margin: 0 auto;
  background: #eee;
  width: 40%;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
`;

export const StyledInput = styled.input`
  border-radius: 50px;
  padding: 10px;
  border: 0 none;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  margin: 10px 2%;

  &:hover {
    background: #ddd;
    transform: scale(1.05);
  }
`;

export const StyledTextArea = styled.textarea`
  border-radius: 10px;
  padding: 10px;
  border: 0 none;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.3);
  width: 80%;
  height: 100px;
  margin: 10px 2%;
  resize: none;

  &:hover {
    background: #ddd;
    transform: scale(1.05);
  }
`;

export const DivData = styled.div`
  margin: 10px 0;
`;

export const LogoImage = styled.img`
  width: ${(props) => (props.pequeno ? "5%" : "10%")};
  width: ${(props) => (props.pequeno ? "70px" : "115px")};

  margin: auto;
  background: #64cac5;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(1, 1, 1, 0.5);
  display: block;
`;

export const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px;
  flex: 1 1 400px;
  padding: 15px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px
  margin: 0 auto;
`;


export const Container2 = styled(Container)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;