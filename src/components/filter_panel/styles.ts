import styled from 'styled-components';

export const FilterPanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  width: 100%;
  align-items: center;
  height: auto;
  align-items: flex-start;
`;

export const LeftWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  align-self: flex-start;
  margin-bottom: 2.5rem;
  width: 50%;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 65%;
  padding: 0.472rem 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  border: 1px solid rgba(66, 51, 147, 1);
  border-radius: 0px 0.2rem 0.2rem 0px;
  background-color: #fff;

  color: rgba(66, 51, 147, 1);

  &:focus {
    outline: 1px solid #3f3d56;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: 400;
  color: #25213b;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #25213b;
  }
`;

export const NewProjectButton = styled.button`
  display: inline-flex;
  padding: 0.772rem 2rem;
  justify-content: center;
  align-items: flex-end;
  align-self: right;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.2rem;
  background-color: rgba(66, 51, 147, 1);
  border: none;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(150, 270, 275, 1);
    color: rgba(66, 51, 147, 1);
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`;

export const ItemListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  .tab-items {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const ItemLabel = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: 600;
  background-color: none;
  padding: 0.1rem 4rem;
  border: none;
  width: 100%;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  color: #fff;
  background-color: rgba(66, 51, 147, 1);
  margin-right: 0.5rem;
  align-items: center;
`;

export const ItemValue = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  border: none;
  width: 14px;
  height: 14px;
  padding: 0.5rem 0.5rem;
  border: 1px solid rgba(150, 270, 275, 1);
  margin: 0 0.2rem;
  font-weight: 900;
  border-radius: 20%;
  margin-right: 1rem;
  background-color: rgba(66, 51, 147, 1);
  color: rgba(150, 270, 275, 1);
`;
