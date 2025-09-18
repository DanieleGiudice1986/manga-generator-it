const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

app.post('/generate-manga', async (req, res) => {
  try {
    const { title, genre, description } = req.body;
    // Placeholder simple response
    const scenes = [];
    for(let i=1; i<=40; i++) {
      scenes.push({ sceneId: i, text: `Scena ${i} di un manga basato su ${title}`, imagePrompt: `${genre} manga scena ${i}`, imageUrl: '' });
    }
    res.json({ title, genre, description, scenes });
  } catch(e) {
    res.status(500).send(e.message);
  }
});

const port = 3001;
app.listen(port, () => console.log(`Backend server listening on port ${port}`));
