import styled from 'styled-components';

export const AppContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: white;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.4);
    padding: 0 0.5rem;
    height: 40px;

    button {
      background: blue;
      border: none;
      padding: 0.3rem 0.5rem;
      margin: 0;
      cursor: pointer;
      border-radius: 0.25rem;
      svg {
        font-size: 1.3rem;
        color: #fff;
      }
    }
  }

  menu-icon-btn {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  menu-icon {
    width: 25px;
    height: 25px;
    fill: rgb(96, 96, 96);
    cursor: pointer;
  }

  menu-icon:hover {
    fill: #282c34;
  }

  middle-sidebar {
    overflow-y: auto;
    overflow-x: hidden;
    flex-grow: 1;

    margin: 1rem 0;
  }
  bottom-sidebar {
    margin-top: auto;
  }

  sidebar-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
  }

  sidebar-icon {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
  }

  sidebar-link {
    display: flex;
    width: 100%;
    padding: 0.5rem 0;
    color: rgb(96, 96, 96);
    text-decoration: none;
    align-items: center;
    padding-left: 25px;
  }

  sidebar-list-item {
    position: relative;
    width: 100%;
    fill: rgb(144, 144, 144);

    &::before {
      content: '';
      background-color: rgb(17, 37, 78);
      height: 100%;
      left: 0;
      width: 3px;
      position: absolute;
    }

    &::active {
      fill: rgb(17, 37, 78);
      background-color: rgb(244, 244, 244);
    }

    &:hover {
      background-color: rgb(244, 244, 244);
    }
  }

  your-channel {
    color: #282c34;
    font-size: 0.75rem;
    font-weight: bold;
    margin-bottom: 0.15rem;
    margin-top: 0.5rem;
  }

  channel-name {
    color: rgb(96, 96, 96);
    font-size: 0.75rem;
  }

  hidden-sidebar {
    text-align: center;
    width: 100%;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.5rem;
  max-width: 1100px;

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

  width: 100%;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;

  width: 100%;
`;

export const TableRow = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 0.875rem;
  /* margin: 0; */
  padding: 1rem;
  width: 100%;

  border-radius: 0.25rem;
  background-color: #fff;

  &:nth-child(even) {
    background-color: #f5f5f5;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableHeaderCell = styled.th`
  color: #25213b;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  width: 100%;
  padding: 0.5rem 0.5rem;
  margin: 0;
`;

export const TableDataCell = styled.td`
  display: flex;
  flex-direction: column;

  color: gray;
  font-weight: 400;
  font-size: 0.875rem;
  text-align: left;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.5rem;
  margin: 0 0.5rem;

  & > div {
    display: flex;

    justify-content: center;
    align-items: center;
    color: gray;
    font-weight: 400;
    font-size: 0.875rem;
    text-align: left;

    img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
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
