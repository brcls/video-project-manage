import React from "react";
import { Flex } from "../styles";

import CardVideo from "./CardVideo";

function ListaVideo() {
  return (
    <Flex>
      <CardVideo
        TituloDoVideo={"Video Teste"}
        Cliente={"Erick Barcelos Andrade Barcelos"}
        Telefone={"91 9821-1088"}
        Entrega={"05/02/2001"}
        Orcamento={"R$ 10.000,00"}
        Status={"Pendente"}
      />
      <CardVideo
        TituloDoVideo={"Video Teste"}
        Cliente={"Erick Barcelos"}
        Telefone={"91 9821-1088"}
        Entrega={"05/02/2001"}
        Orcamento={"R$ 10.000,00"}
        Status={"Pendente"}
      />
      <CardVideo
        TituloDoVideo={"Video Teste"}
        Cliente={"Erick Barcelos"}
        Telefone={"91 9821-1088"}
        Entrega={"05/02/2001"}
        Orcamento={"R$ 10.000,00"}
        Status={"Pendente"}
      />
      <CardVideo
        TituloDoVideo={"Video Teste"}
        Cliente={"Erick Barcelos Andrade Barcelos"}
        Telefone={"91 9821-1088"}
        Entrega={"05/02/2001"}
        Orcamento={"R$ 10.000,00"}
        Status={"Pendente"}
      />
      <CardVideo
        TituloDoVideo={"Video Teste"}
        Cliente={"Erick Barcelos Andrade Barcelos"}
        Telefone={"91 9821-1088"}
        Entrega={"05/02/2001"}
        Orcamento={"R$ 10.000,00"}
        Status={"Pendente"}
      />
    </Flex>
  );
}

export default ListaVideo;
