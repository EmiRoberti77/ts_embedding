import dotenv from 'dotenv';
import { Embedder } from './Embedder';
import { embedding_model } from './share';
dotenv.config();

const embedder = new Embedder({
  input: 'hello this is a embedding test',
  model: embedding_model.text_embedding_ada_002,
  key: process.env.OPENAI_API_KEY || 'noKey',
});

embedder.createEmbedding().then((success) => console.log(success));
