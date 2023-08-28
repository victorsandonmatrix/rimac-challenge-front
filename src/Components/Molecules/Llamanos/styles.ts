import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 768px) {
    & p {
      display: none;
    }
  }
`;

export const Phone = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;

  & :nth-child(3) {
    display: none;
  }

  @media (max-width: 768px) {
    & :nth-child(2) {
      display: none;
    }

    & :nth-child(3) {
      display: block;
    }
  }
`;
