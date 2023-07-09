import styled from 'styled-components';

export const FilterPanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  /* margin: 0 auto; */
  width: 100%;
  align-items: center;
  height: auto;
  align-items: flex-start;
  padding: 0.5rem 0.5rem;
`;

export const LeftWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  align-self: flex-start;
  width: auto;
  height: auto;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: right;
  align-self: flex-end;
  width: auto;
  height: auto;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0.46rem 1rem;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 2px; */
  border: none;
  border-radius: 0px 6px 6px 0px;
  background-color: #fff;
  box-shadow: 0px 0px 0px 1px #ccc, 0px 1px 1px 0px rgba(0, 0, 0, 0.1);
  color: #333;

  &:focus {
    outline: 1px solid #5e5adb;
  }
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  font-size: 0.875rem;
  font-weight: 400;
  color: #333;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: 0px 0px 0px 1px #ccc;
  }
`;

export const NewProjectButton = styled.button`
  display: inline-flex;

  padding: 0.6rem 1rem;
  justify-content: center;
  align-items: flex-end;
  align-self: right;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 0.375rem;

  background: #5e5adb;
  border: none;
  box-shadow: 0px 0px 0px 1px #5e5adb, 0px 1px 1px 0px rgba(0, 0, 0, 0.1);

  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #5e5adb;
    transition: all 0.2s ease-in-out;
    transform: scale(1.02);
  }
`;

export const FilterButton = styled.button`
  padding: 5px;
  margin-bottom: 10px;
  background-color: #f2f2f2;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const FilterIcon = styled.span`
  margin-right: 5px;
`;

export const AllText = styled.span`
  font-weight: bold;
`;

export const ItemListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;

  /* padding: 0.5rem 0.5rem; */

  .tab-items {
    gap: 0.5rem;
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
  background-color: #5e5adb;
  padding: 0.05rem 0.5rem;
  border: none;
  width: 100%;
  font-size: 0.875rem;
  border-radius: 0.175rem 0rem 0rem 0.175rem;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

export const ItemValue = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  border: none;
  width: 24px;
  height: 21px;
  padding: 0.15rem 0.1rem;
  font-weight: 900;
  border-radius: 0px 6px 6px 0px;
  margin-right: 1rem;
  color: #5e5adb;
`;
