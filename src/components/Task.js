import React, { useContext } from "react";
import { Contexto } from "../context/Context";
import styled from "styled-components";
import iconoCheck from "../icons/check2.png";
import iconoCheckOk from "../icons/check.png";
import iconoDelete from "../icons/delete.png";

const Li = styled.li`
  text-decoration: ${({ ok }) => ok && "line-through"};
  text-align: center;
  position: relative;
  list-style: none;
  border-radius: 12px;
  padding: 2rem 2rem 2rem 2rem;
  background-color: ${({ ok, dark }) =>
    dark
      ? ok
        ? "black"
        : "#07032E"
      : ok
      ? "rgb(231,224,217)"
      : "rgb(228,239,253)"};
  border-bottom: 2px rgb(227, 164, 156) solid;
  border-right: 2px rgb(227, 164, 156) solid;
  border-left: 1px white solid;
  border-top: 1px white solid;
  margin-top: 30px;
  color: ${({ ok }) => (ok ? "white" : "rgb(0,130,228)")};
  font-weight: bold;
  letter-spacing: 1px;
  word-break: break-all;
`;

const Img = styled.img`
  position: absolute;
  left: ${({ left }) => left};
  right: 8px;
  bottom: ${({ left }) => (left ? "64px" : "58px")};
  background-color: ${({ color }) => (color ? color : "rgb(60,200,200)")};
  width: 30px;
  height: 30px;
  font-size: 30px;
  z-index: 5;
  border-radius: 50px;
`;

const P = styled.p`
 margin: 0;
 letter-spacing: 1px;
`

export default function Task({ text, isOk, completedMark, removed, fecha, eliminacion }) {
  const { dark } = useContext(Contexto);

  return (
    <>
    <div style={{ position: "relative" }}>
      <Img
        onClick={() => completedMark(text)}
        src={isOk ? iconoCheckOk : iconoCheck}
        color="rgb(228,239,253)"
        left="0px"
      />
      <Li ok={isOk} dark={dark} onClick={() => completedMark(text)}>
        {text}
      </Li>
      <Img onClick={() => removed(text)} src={iconoDelete} />
    </div>
      <P>{`Creada: ${fecha}`}</P>
      {isOk && <P>{`Realizada: ${eliminacion}`}</P>}
    </>
  );
}
