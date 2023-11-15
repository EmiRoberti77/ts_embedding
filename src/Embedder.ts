import { embedding_model } from './share';

export interface EmbedderParams {
  key: string;
  model: embedding_model;
  input: string;
}

class BaseEmbedder {
  protected endpoint = `https://api.openai.com/v1/embeddings`;
  protected openAIHeader(key: string) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key}`,
    };
  }
}

export class Embedder extends BaseEmbedder {
  private params: EmbedderParams;

  constructor(params: EmbedderParams) {
    super();
    this.params = params;
  }

  async createEmbedding(): Promise<any> {
    const { key, model, input } = this.params;
    console.info(this.openAIHeader(key));
    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: this.openAIHeader(key),
      body: JSON.stringify({
        model,
        input,
      }),
    });

    if (!response.ok) {
      return {
        status: false,
      };
    }

    return JSON.stringify(await response.json(), null, 2);
  }
}
