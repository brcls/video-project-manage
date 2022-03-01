import React from "react";
import { Flex } from "../styles";

import CardCliente from "./CardCliente";

function ListaCliente() {
  return (
    <Flex>
      <CardCliente
        CNPJ={"01995923222"}
        NomeCliente={"Erick Barcelos"}
        Telefone={"91 98421-1088"}
        Email={"brcls@usp.br"}
        TituloVideoLate={"Video Atrasado"}
        EntregaVideo={"05/02/2001"}
      />
      <CardCliente
        CNPJ={"01995923222"}
        NomeCliente={"Erick Barcelos"}
        Telefone={"91 98421-1088"}
        Email={"brcls@usp.br"}
        TituloVideoLate={"Video Atrasado"}
        EntregaVideo={"05/02/2001"}
      />
      <CardCliente
        CNPJ={"01995923222"}
        NomeCliente={"Erick Barcelos"}
        Telefone={"91 98421-1088"}
        Email={"brcls@usp.br"}
        TituloVideoLate={"Video Atrasado"}
        EntregaVideo={"05/02/2001"}
      />
    </Flex>
  );
}

export default ListaCliente;
