import React from 'react';
import { AppContainer, MainContainer } from './AppStyles';
import TableList from './components/data_table/TableList';

const App = () => {
  return (
    <AppContainer>
      <MainContainer>
        <h6>MAIN CONTENT</h6>
        <TableList />
      </MainContainer>
    </AppContainer>
  );
};

export default App;
