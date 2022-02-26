import styled, { createGlobalStyle } from "styled-components";

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

export const Container = styled.div`
  text-align: center;
  width: 100%;
  margin: 0px 0;
`;

export const Titulo = styled.h1`
  color: #000;
  padding: 10px 0;
`;

export const TituloMenor = styled.h4`
  color: #555;
  padding: 25px 0;
`;

export const StyledLabel = styled.label`
  color: #555;
`;

export const StyledCabecalho = styled.nav`
  background-color: #64cac5;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
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
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.3);
  width: 80%;

  &:hover {
    background: #105b72c2;
    transform: scale(1.05);
  }
`;

export const RoundButton = styled.button`
  background: ${(props) => (props.primary ? "#64cac5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#64cac5")};

  margin: 2% 2%;
  border: 0 none;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.3);
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
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.3);
`;

export const StyledInput = styled.input`
  border-radius: 50px;
  padding: 10px;
  border: 0 none;
  background: #eee;
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.3);
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
  box-shadow: 0px 2px 10px rgba(10, 10, 10, 0.3);
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
