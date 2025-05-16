const express = require('express');

const app = express();

const PORT = env.process.PORT||3000;

app.listen(PORT, () => {
  console.log(`Server is Listening on http://localhost:${PORT}`);
})