import styled from 'styled-components';

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 0.875rem;
  text-align: center;
`;

export const StatusIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 18px;
  margin-right: 0.5rem;

  border-radius: 100%;
  background-color: rgba(82, 255, 0, 0.3);
  color: rgba(82, 255, 0, 1);
`;

export const StatusText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(82, 255, 0, 1);
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  text-align: left;
  margin: 0 0.1rem;

  padding: 0.2rem 0;
`;
