import fs from 'node:fs/promises';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // Allow frontend to access API
app.use(express.json()); // Parse JSON requests

app.get('/', async (req, res)=>{

  res.status(200).send(await fs.readFile('./index.html', 'utf-8'));
  
});

app.get('/tasks', async (req, res)=>{
  try {
    const fileData = await fs.readFile('./data/user-data.json', 'utf-8');
    const tasksData = JSON.parse(fileData);

    res.status(200).json({ tasks: tasksData }); // Always return structured JSON
  } catch (error) {
    res.status(500).json({ message: 'Error reading tasks', error: error.message });
  }
});



app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});