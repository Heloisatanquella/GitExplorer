# 🔍 GitExplorer

**GitExplorer** é uma aplicação React que permite visualizar informações públicas de repositórios do GitHub, incluindo suas _issues_, filtrar por abertas/fechadas/todas, e paginação. É uma ferramenta leve e prática para desenvolvedores acompanharem atividades de repositórios sem sair do navegador.

## 📝 **Table of Contents**

- [✨ Funcionalidades](#funcionalidades)
- [🚀 Tecnologias Utilizadas](#tecnologias-utilizadas)
- [📦 Instalação](#instalação)
- [📁 Estrutura de Pastas](#estrutura-de-pastas)
- [✍️ Autores](#autores)

## ✨ Funcionalidades <a name="funcionalidades"></a>

- Buscar e visualizar repositórios públicos do GitHub
- Listar issues com filtro por status: Todas, Abertas, Fechadas
- Paginação entre issues (5 por página)
- Visualização dos detalhes de cada issue, incluindo autor, título, e labels
- Interface responsiva com ícones e carregamento elegante

## 🚀 Tecnologias Utilizadas <a name="tecnologias-utilizadas"></a>

- [React](https://react.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Styled-components](https://styled-components.com/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

## 📦 Instalação <a name="instalação"></a>

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gitexplorer.git
   cd gitexplorer

   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Adicione um arquivo .env com seu token de autenticação da API do GitHub (opcional, mas recomendado para evitar erros 403):

   ```bash
   REACT_APP_GITHUB_TOKEN=seu_token_aqui
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```

## 📁 Estrutura de Pastas <a name="estrutura-de-pastas"></a>
    
    .
    ├── .env                # Variáveis de ambiente (ex: token do GitHub)
    ├── .gitignore          # Arquivos e pastas ignoradas pelo Git
    ├── README.md           # Documentação do projeto
    ├── package.json        # Dependências e scripts do projeto
    ├── package-lock.json   # Mapa exato das dependências
    ├── node_modules/       # Dependências instaladas
    ├── public/             # Arquivos estáticos e index.html
    └── src/
        ├── App.js          # Componente principal
        ├── index.js        # Ponto de entrada do React
        ├── routes.js       # Definição de rotas da aplicação
        ├── pages/
        │   ├── Home/       # Tela inicial onde o usuário insere o repositório
        │   └── Repos/      # Visualização das issues do repositório buscado
        ├── services/       # Configuração do Axios para chamadas à API do GitHub
        └── styles/         # Estilização global 

## **✍️ Autores** <a name="autores"></a>

- [@HeloisaTanquella](https://github.com/Heloisatanquella)