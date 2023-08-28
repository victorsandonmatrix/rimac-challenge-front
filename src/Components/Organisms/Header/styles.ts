import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid #e4e8f7;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 1.25rem;
    padding-left: 2rem;
    padding-right: 2rem;
    justify-content: space-between;
    background: #f7f8fc;
    border-bottom: none;
  }
`;
