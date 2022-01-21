import React, { useContext } from "react";
import Context, { Contexto } from "../context/Context";
import styled from "styled-components";
import mas from "../icons/mas.png";

const Img = styled.img`
  width: 50px;
  height: 50px;
  z-index: 30;
  position: fixed;
  bottom: 5%;
  right: 5%;
`;
const Button = styled.button`
  width: 10px;
  height: 10px;
  font-size: 27px;
  border-radius: 50%;
  border: none;
  background-color: ${({ dark }) => (dark ? "white" : "black")};
  position: fixed;
  bottom: 5%;
  left: 5%;
  z-index: 30;
`;

export default function BtnCreate({ setSwitsh }) {
  const { dark, setDark } = useContext(Contexto);

  return (
    <>
      <Img src={mas} onClick={() => setSwitsh(true)} />
      <Button dark={dark} onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </Button>
    </>
  );
}
