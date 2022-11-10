import localData from 'api/cacheApi';
import BoardSubTitle from '../board/boardSubTitle/BoardSubTitle';
import Word from '../word/Word';

const recentlyWords = localData.previewData();
const RecentlyBoard = () => {
  return (
    <ul>
      <BoardSubTitle title="최근 검색어" />
      {recentlyWords.map((word) => (
        <Word key={word} word={word} />
      ))}
    </ul>
  );
};
export default RecentlyBoard;
