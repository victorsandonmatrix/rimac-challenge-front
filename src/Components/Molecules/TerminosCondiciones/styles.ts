import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  margin-bottom: 2.5rem;
  width: 296px;

  span {
    text-decoration: underline;
    cursor: pointer;
  }

  input[type="checkbox"] {
    border-radius: 0.25rem;
    background-color: #43b748;
    transition: 120ms transform ease-in-out;
    border: none;

    :checked {
      appearance: none;
    }

    ::before {
      display: flex;
      justify-content: center;
      align-items: center;
      content: "✓";
      color: #fff;
      width: 20px;
      height: 20px;
    }
  }
`;
