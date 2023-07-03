import styled from 'styled-components';

export const DataTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;

export const TableCell = styled.th`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  &:hover {
    background-color: #ddd;
  }
`;

export const TableData = styled.td`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
`;
