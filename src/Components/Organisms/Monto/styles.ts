import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 8rem;
  padding: 1rem;

  @media (max-width: 950px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 750px) {
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    padding: 0;
    position: fixed;
    bottom: 0;
    box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.08);

    & button {
      width: 168px;
      height: 44px;
    }
  }
`;

export const Info = styled.div`
  font-family: "Lato", sans-serif;
  border-bottom: 1px solid #e4e8f7;
  padding-bottom: 1.125rem;

  @media (max-width: 750px) {
    border: none;

    p:nth-child(1) {
      display: none;
    }
  }
`;

export const Incluye = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 750px) {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    gap: 0.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
