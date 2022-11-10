import localData from 'api/cacheApi';
import { useTerm } from 'hooks/useTerm';
import S from './styles';

interface Props {
  active: boolean;
}

const recentlyWords = localData.previewData();
const SearchBoard: React.FC<Props> = ({ active }) => {
  const { terms } = useTerm();
  const emptyTerms = terms.length === 0;
  const isRecentlyWords = recentlyWords.length !== 0;

  return <S.Container />;
};
export default SearchBoard;
