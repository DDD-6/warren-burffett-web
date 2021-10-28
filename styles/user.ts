import { css } from '@emotion/react';

export const centerLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const formLayout = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 37.6rem;
  /* button {
    margin-bottom: 1rem;

    &:hover {
      cursor: pointer;
    }
  } */
`;

export const fieldLayout = css`
  width: 100%;
  margin-bottom: 3.6rem;

  input::placeholder {
    color: #cfcfcf;
  }

  & > div {
    margin-top: 0.4rem;
    font-size: 1.4rem;
    line-height: 137%;
    color: #fd4e4e;
  }

  &:last-of-type {
    margin-bottom: 4.8rem;
  }
`;

export const underlineInput = css`
  width: 100%;
  height: 3.9rem;
  padding-bottom: 1.2rem;
  font-size: 2rem;
  line-height: 137%;
  border: none;
  border-bottom: 1.5px solid #000;
  color: #202020;
`;

export const grayUnderlineInput = css`
  border-bottom-color: #b9b9b9;
`;

export const limeUnderlineInput = css`
  border-bottom-color: #dbeb27;
`;

export const inputError = css`
  border-bottom-color: #fd4e4e;
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
  color: var(--black);

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
    background-color: var(--background-checkbox);
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
    border: solid var(--button-login);
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

export const font24 = css`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.1;
  letter-spacing: -0.05em;
`;

export const fontGray = css`
  margin-bottom: 5.3rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.8;
  letter-spacing: -0.05em;
  text-align: center;
  color: var(--font-gray);
`;
