import express from 'express';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', taskRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
