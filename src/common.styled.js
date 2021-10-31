import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const styleTextShadow = {
  textShadow:
    "1px 1px 0 var(--accent-color-orange), 1px -1px 0 var(--accent-color-orange), -1px 1px 0 var(--accent-color-orange),-1px -1px 0 var(--accent-color-orange)",
};
export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 2px;
  font-weight: 700;
  font-size: ${(props) => `${props.fontSize.s}px`};
  text-shadow: 1px 1px 0 var(--color-gray), 1px -1px 0 var(--color-gray),
    -1px 1px 0 var(--color-gray), -1px -1px 0 var(--color-gray);
  color: var(--accent-color-black07);
  transition: all var(--animation-duration) var(--timing-function);
  &:hover,
  &:focus {
    text-shadow: 1px 1px 0 var(--color-white), 1px -1px 0 var(--color-white),
      -1px 1px 0 var(--color-white), -1px -1px 0 var(--color-white);
  }
  @media (min-width: 420px) {
    & {
      font-size: ${(props) => `${props.fontSize.m}px`};
      padding: 4px;
    }
  }
  @media (min-width: 768px) {
    & {
      font-size: ${(props) => `${props.fontSize.p}px`};
      padding: 9px;
    }
  }
  @media (min-width: 1200px) {
    & {
      font-size: ${(props) => `${props.fontSize.d}px`};
      padding: 12px;
    }
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  border: 2px solid var(--accent-color-orange);
  border-radius: 0.6em;
  text-shadow: 1px 1px 0 var(--color-gray08), 1px -1px 0 var(--color-gray08),
    -1px 1px 0 var(--color-gray08), -1px -1px 0 var(--color-gray08);
  border-color: var(--accent-color-orange);
  box-shadow: 0 0 40px 40px var(--accent-color-orange) inset,
    0 0 0 0 var(--accent-color-orange);
  -webkit-transition: all var(--animation-duration) ease-in-out;
  transition: all var(--animation-duration) var(--timing-function);
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  font-size: 15px;
  margin: ${(props) => props?.margin};
  line-height: 1;
  padding: 5px 12px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;

  &:hover,
  &:focus {
    outline: 0;
    box-shadow: 0 0 10px 0 var(--accent-color-orange) inset,
      0 0 10px 4px var(--accent-color-orange);
    text-shadow: 1px 1px 0 ${(props) => props.textShadowColor},
      1px -1px 0 ${(props) => props.textShadowColor},
      -1px 1px 0 ${(props) => props.textShadowColor},
      -1px -1px 0 ${(props) => props.textShadowColor};
  }
  @media screen and (max-width: 785px) {
    padding: 2px 6px;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  margin: 10px 0;
  padding: 4px 10px;
  width: 100%;
  height: 28px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid var(--color-input-border);
  border-left: none;
  background-color: var(--color-gray);
  &:hover,
  &:focus {
    background-color: var(--color-gray08);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--color-gray);
  font-weight: 700;
  &:hover,
  &:focus {
    text-shadow: var(--text-shadow);
    color: var(--accent-color-black07);
  }
`;

export const FormIcon = styled.label`
  padding: 0;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: var(--color-input-border);
  width: 30px;
  height: 28px;
  color: var(--accent-color-orange);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    background-color: var(--accent-color-orange);
    color: var(--accent-color-black07);
  }
`;
