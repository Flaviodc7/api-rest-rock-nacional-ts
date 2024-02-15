import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectoToMongoDB } from './infra/db/mongo';
import { loadRoutes } from '@routes/index';

const PORT = process.env.PORT ?? 3001;

const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: '*' }));
app.use(express.json());
loadRoutes(app);

app.use('/artist/health', (_req, res) => {
  res.send('Hi World from Artists!');
});

app.listen(PORT, async () => {
  console.log(`Listening port ${PORT}`);
  await connectoToMongoDB();
});
