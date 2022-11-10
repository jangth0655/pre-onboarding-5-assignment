import localData from 'api/cacheApi';
import { useTerm } from 'hooks/useTerm';
import CurrentlyBoard from '../currentlyBoard/CurrentlyBoard';
import RecentlyBoard from '../recentlyBoard/RecentlyBoard';
import S from './styles';

interface Props {
  active: boolean;
}

const recentlyWords = localData.previewData();
const SearchBoard: React.FC<Props> = ({ active }) => {
  const { term } = useTerm();
  const isRecentlyWords = recentlyWords.includes(term);

  return (
    <S.Container>
      {isRecentlyWords ? <RecentlyBoard /> : <CurrentlyBoard />}
    </S.Container>
  );
};
export default SearchBoard;
