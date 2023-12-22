import express from 'express';
import { getPlayerData } from './requests/getManagerData.js';


const app = express();
const port = 3000;

app.use(express.json())

app.post('/', async (req, res) => {
  const { managerId } = req.body;
  // Ensure the required parameter is provided
  if (!managerId) {
    return res.status(400).json({ error: 'Missing managerId parameter' });
  }
  res.send(await getPlayerData(managerId))
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
