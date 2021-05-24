const express = require('express');
const route = require('./routes');
const middlewares = require('./middlewares');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app
  .use('/user', route.userRoute)
  .use('/categorie', route.categorieRoute)
  .use('/post', route.blogPostRoute)
  .use('/login', route.loginRoute)
  .use(middlewares.errorMiddleware);

app.listen(PORT, () => console.log(`ouvindo porta ${PORT}!`));
