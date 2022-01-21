import React, { useContext } from "react";
import { Contexto } from "../context/Context";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ dark }) => (dark ? "#07032E" : "rgb(228,239,253)")};
  margin-bottom: 40px;
  border-bottom: 2px solid rgb(0, 130, 228);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    align-items: center;
    gap: 1rem;
    z-index: 2;

    h2,
    h3 {
      padding: 0;
      margin: 0;
      text-align: center;
    }

    h3 {
      color: ${({ dark }) => (dark ? "white" : "black")};
    }
  }
`;

export default function Title({ taskCount, finished }) {
  const { dark } = useContext(Contexto);

  return (
    <Section dark={dark}>
      <div>
        <h2>Total:</h2>
        <h2>Realizadas:</h2>
        <h2>Por hacer:</h2>
      </div>
      <div>
        <h3>{taskCount}</h3>
        <h3>{finished}</h3>
        <h3>{taskCount - finished}</h3>
      </div>
    </Section>
  );
}
