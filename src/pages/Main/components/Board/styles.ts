import styled from "styled-components";

export const MainUI = styled.main`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media (max-width: 31.25rem) {
    & {
      padding: 0 1rem;
    }
  }
`;

export const BlockUI = styled.div`
  flex: 1;
  min-width: 33%;
  padding: 1rem;
  border: 0.05rem solid;
  border-left: 0.5rem solid;
  border-radius: 1rem;
  border-color: ${({ color }) => color};
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 10%);
  background: #fcfcfc;

  h2 {
    margin-bottom: 0.25rem;
  }

  @media (max-width: 50rem) {
    & {
      min-width: 100%;
    }
  }
`;
