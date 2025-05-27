const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('what a strange game. The only winning move is not to play.'));
app.listen(3000, () => console.log('App listening on port 3000'));
