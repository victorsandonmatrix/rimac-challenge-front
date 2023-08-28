import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding-top: 3rem;
  background: #ecf0ff;
  flex-direction: column-reverse;
  justify-content: flex-end;

  & img:nth-child(2) {
    display: none;
  }

  @media (min-width: 768px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    background: linear-gradient(180deg, #f7f8fc 92%, white 8%);

    & img:nth-child(3) {
      display: none;
    }

    & img:nth-child(2) {
      display: block;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  width: 210px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.text.titles};
  margin-bottom: 1rem;

  & :nth-child(2),
  & :nth-child(3) {
    color: ${({ theme }) => theme.colors.brand.red};
  }

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    margin-top: 0.5rem;

    & :nth-child(2) {
      color: ${({ theme }) => theme.colors.text.titles};
    }
  }
`;
