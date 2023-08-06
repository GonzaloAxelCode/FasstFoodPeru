import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
const Button = styled.button`
  cursor: pointer;
  display: ${(props) => (props.hidden ? "none" : "flex")};
  background-color: #333333;
  color: #ffffff;
  align-items: center;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.8em;
  text-transform: uppercase;
  font-family: "Rubik 700";
  border: none;
  padding: 1.1em 1.25em;
  border-radius: 2em;
  -moz-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12) !important;
  -webkit-box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.12) !important;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.12) !important;
  transition: 0.25s all;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;
export default function BtnPrimary(props) {
  const { label } = props;

  return (
    <Button
      hidden={props.hidden}
      type={props.submit ? "submit" : "button"}
      {...props}
    >
      {label ? label : props.children}
    </Button>
  );
}
