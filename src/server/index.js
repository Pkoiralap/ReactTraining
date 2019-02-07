import Hapi from 'hapi';
import Inert from 'inert';
import routes from './routes';
import db, {initDatabase} from './database';

async function StartServer() {
  const app = new Hapi.server({
    port: 4000,
  });
  await app.register(Inert)
  routes.forEach(route => {
    app.route(route);
  })
  await app.start();
  console.log('started a server at http://localhost:4000')
}


initDatabase();
StartServer().catch(error => console.log(error));