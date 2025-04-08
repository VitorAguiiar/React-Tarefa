import { useEffect, useState } from "react";
import { buscarObrasComAutoresUnicos } from "../services/axios";

const ArtworksList = () => {
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    carregarObras(page);
  }, [page]);

  const carregarObras = async (pagina) => {
    const obras = await buscarObrasComAutoresUnicos(pagina);
    setArtworks(obras);
  };

  const trocarObras = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="artworks-container">
      <h1>Lista de Obras de Arte</h1>
      <button onClick={trocarObras}>Trocar Obras</button>
      <div className="scroll-container">
        {artworks.map((artwork, index) => (
          <div key={index} className="obra-card">
            <h2>{artwork.title}</h2>
            <p>Artista: {artwork.artist}</p>
            <p>Ano: {artwork.date}</p>
            {artwork.image ? (
              <img src={artwork.image} alt={artwork.title} />
            ) : (
              <p>Imagem não disponível</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtworksList;
