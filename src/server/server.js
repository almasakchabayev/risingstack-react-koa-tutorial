import path from 'path';
import koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import send from 'koa-send';

let app = koa();
let routes = new Router();
let server;

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

routes.get('/', function*() {
  let index = path.resolve(__dirname, '../client/index.html');
  yield send(this, index);
});

app.use(serve(PATH_DIST));
app.use(routes.middleware());

server = app.listen(process.env.PORT || 3000, () => {
  let port = server.address().port;

  console.log('Server is listening at %s', port);
});
