import styled from 'styled-components';

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: #25213b;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.275rem;
  padding: 1rem 0.5rem;
  margin: 1rem 0.5rem;
  width: 100vw;
  height: 100%;
  background-color: #25213b;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  width: 100%;
  padding: 1rem 0.5rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(66, 51, 147, 1);
  z-index: 1;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const HeaderText = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #fff;
`;

export const SectionOneWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.275rem;
  padding: 1rem 0.5rem;
  margin: 1rem 0.5rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  width: 100%;
  padding: 1rem 0.5rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  background-color: #25213b;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

export const FooterText = styled.p`
  font-weight: 400;
  font-size: 0.875rem;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
  }
`;
