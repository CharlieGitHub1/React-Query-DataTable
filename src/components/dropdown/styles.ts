import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  border: none;
`;

export const DropdownButton = styled.button`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 0.375rem 0rem 0rem 0.375rem;
  background: #5e5adb;
  border: none;
  box-shadow: 0px 0px 0px 1px #5e5adb, 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  color: white;

  span {
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
  }

  svg {
    color: white;
    font-size: 1rem;

    margin: 4px 0px 0px 0px;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
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
    background-color: #f0f0f0;
  }
`;
