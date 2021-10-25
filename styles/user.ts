import { css } from '@emotion/react';

export const centerLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const formLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 58.8rem;
  height: 66.2rem;
  padding: 0.8rem 10.2rem 4.8rem;
  // 나중에 지우기
  margin-top: 50px;
  button {
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const fieldLayout = css`
  margin-bottom: 1.4rem;

  input {
    margin-bottom: 0.5rem;
  }

  & > div {
    padding-left: 0.7rem;
    font-size: 1.2rem;
    color: red;
  }

  &:last-of-type {
    margin-bottom: 1.8rem;
  }
`;

export const inputDefault = css`
  width: 38.4rem;
  height: 6.1rem;
  font-size: 2.4rem;
  text-align: center;
  border: 2px solid #eae9ea;
  border-radius: 12px;
`;

export const inputError = css`
  border-color: red;
`;

export const checkboxLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.4rem;

  div {
    color: red;
  }
`;

export const checkField = css`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 2.4rem;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  color: #000;

  /* Hide default checkbox */
  input {
    width: 0;
    height: 0;
    position: absolute;
    opacity: 0;
  }

  /* Custom checkbox */
  span {
    width: 1.7rem;
    height: 1.7rem;
    position: absolute;
    top: -1px;
    left: 0;
    background-color: #e5e5e5;
  }

  // input 안에 들어갈 check
  span::after {
    display: none;
    width: 0.6rem;
    height: 1.2rem;
    position: absolute;
    left: 3px;
    bottom: 2px;
    content: '';
    border: solid #278eeb;
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  // check 상태로 변하면 check icon이 보임
  input:checked ~ span::after {
    display: block;
  }
`;
