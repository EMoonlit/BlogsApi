const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const route = require('./routes');
const middlewares = require('./middlewares');
const { BlogPostsController } = require('./controllers');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/post/search', middlewares.authMiddleware, BlogPostsController.getPostByQueryParam);

app
  .use('/user', route.userRoute)
  .use('/categories', route.categorieRoute)
  .use('/post', route.blogPostRoute)
  .use('/login', route.loginRoute)
  .use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
  .use(middlewares.errorMiddleware);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
