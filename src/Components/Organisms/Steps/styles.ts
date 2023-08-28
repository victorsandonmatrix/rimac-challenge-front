import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f7f8fc;
  display: flex;
  justify-content: center;
  width: 250px;

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.75rem;
  margin-top: 3.25rem;
`;
