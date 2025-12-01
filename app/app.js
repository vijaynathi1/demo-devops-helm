const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "hello from POC", commit: process.env.GIT_COMMIT || 'local' });
});
app.get('/health', (req, res) => res.send('ok'));

app.listen(port, () => console.log(`App listening on ${port}`));
