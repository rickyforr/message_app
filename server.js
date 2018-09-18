const Koa = require("koa");
const bodyParser = require("koa-body");
const messagesRoutes = require("./routes/messages");
const statRoutes = require("./routes/stats");

const app = new Koa();

app.use(bodyParser());
app.use(messagesRoutes.routes());
app.use(statRoutes.routes());

app.listen(3000);
