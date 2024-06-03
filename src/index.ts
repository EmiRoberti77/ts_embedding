import dotenv from 'dotenv';
import { Embedder } from './Embedder';
import { embedding_model } from './share';
dotenv.config();

const embedder = new Embedder({
  input: 'emi is testing embedding',
  model: embedding_model.text_embedding_3_small,
  key: process.env.OPENAI_API_KEY || 'noKey',
});

embedder.createEmbedding().then((success) => console.log(success));
