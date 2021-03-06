const polka = require("polka");

const { PORT = 3000 } = process.env;
const serve = require("sirv")("assets");

polka()
  .use(serve)
  .get("/health", (req, res) => {
    res.end("OK");
  })
  .listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Running on localhost:${PORT}`);
  });
