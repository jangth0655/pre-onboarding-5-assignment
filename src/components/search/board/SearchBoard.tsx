import localData from 'api/cacheApi';
import { useWord } from 'hooks/useWord';
import CurrentlyBoard from '../currentlyBoard/CurrentlyBoard';
import RecentlyBoard from '../recentlyBoard/RecentlyBoard';
import S from './styles';

interface Props {
  showBoarder: boolean;
}

const recentlyWords = localData.previewData();
const SearchBoard: React.FC<Props> = ({ showBoarder }) => {
  const { word } = useWord();
  const isRecentlyWords = recentlyWords.includes(word);

  return (
    <S.Container>
      {isRecentlyWords ? <RecentlyBoard /> : <CurrentlyBoard />}
    </S.Container>
  );
};
export default SearchBoard;
