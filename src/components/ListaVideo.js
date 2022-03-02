import React, { useEffect, useState } from "react";
import api from "../services/api";
import CardVideo from "./CardVideo";

import { Flex } from "../styles";

function ListaVideo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    try {
      api.get("http://localhost:3000/video").then(({ data }) => {
        setVideos(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Flex>
      {videos.map((video) => (
        <CardVideo
          key={video.id}
          TituloDoVideo={video.titulo}
          Cliente={"Erick Barcelos Andrade Barcelos"}
          Telefone={"91 9821-1088"}
          Entrega={video.entrega}
          Orcamento={video.orcamento}
          Status={video.status}
        />
      ))}
    </Flex>
  );
}

export default ListaVideo;
