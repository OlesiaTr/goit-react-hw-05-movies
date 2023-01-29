// Utils
import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';
import { DebounceInput } from 'react-debounce-input';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

export const Input = styled(DebounceInput)`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
