import styled from 'styled-components';

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: center;
  align-items: center;

  margin: 0.5rem 0.2rem;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.375rem;

  background-color: transparent;

  font-weight: 600;

  .reconnect {
    display: flex;
    justify-content: center;
    align-items: center;
    color: linear-gradient(
        90deg,
        rgba(82, 255, 0, 1) 0%,
        rgba(82, 255, 0, 1) 50%,
        rgba(82, 255, 0, 0.3) 50%,
        rgba(82, 255, 0, 0.3) 100%
      )
      0% 0% no-repeat padding-box;
    letter-spacing: 0.05rem;
    font-size: 0.875rem;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0.2rem;
  border: none;
  cursor: pointer;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;

    letter-spacing: -0.02rem;

    font-weight: 700;
    color: rgba(150, 270, 275, 0.4);
    text-transform: uppercase;

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;
      width: 24px;
      height: 24px;
      margin-bottom: 0.2rem;
      fill: rgba(150, 270, 275, 0.4);
      stroke: rgba(150, 270, 275, 0.4);
      stroke-width: 0.8px;
    }

    &:hover {
      svg {
        fill: rgba(150, 270, 275, 1);
        stroke: rgba(150, 270, 275, 1);

        transition: all 0.2s ease-in-out;
        transform: scale(1.02);

        cursor: pointer;
      }

      span {
        color: rgba(150, 270, 275, 1);
        transition: all 0.2s ease-in-out;
        transform: scale(1.02);
      }
    }
  }
`;
