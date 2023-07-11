import React from 'react';
import {
  AppContainer,
  MainContainer,
  HeaderContainer,
  SectionOneWrapper,
  FooterContainer,
  FooterText,
  HeaderText,
} from './AppStyles';
import TableList from './components/data_table/TableList';
import StatusBar from './components/status_bar/StatusBar';
import SaveButton from './components/button/SaveButton';

const App = () => {
  return (
    <AppContainer>
      <HeaderContainer>
        <HeaderText>Data Table</HeaderText>
        <StatusBar />
      </HeaderContainer>
      <MainContainer>
        <SaveButton />
        <SectionOneWrapper>
          <TableList />
        </SectionOneWrapper>
      </MainContainer>
      <FooterContainer>
        <FooterText>Footer Content</FooterText>
      </FooterContainer>
    </AppContainer>
  );
};

export default App;
