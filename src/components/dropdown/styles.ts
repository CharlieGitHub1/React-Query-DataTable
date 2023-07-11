import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  border: none;
`;

export const DropdownButton = styled.button`
  display: flex;
  padding: 0.592rem 0.45rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.2rem 0rem 0rem 0.2rem;
  background: rgba(66, 51, 147, 1);
  border: none;

  span {
    background-color: transparent;
    font-weight: 600;
    font-size: 0.875rem;
    color: #fff;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  list-style-type: none;
  padding: 0;
  padding-top: 8px;
  margin: 0;
  border: 1px solid #cccccc;
  border-top: none;
`;

export const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(66, 51, 147, 1);
  }
`;
