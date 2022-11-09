import axios from 'axios';
import { Sick } from 'model/interface';

interface SearchService {
  sickSearch: any;
}

interface SearchParams {
  params: {
    q: string;
  };
}

const baseURL = 'http://localhost:4000';

export default class Client implements SearchService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL,
    });
  }

  sickSearch = async (params: SearchParams) => {
    return this.client.get<Sick[]>('sick', params);
  };
}
