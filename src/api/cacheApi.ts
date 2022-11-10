class CacheApi {
  addData = (word: string) => {
    const words: string[] = [...this.previewData(), word];
    const stringifyWord = JSON.stringify(words);
    sessionStorage.setItem('recentlyWord', stringifyWord);
  };

  previewData = (): string[] => {
    const data = sessionStorage.getItem('recentlyWord');
    return JSON.parse(data || JSON.stringify([]));
  };
}

const storage = new CacheApi();
export default storage;
