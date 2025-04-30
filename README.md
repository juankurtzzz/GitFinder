# GitFinder 🔍🐙

Aplicação React para buscar e exibir informações públicas de perfis e repositórios do GitHub de forma simples e direta.

## 🧠 Sobre o projeto

O **GitFinder** é uma aplicação que consome a [API pública do GitHub](https://api.github.com) e permite:

- Buscar usuários do GitHub por nome de usuário (`@username`)
- Exibir informações do perfil (nome, avatar, bio)
- Listar os repositórios públicos daquele usuário

## 🚀 Tecnologias utilizadas

- **React** com Vite
- **CSS Modules**
- **Fetch API** para requisições HTTP
- Estrutura modular de componentes

## 📁 Estrutura do projeto
src/ ├── assets/ # Imagens e SVGs │ └── GitHub.svg ├── components/ # Componentes reutilizáveis │ ├── Button/ │ ├── Header/ │ ├── Input/ │ └── ItemList/ ├── pages/ │ └── home/ # Página principal │ ├── Home.jsx │ └── HomeStyle.css ├── index.css # Estilos globais ├── main.jsx # Entry point da aplicação
