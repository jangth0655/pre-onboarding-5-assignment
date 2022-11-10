class CacheApi {
  addData = (keyword: string) => {
    sessionStorage.setItem(keyword, keyword);
  };

  previewData = (keyword: string) => {
    const data = sessionStorage.getItem(keyword);
    return data;
  };
}

const localData = new CacheApi();
export default localData;
