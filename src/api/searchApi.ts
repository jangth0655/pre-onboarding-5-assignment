import Client from './client';

export default class SearchApi {
  constructor(private apiClient: Client) {}

  sickSearch = async (keyword: string) => {
    return this.apiClient
      .sickSearch({
        params: {
          q: keyword,
        },
      })
      .then((res) => res.data);
  };
}
