import axios from "axios";

// Cria a instância do axios com a base da API
const api = axios.create({
  baseURL: "https://api.artic.edu/api/v1",
});

// Função para buscar obras com no máximo uma por artista
export const buscarObrasComAutoresUnicos = async (pagina = 1, limite = 20, maximoObras = 4) => {
  try {
    const res = await api.get(`/artworks?page=${pagina}&limit=${limite}`);
    const data = res.data;

    const obrasFormatadas = data.data.map((artwork) => ({
      title: artwork.title,
      artist: artwork.artist_title || "Desconhecido",
      date: artwork.date_display || "Data desconhecida",
      image: artwork.image_id
        ? `${data.config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`
        : null,
    }));

    const artistasUnicos = new Set();
    const obrasFiltradas = obrasFormatadas.filter((obra) => {
      if (!artistasUnicos.has(obra.artist)) {
        artistasUnicos.add(obra.artist);
        return true;
      }
      return false;
    });

    return obrasFiltradas.slice(0, maximoObras);
  } catch (err) {
    console.error("Erro ao buscar obras de arte:", err);
    return [];
  }
};

export default api;
