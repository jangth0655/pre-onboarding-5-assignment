import Client from './clientApi';

export default class SearchApi {
  constructor(private apiClient: Client) {}

  sickSearch = async (keyword: string) => {
    const result = (
      await this.apiClient.sickSearch({
        params: {
          q: keyword,
        },
      })
    ).data;
    return result;
  };
}
