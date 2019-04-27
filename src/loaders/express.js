import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export default async ({ app }) => {
  app.get('/status', (req, res) => { res.status(200).end(); });
  app.head('/status', (req, res) => { res.status(200).end(); });
  app.enable('trust proxy');

  // accept all cross origin requests§
  app.use(cors());

  // Log requests to the console.
  app.use(morgan('dev'));

  // Parse incoming requests data
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // Return the express app
  return app;
};
