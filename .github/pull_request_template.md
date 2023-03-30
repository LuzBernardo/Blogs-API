## Projeto Blogs API  

## O que devo desenvolver?

Você desenvolverá uma API e um banco de dados para a produção de conteúdo para um blog! Para isso, desenvolverá uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts. Assim, você deve:

- Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Trabalhar a relação user e post, visto que para fazer um post é necessário usuário e login
- Trabalhar a relação de posts para categories e de categories para posts, visto que será necessária a utilização categorias para os posts.

#### Abrir essa Issue e o PR

- [ ] Abrir Issue
- [ ] Abri o PR

## Revisão de conteúdo:

#### Material necessário:
 - [ ] [Dia 01: ORM - Interface da aplicação com o banco de dados](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/cded531f-0317-4c34-9914-c9ba59ca1f02)
 - [ ] [Dia 02: ORM - Associations 1:1 e 1:N](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/1f2a47c4-5a3c-411c-89cd-27190966915e)
 - [ ] [Dia 03: ORM - Associations N:N e Transactions](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/be289f53-bd25-4a5f-817e-1770bbf006b4)
- [ ] [Dia 04: JWT - (JSON Web Token)](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/85fd2ed3-f6cc-4789-8990-7f5fe827422c/lesson/c93a3302-ddd6-4927-8c09-bf5307b5c492)


#### Pré-Requisitos do Projeto:
- [ ] Rodar o docker com mysql e nodejs ou testar localmente as configurações em sua máquina
- [ ] Efetuar a leitura das Informações importantes sobre o projeto, dicas, como o modelo do banco de dados será criado e utilizado

#### Requisitos obrigatórios do Projeto:
- [ ] 1 - Crie migrations para as entidades User, Categories, BlogPosts, PostCategories 
- [ ] 2 - Crie o modelo 'User' em 'src/database/models/user.js' com as propriedades corretas 
- [ ] 3 - Sua aplicação deve ter o endpoint POST /login 
- [ ] 4 - Sua aplicação deve ter o endpoint POST /user 
- [ ] 5 - Sua aplicação deve ter o endpoint GET /user 
- [ ] 6 - Sua aplicação deve ter o endpoint GET /user/:id 
- [ ] 7 - Crie o modelo 'Category' em 'src/database/models/category.js' com as propriedades corretas
- [ ] 8 - Sua aplicação deve ter o endpoint POST /categories 
- [ ] 9 - Sua aplicação deve ter o endpoint GET /categories
- [ ] 10 - Crie o modelo 'BlogPost' em 'src/database/models/blogPost.js' com as propriedades e associações corretas 
- [ ] 11 - Crie o modelo 'PostCategory' em 'src/database/models/postCategory.js' com as propriedades e associações corretas 
- [ ] 12 - Sua aplicação deve ter o endpoint POST /post 
- [ ] 13 - Sua aplicação deve ter o endpoint GET /post 
- [ ] 14 - Sua aplicação deve ter o endpoint GET /post/:id 
- [ ] 15 - Sua aplicação deve ter o endpoint PUT /post/:id 

#### Requisitos bônus do Projeto:
- [ ] 16 - Sua aplicação deve ter o endpoint DELETE /post/:id
- [ ] 17 - Sua aplicação deve ter o endpoint DELETE /user/me
- [ ] 18 - Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm
