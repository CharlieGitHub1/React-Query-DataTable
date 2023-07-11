import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 0;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;
  width: 100%;
  padding: 1rem 0;
  z-index: 1;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 0.875rem;
  padding: 0.1rem 0;
  max-width: 1200px;
  width: 100%;

  border-collapse: collapse;
  border-radius: 0.25rem;
`;

export const TableHeader = styled.thead`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 0.875rem;
  width: 100%;
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
  align-items: center;
  padding: 0.07rem 0;
  font-weight: 400;
  font-size: 0.875rem;
  width: 100%;
  border-radius: 0.2rem;
  background-color: #25213b;

  &:nth-child(even) {
    background-color: rgba(66, 51, 147, 1);
    -webkit-text-fill-color: #fff;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
    background-color: rgba(150, 270, 275, 1);
    -webkit-text-fill-color: #25213b;
    color: #25213b;
  }
`;

export const TableHeaderCell = styled.th`
  display: flex;
  color: #25213b;
  background-color: rgba(150, 270, 275, 1);
  font-weight: 900;
  font-size: 0.8rem;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  letter-spacing: -0.04rem;
  padding: 0.2rem 0;
  border-radius: 0.2rem;
`;

export const TableDataCell = styled.td`
  flex-direction: column;
  color: #fff;
  font-weight: 400;
  font-size: 0.875rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.2rem 1rem;

  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    .avatar {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background-color: rgba(66, 51, 147, 1);
      margin-right: 0.5rem;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 500;
      font-size: 0.875rem;
      text-align: left;
      margin: 0 0.5rem;
      width: 100%;
    }
  }
`;
