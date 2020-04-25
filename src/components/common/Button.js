import styled, { css } from "styled-components";

export const Button = styled.button`
  ${(p) =>
    p.large
      ? css`
          padding: 10px;
          border-radius: 8px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}

  color: #fff;
  background-color: ${(props) => (props.secondary ? `#fdd54f` : `#f8049c`)};
  font-weight: 8px;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  text-align: center;
  margin: 10px 0;

  &:disabled {
    background-color: #eee;
    color: #666;
  }
`;
