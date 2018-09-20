const Koa = require("koa");
const bodyParser = require("koa-body");
const messagesRoutes = require("./routes/routes");
const PORT = 3000;

const app = new Koa();

app.use(bodyParser());
app.use(messagesRoutes.routes());

app.listen(PORT, console.log(`app listening on port ${PORT}`));
