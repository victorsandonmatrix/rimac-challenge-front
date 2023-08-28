import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #f0f2fa;
  border-radius: 0.75rem;
  gap: 1rem;
  width: 384px;

  @media (max-width: 750px) {
    width: 300px;
    margin-top: 1.5rem;
    padding-left: 1.5rem;
    background-color: #fff;
    border: none;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.08);
    align-self: center;
  }
`;

export const Info = styled.div`
  width: 192px;
`;
