import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.2rem;

  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e0e0e0;
  border-radius: 0.25rem;
`;

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #25213b;
  font-weight: 600;
  font-size: 0.875rem;

  width: 95%;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  font-weight: 400;
  font-size: 0.875rem;

  width: 100%;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;

  font-weight: 400;
  font-size: 0.875rem;

  padding: 1rem 0.5rem;
  width: 100%;

  border-radius: 0.25rem;
  background-color: #fff;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
  }
`;

export const TableHeaderCell = styled.th`
  display: flex;
  color: #25213b;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2rem 0.2rem;
  margin: 0 0.5rem;
`;

export const TableDataCell = styled.td`
  display: flex;
  flex-direction: column;

  color: gray;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: center;
  justify-content: center;
  align-items: left;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: center;

    color: gray;
    font-weight: 400;
    font-size: 0.875rem;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 30px;
      background-color: #5e5adb;
      border-radius: 50%;
      border: 1px solid #e0e0e0;
      margin-right: 1rem;
      padding: 0.5rem;
      margin: 0 0.5rem;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: gray;
      font-weight: 500;
      font-size: 0.875rem;
      text-align: left;
      margin: 0 0.25rem;
      width: 100%;
    }
  }
`;
