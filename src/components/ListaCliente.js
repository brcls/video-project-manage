import React, { useEffect, useState } from "react";
import api from "../services/api";
//import CardCliente from "./CardCliente";
import {
  Card,
  Titulo,
  TituloMenor,
  Box,
  Box2,
  StyledDiv,
  StyledDiv2,
  RoundButton,
  StyledLink,
} from "../styles";

import { Flex } from "../styles";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function ListaCliente() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:3000/cliente")
      .then(({ data }) => {
        setClientes(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const setData = (data) => {
    let { id, cnpj, nome, telefone, email } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("CNPJ", cnpj);
    localStorage.setItem("Nome", nome);
    localStorage.setItem("Telefone", telefone);
    localStorage.setItem("Email", email);
  };

  const getData = () => {
    api
      .get("http://localhost:3000/cliente")
      .then((getData) => {
        setClientes(getData.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onDelete = (id) => {
    api
      .delete(`http://localhost:3000/cliente/${id}`)
      .then(() => {
        getData();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <Flex>
      {clientes.map((cliente) => (
        <Card key={cliente.id}>
          <Box2>
            <StyledDiv>
              <Titulo>teste</Titulo>
              <TituloMenor>teste</TituloMenor>
            </StyledDiv>
            <StyledDiv2>
              <StyledLink to="/editar-cliente">
                <RoundButton onClick={() => setData(cliente)}>
                  <AiFillEdit />
                </RoundButton>
              </StyledLink>
              <RoundButton onClick={() => onDelete(cliente.id)}>
                <AiFillDelete />
              </RoundButton>
            </StyledDiv2>
          </Box2>
          <Box>
            <Titulo>{cliente.nome}</Titulo>
            <TituloMenor>{cliente.telefone}</TituloMenor>
            <TituloMenor>{cliente.email}</TituloMenor>
            <TituloMenor>{cliente.cnpj}</TituloMenor>
          </Box>
        </Card>
      ))}
    </Flex>
  );
}

export default ListaCliente;
