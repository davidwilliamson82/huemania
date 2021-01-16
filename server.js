const express = require('express');
const app = express()
var jokesRouter = require('./routes/jokes.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/jokes', jokesRouter);

app.post('/', (req, res) => {
  console.log({ requestBody: req.body });
  res.send({ response: req.body })
});

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Listening on port: ${port}`));