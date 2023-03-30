<h1>Blogs API</h1>
<p>Este projeto é um exercício prático para aplicar conhecimentos em Node.js, Docker, SQL, JWT (autenticação de usuários), Express.js, Sequelize e APIs RESTful, focado no gerenciamento de blogs. A aplicação permite executar operações de criação, leitura, atualização e exclusão (CRUD) relacionadas a usuários, categorias e posts de blog, além de oferecer a funcionalidade de pesquisa de posts por termos específicos.</p>
<p>Desenvolvida em Node.js, a aplicação utiliza uma API para gerenciar usuários, categorias e posts de blog, bem como endpoints responsáveis pela autenticação e autorização dos usuários. O projeto é ideal para quem busca uma base sólida e moderna para desenvolver aplicações similares ou como referência para aprimorar habilidades técnicas</p>
<h2>Funcionalidades</h2>
<p>A aplicação conta com as seguintes funcionalidades:</p>
<ul>
  <li>Gestão de usuários: cadastro, login, visualização, edição e exclusão de usuários.<li>
  <li>Gestão de categorias: criação, visualização e associação a posts de blog.</li>
  <li>Gestão de posts de blog: criação, visualização, edição e exclusão de posts, além de pesquisa por termos.<li>
  <li>Autenticação e autorização de usuários: validação de tokens de acesso e proteção de rotas que exigem autenticação.</li>
</ul>
<h2>API</h2>
<p>A API para o CRUD de usuários, categorias e posts de blog conta com os seguintes endpoints:</p>
<ul>
<li>
  POST /login - realiza o login do usuário e retorna um token de acesso.
</li>
<li>
  POST /user - cria um novo usuário.
</li>
<li>
  GET /user - retorna uma lista com todos os usuários cadastrados.
</li>
<li>
  GET /user/:id - retorna as informações de um usuário específico, identificado pelo seu ID.
</li>
<li>
  DELETE /user/me - exclui o usuário autenticado.
</li>
<li>
  POST /categories - cria uma nova categoria.
</li>
<li>
  GET /categories - retorna uma lista com todas as categorias cadastradas.
</li>
<li>
  POST /post - cria um novo post de blog.
</li>
<li>
  GET /post - retorna uma lista com todos os posts de blog cadastrados.
</li>
<li>
  GET /post/:id - retorna as informações de um post de blog específico, identificado pelo seu ID.
</li>
<li>
  PUT /post/:id - atualiza as informações de um post de blog específico, identificado pelo seu ID.
</li>
<li>
  DELETE /post/:id - exclui um post de blog específico, identificado pelo seu ID.
</li>
<li>
  GET /post/search?q=:searchTerm - pesquisa posts de blog por termos e retorna os resultados.
</li>
</ul>
<h2>Como executar o projeto</h2>
<p>Para executar o projeto, siga os seguintes passos:</p>
<ol>
<li>
  Clone o repositório para sua máquina local.
</li>
<li>
  Instale as dependências do projeto utilizando o comando npm install.
</li>
<li>
  Execute o comando npm start para iniciar a aplicação.
</li>
<li>
  Utilize as rotas da API para realizar as operações desejadas.
</li>
</ol>
<h2>Considerações finais</h2>
<p>Este projeto é um exemplo prático e didático, desenvolvido para explorar e consolidar habilidades em Node.js, Docker, SQL, JWT (autenticação de usuários), Express.js, Sequelize, APIs RESTful e gerenciamento de blogs. Convido você a usar este projeto como referência, inspiração ou ponto de partida para o desenvolvimento de suas próprias aplicações. Estou aberto a dúvidas, sugestões ou feedbacks; não hesite em entrar em contato comigo.</p>