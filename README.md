Blogs API
Este projeto consiste em uma aplicação de gerenciamento de blogs, onde é possível realizar as operações de criação, leitura, atualização e exclusão (CRUD) de informações relacionadas a usuários, categorias e posts de blog, além de pesquisar posts por termos.

A aplicação foi desenvolvida em Node.js utilizando uma API para o CRUD de usuários, categorias e posts de blog e endpoints que realizam autenticação e autorização dos usuários.

Funcionalidades
A aplicação conta com as seguintes funcionalidades:

Gestão de usuários: cadastro, login, visualização, edição e exclusão de usuários.
Gestão de categorias: criação, visualização e associação a posts de blog.
Gestão de posts de blog: criação, visualização, edição e exclusão de posts, além de pesquisa por termos.
Autenticação e autorização de usuários: validação de tokens de acesso e proteção de rotas que exigem autenticação.
API
A API para o CRUD de usuários, categorias e posts de blog conta com os seguintes endpoints:

POST /login: realiza o login do usuário e retorna um token de acesso.
POST /user: cria um novo usuário.
GET /user: retorna uma lista com todos os usuários cadastrados.
GET /user/:id: retorna as informações de um usuário específico, identificado pelo seu ID.
DELETE /user/me: exclui o usuário autenticado.
POST /categories: cria uma nova categoria.
GET /categories: retorna uma lista com todas as categorias cadastradas.
POST /post: cria um novo post de blog.
GET /post: retorna uma lista com todos os posts de blog cadastrados.
GET /post/:id: retorna as informações de um post de blog específico, identificado pelo seu ID.
PUT /post/:id: atualiza as informações de um post de blog específico, identificado pelo seu ID.
DELETE /post/:id: exclui um post de blog específico, identificado pelo seu ID.
GET /post/search?q=:searchTerm: pesquisa posts de blog por termos e retorna os resultados.
Como executar o projeto
Para executar o projeto, siga os seguintes passos:

Clone o repositório para sua máquina local.
Instale as dependências do projeto utilizando o comando npm install.
Execute o comando npm start para iniciar a aplicação.
Utilize as rotas da API para realizar as operações desejadas.
Considerações finais
Este projeto foi desenvolvido como um exercício para aplicar conhecimentos em Node.js, Docker, SQL, JWT (para autentificação de usuário), Express.js, Sequelize, APIs RESTful e gerenciamento de blogs. Sinta-se à vontade para utilizá-lo como referência ou como base para o desenvolvimento de projetos similares. Em caso de dúvidas ou sugestões, entre em contato.