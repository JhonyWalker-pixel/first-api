const { readFileSync } = require('fs');
const { join } = require('path');
const { serve, setup } = require('swagger-ui-express');
const { load } = require('js-yaml');
const app = require('./config/express')();

const port = app.get('port');

const swaggerDocument = readFileSync(
  join(__dirname, './docs/api-doc.yaml'),
  'utf8'
);

const swaggerData = load(swaggerDocument);

// api documentation
app.use('/docs', serve, setup(swaggerData));

// Rodando nossa aplicação na porta setada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
