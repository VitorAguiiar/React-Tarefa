# 🖼️ Artworks Gallery App

Este é um projeto em React que consome a API pública do Art Institute of Chicago para exibir obras de arte. A aplicação garante que seja exibida no máximo **uma obra por artista** por página.

---

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- API: [Art Institute of Chicago API](https://api.artic.edu/docs/)

---

## 📦 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/VitorAguiiar/React-Tarefa.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-projeto
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o projeto:
   ```bash
   npm run dev
   ```

---

## 🧠 Funcionalidades

- ✅ Consome dados da API pública do Art Institute of Chicago
- ✅ Filtra os resultados para exibir **no máximo uma obra por artista**
- ✅ Botão para trocar a lista de obras (paginação)
- ✅ Componente modular `ArtworksList`
- ✅ Organização das requisições no arquivo `services/axios.jsx`

---

## 🗂️ Estrutura de Pastas

```
src/
│
├── components/
│   └── ArtworksList.jsx   # Componente principal da galeria
│
├── services/
│   └── axios.jsx          # Configuração do Axios + função de busca
│
├── App.jsx                # Arquivo principal da aplicação
├── App.css                # Estilos da aplicação
└── main.jsx               # Ponto de entrada
```

---

## 🧑‍💻 Autor

Desenvolvido por [(https://github.com/VitorAguiiar)] ✌️

---
