const express = require('express');

const app = express();

app.use(express.static('./dist/customer-client-web'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/customer-client-web/'}
  );
});

app.listen(process.env.PORT || 8080);