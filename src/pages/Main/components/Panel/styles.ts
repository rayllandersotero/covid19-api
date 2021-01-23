import styled from "styled-components";

export const HeaderUI = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 10%);
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  gap: 2rem;

  h1 {
    font-size: 2.5rem;
    color: firebrick;
    text-shadow: -0.05rem 0 0.1rem black, 0 0.05rem 0.1rem black,
      0.05rem 0 0.1rem black, 0 -0.05rem 0.1rem black;
  }

  @media (max-width: 50rem) {
    & {
      flex-direction: column;
    }
  }
`;

export const InfoUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  width: 100%;
  gap: 1rem;

  @media (max-width: 50rem) {
    & {
      justify-content: center;
    }
  }

  @media (max-width: 28.125rem) {
    & {
      flex-direction: column;
    }
  }
`;

export const SelectDivUI = styled.div`
  flex: 1;
  width: 100%;
  max-width: 50%;
  box-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 10%);
  transition: all 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.98);
  }
`;

export const LabelUI = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    object-fit: cover;
    object-position: center;
    width: 1.5rem;
  }
`;
