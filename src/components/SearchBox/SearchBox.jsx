// Core
import { useSearchParams } from 'react-router-dom';

// Styles
import { Wrapper, Input, Icon } from './SearchBox.styled';

export const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const nextParams = name !== '' ? { name } : {};
    setSearchParams(nextParams);
  };

  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={movieName}
        debounceTimeout={300}
        onChange={e => updateQueryString(e.target.value)}
      />
    </Wrapper>
  );
};
