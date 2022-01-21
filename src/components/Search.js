import React, { useContext } from "react";
import { Contexto } from "../context/Context";
import styled from "styled-components";

const Input = styled.input`
  min-width: 65%;
  border: none;
  border-radius: 15px;
  border-bottom: 1px rgb(227, 164, 156) solid;
  outline: none;
  background-color: ${({ dark }) => (dark ? "#302F35" : "rgb(228,239,253)")};
  padding: 10px;
  padding-left: 30px;
  color: rgb(0, 130, 228);
  margin: auto;
`;
const H1 = styled.h1`
  margin: auto;
  margin-bottom: 40px;
  text-decoration: ${({ dark }) => (dark ? "none" : "underline")};
`;

export default function Search({ searching, setSearching }) {
  const { dark } = useContext(Contexto);

  const handleChange = (e) => {
    setSearching(e.target.value);
  };

  return (
    <div>
      <H1 dark={dark}>Lista de tareas</H1>
      <Input
        dark={dark}
        type="search"
        value={searching}
        onChange={handleChange}
        placeholder="Buscar tarea"
      />
    </div>
  );
}
